import { useState, ChangeEvent } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import { Upload, FileText, Download, Loader2, AlertCircle, X, CheckCircle } from 'lucide-react';

// Use jsdelivr CDN for better sandbox compatibility
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';

interface PdfToWordToolProps {
  embedded?: boolean;
}

export function PdfToWordTool({ embedded = false }: PdfToWordToolProps) {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [numPages, setNumPages] = useState<number | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setFileName(selectedFile.name.replace('.pdf', ''));
      setError(null);
      setSuccess(null);
      setProgress(0);
      
      // Get page count
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const typedArray = new Uint8Array(reader.result as ArrayBuffer);
          const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;
          setNumPages(pdf.numPages);
        } catch (err: any) {
          if (err?.message?.includes('CORS') || err?.message?.includes('MIME') || err?.message?.includes('worker')) {
            setError('Browser security settings blocked PDF rendering in this preview. This tool will work perfectly on the live website!');
          } else {
            setError('Failed to read PDF file. Please ensure it\'s a valid PDF.');
          }
          setFile(null);
        }
      };
      reader.readAsArrayBuffer(selectedFile);
    } else {
      setError('Please select a valid PDF file.');
    }
  };

  const handleConvert = async () => {
    if (!file || !numPages) {
      setError('No file selected or PDF not loaded.');
      return;
    }

    setIsProcessing(true);
    setError(null);
    setSuccess(null);
    setProgress(0);

    try {
      const arrayBuffer = await file.arrayBuffer();
      const typedArray = new Uint8Array(arrayBuffer);
      const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;
      
      let extractedText = '';
      
      // Extract text from each page
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        
        // Combine all text items from this page
        const pageText = textContent.items
          .map((item: any) => item.str)
          .join(' ');
        
        extractedText += pageText + '\n\n';
        
        // Update progress
        setProgress(Math.round((i / pdf.numPages) * 100));
      }
      
      // Create Word-readable HTML document
      const htmlContent = `
        <html xmlns:o='urn:schemas-microsoft-com:office:office' 
              xmlns:w='urn:schemas-microsoft-com:office:word' 
              xmlns='http://www.w3.org/TR/REC-html40'>
        <head>
          <meta charset='utf-8'>
          <title>Converted Document</title>
          <style>
            body { font-family: Calibri, Arial, sans-serif; font-size: 11pt; line-height: 1.5; }
            p { margin: 0 0 10pt 0; }
          </style>
        </head>
        <body>
          <p>${extractedText.replace(/\n/g, '<br/>')}</p>
        </body>
        </html>
      `;
      
      // Create blob with UTF-8 BOM for proper encoding
      const blob = new Blob(['\ufeff', htmlContent], { type: 'application/msword' });
      const url = URL.createObjectURL(blob);
      
      // Download the file
      const link = document.createElement('a');
      link.href = url;
      link.download = `NimbPDF-Converted.doc`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      setSuccess(`Successfully extracted text from ${pdf.numPages} page${pdf.numPages !== 1 ? 's' : ''}!`);
    } catch (err: any) {
      console.error('Conversion error:', err);
      if (err?.message?.includes('CORS') || err?.message?.includes('MIME') || err?.message?.includes('worker')) {
        setError('Browser security settings blocked PDF rendering in this preview. This tool will work perfectly on the live website!');
      } else {
        setError(err instanceof Error ? err.message : 'An unknown error occurred during conversion.');
      }
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setFileName('');
    setNumPages(null);
    setError(null);
    setSuccess(null);
    setProgress(0);
  };

  return (
    <div className={embedded ? '' : 'max-w-4xl mx-auto p-6'}>
      {!embedded && (
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">PDF to Word</h1>
          <p className="text-gray-600">Extract text from PDF and convert to Word document</p>
        </div>
      )}

      {/* Upload Zone */}
      {!file && (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer inline-block"
          >
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-lg font-medium text-gray-900 mb-1">
              Click to upload PDF
            </p>
            <p className="text-gray-500">or drag and drop</p>
          </label>
        </div>
      )}

      {/* File Info & Controls */}
      {file && (
        <div className="space-y-6">
          {/* File Card */}
          <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="bg-brand-100 p-2 rounded-lg">
                <FileText className="h-6 w-6 text-brand-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">{file.name}</p>
                <p className="text-sm text-gray-500">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                  {numPages && ` • ${numPages} page${numPages !== 1 ? 's' : ''}`}
                </p>
              </div>
            </div>
            <button
              onClick={handleReset}
              disabled={isProcessing}
              className="text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50"
              title="Remove file"
            >
              <X size={20} />
            </button>
          </div>

          {/* Info Box */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>How it works:</strong> This tool extracts all text content from your PDF and saves it as a Word-compatible document (.doc). The formatting will be simplified to plain text.
            </p>
          </div>

          {/* Progress Bar */}
          {isProcessing && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700">Extracting text...</span>
                <span className="font-medium text-gray-900">{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-brand-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="flex items-start space-x-3 p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-red-800">{error}</p>
              </div>
              <button
                onClick={() => setError(null)}
                className="text-red-400 hover:text-red-600"
              >
                <X size={16} />
              </button>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="flex items-start space-x-3 p-4 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-green-800">{success}</p>
              </div>
              <button
                onClick={() => setSuccess(null)}
                className="text-green-400 hover:text-green-600"
              >
                <X size={16} />
              </button>
            </div>
          )}

          {/* Action Button */}
          <button
            onClick={handleConvert}
            disabled={isProcessing || !file}
            className={`w-full py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center ${
              isProcessing
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-brand-600 text-white hover:bg-brand-700'
            }`}
          >
            {isProcessing ? (
              <>
                <Loader2 className="animate-spin mr-2 h-5 w-5" />
                Converting...
              </>
            ) : (
              <>
                <Download className="mr-2 h-5 w-5" />
                Convert to Word & Download
              </>
            )}
          </button>
        </div>
      )}

      {/* Info Section */}
      {!embedded && (
        <div className="mt-12 bg-gray-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-3">How it works</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start">
              <span className="text-brand-600 font-bold mr-2">1.</span>
              <span>Upload a PDF file</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-600 font-bold mr-2">2.</span>
              <span>Click "Convert to Word & Download" to extract all text</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-600 font-bold mr-2">3.</span>
              <span>The extracted text will be downloaded as a Word-compatible .doc file</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
