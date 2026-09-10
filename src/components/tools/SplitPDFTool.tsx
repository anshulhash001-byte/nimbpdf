import { useState, useRef, ChangeEvent } from 'react';
import { PDFDocument } from 'pdf-lib';
import JSZip from 'jszip';
import { Upload, FileText, Download, Loader2, AlertCircle, X, CheckCircle } from 'lucide-react';

interface SplitPDFToolProps {
  embedded?: boolean;
}

export function SplitPDFTool({ embedded = false }: SplitPDFToolProps) {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageRange, setPageRange] = useState<string>('');
  const [extractAll, setExtractAll] = useState<boolean>(false);
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
          const arrayBuffer = reader.result as ArrayBuffer;
          const pdf = await PDFDocument.load(arrayBuffer);
          setNumPages(pdf.getPageCount());
        } catch (err) {
          setError('Failed to read PDF file. Please ensure it\'s a valid PDF.');
          setFile(null);
        }
      };
      reader.readAsArrayBuffer(selectedFile);
    } else {
      setError('Please select a valid PDF file.');
    }
  };

  const parsePageRanges = (rangeStr: string, maxPages: number): number[] => {
    const pages: Set<number> = new Set();
    const parts = rangeStr.split(',').map(s => s.trim());
    
    for (const part of parts) {
      if (!part) continue;
      
      if (part.includes('-')) {
        const [start, end] = part.split('-').map(s => parseInt(s.trim()));
        if (isNaN(start) || isNaN(end)) {
          throw new Error(`Invalid range: ${part}`);
        }
        if (start < 1 || end > maxPages || start > end) {
          throw new Error(`Range ${part} is out of bounds (1-${maxPages})`);
        }
        for (let i = start; i <= end; i++) {
          pages.add(i);
        }
      } else {
        const page = parseInt(part);
        if (isNaN(page)) {
          throw new Error(`Invalid page number: ${part}`);
        }
        if (page < 1 || page > maxPages) {
          throw new Error(`Page ${page} is out of bounds (1-${maxPages})`);
        }
        pages.add(page);
      }
    }
    
    return Array.from(pages).sort((a, b) => a - b);
  };

  const handleSplit = async () => {
    if (!file) {
      setError('Please upload a PDF file first');
      return;
    }

    if (!extractAll && !pageRange.trim()) {
      setError('Please enter page ranges or enable "Extract all pages"');
      return;
    }

    setIsProcessing(true);
    setError(null);
    setSuccess(null);
    setProgress(0);

    try {
      const arrayBuffer = await file.arrayBuffer();
      const sourcePdf = await PDFDocument.load(arrayBuffer);
      const totalPages = sourcePdf.getPageCount();

      if (extractAll) {
        const zip = new JSZip();
        const baseName = file.name.replace('.pdf', '');

        for (let i = 0; i < totalPages; i++) {
          const newPdf = await PDFDocument.create();
          const [copiedPage] = await newPdf.copyPages(sourcePdf, [i]);
          newPdf.addPage(copiedPage);
          
          const pdfBytes = await newPdf.save();
          zip.file(`${baseName}_page_${i + 1}.pdf`, pdfBytes as any);
          
          setProgress(Math.round(((i + 1) / totalPages) * 100));
        }

        const zipBlob = await zip.generateAsync({ type: 'blob' });
        downloadBlob(zipBlob, `${baseName}_all_pages.zip`);
        setSuccess(`Successfully extracted ${totalPages} pages into a ZIP file`);
      } else {
        const pagesToExtract = parsePageRanges(pageRange, totalPages);
        
        if (pagesToExtract.length === 0) {
          throw new Error('No valid pages specified');
        }

        const newPdf = await PDFDocument.create();
        const copiedPages = await newPdf.copyPages(
          sourcePdf,
          pagesToExtract.map(p => p - 1)
        );
        
        copiedPages.forEach(page => newPdf.addPage(page));
        
        const pdfBytes = await newPdf.save();
        const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });
        
        const baseName = file.name.replace('.pdf', '');
        const rangeStr = pageRange.replace(/[^0-9-]/g, '_');
        downloadBlob(blob, `${baseName}_pages_${rangeStr}.pdf`);
        
        setSuccess(`Successfully extracted ${pagesToExtract.length} page(s)`);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to split PDF');
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadBlob = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    setFile(null);
    setFileName('');
    setNumPages(null);
    setPageRange('');
    setExtractAll(false);
    setError(null);
    setSuccess(null);
    setProgress(0);
  };

  return (
    <div className={embedded ? '' : 'max-w-4xl mx-auto p-6'}>
      {!embedded && (
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Split PDF</h1>
          <p className="text-gray-600">Extract specific pages or split into individual files</p>
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

          {/* Options */}
          <div className="space-y-4">
            {/* Toggle for Extract All */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Extract all pages as separate files</p>
                <p className="text-sm text-gray-500">Each page becomes a separate PDF in a ZIP file</p>
              </div>
              <button
                onClick={() => setExtractAll(!extractAll)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  extractAll ? 'bg-brand-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    extractAll ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Page Range Input */}
            {!extractAll && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Page ranges to extract
                </label>
                <input
                  type="text"
                  value={pageRange}
                  onChange={(e) => setPageRange(e.target.value)}
                  placeholder="e.g., 1-3, 5, 7-10"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Enter page numbers or ranges separated by commas
                </p>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          {isProcessing && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700">Processing...</span>
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
            onClick={handleSplit}
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
                Processing...
              </>
            ) : (
              <>
                <Download className="mr-2 h-5 w-5" />
                {extractAll ? 'Extract All Pages' : 'Split & Download'}
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
