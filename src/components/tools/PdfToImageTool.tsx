import { useState, useRef, ChangeEvent } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import JSZip from 'jszip';
import { Upload, FileText, Download, Loader2, AlertCircle, X, CheckCircle } from 'lucide-react';

// Use jsdelivr CDN for better sandbox compatibility
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';

interface PdfToImageToolProps {
  embedded?: boolean;
}

export function PdfToImageTool({ embedded = false }: PdfToImageToolProps) {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [numPages, setNumPages] = useState<number | null>(null);
  const [quality, setQuality] = useState<number>(0.9);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  const handleConvertAndDownload = async () => {
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
      
      const zip = new JSZip();
      const canvas = canvasRef.current;
      
      if (!canvas) {
        throw new Error('Canvas element not available');
      }
      
      const context = canvas.getContext('2d');
      if (!context) {
        throw new Error('Could not get canvas context');
      }

      for (let i = 1; i <= numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 2 });
        
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        
        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        
        await (page.render as any)(renderContext).promise;
        
        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        const base64Data = dataUrl.split(',')[1];
        
        zip.file(`${fileName}_page_${i}.jpg`, base64Data, { base64: true });
        
        setProgress(Math.round((i / numPages) * 100));
      }
      
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(zipBlob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `${fileName}_images.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      setSuccess(`Successfully converted ${numPages} pages to JPG images`);
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">PDF to JPG</h1>
          <p className="text-gray-600">Convert PDF pages to high-quality JPG images</p>
        </div>
      )}

      <canvas ref={canvasRef} className="hidden" />

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

      {file && (
        <div className="space-y-6">
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
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image Quality
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="0.5"
                max="1"
                step="0.1"
                value={quality}
                onChange={(e) => setQuality(parseFloat(e.target.value))}
                disabled={isProcessing}
                className="flex-1"
              />
              <span className="text-sm font-medium text-gray-900 min-w-[3rem]">
                {Math.round(quality * 100)}%
              </span>
            </div>
          </div>

          {isProcessing && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700">Converting pages...</span>
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

          {error && (
            <div className="flex items-start space-x-3 p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-red-800">{error}</p>
              </div>
              <button onClick={() => setError(null)} className="text-red-400 hover:text-red-600">
                <X size={16} />
              </button>
            </div>
          )}

          {success && (
            <div className="flex items-start space-x-3 p-4 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-green-800">{success}</p>
              </div>
              <button onClick={() => setSuccess(null)} className="text-green-400 hover:text-green-600">
                <X size={16} />
              </button>
            </div>
          )}

          <button
            onClick={handleConvertAndDownload}
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
                Convert to JPG & Download
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
