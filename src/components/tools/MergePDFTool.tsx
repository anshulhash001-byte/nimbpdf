'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { PDFDocument } from 'pdf-lib';
import { Upload, FileText, Download, Loader2, AlertCircle, X, CheckCircle, Trash2 } from 'lucide-react';

interface MergePDFToolProps {
  embedded?: boolean;
}

interface UploadedFile {
  id: string;
  file: File;
  name: string;
  size: number;
}

export function MergePDFTool({ embedded = false }: MergePDFToolProps) {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map((file) => ({
      id: crypto.randomUUID(),
      file,
      name: file.name,
      size: file.size,
    }));
    setFiles((prev) => [...prev, ...newFiles]);
    setError(null);
    setSuccess(null);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
    },
    multiple: true,
  });

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const clearFiles = () => {
    setFiles([]);
    setError(null);
    setSuccess(null);
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      setError('You must upload at least 2 PDF files to merge');
      return;
    }

    setIsProcessing(true);
    setError(null);
    setSuccess(null);

    try {
      const mergedPdf = await PDFDocument.create();

      for (const uploadedFile of files) {
        const arrayBuffer = await uploadedFile.file.arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      const mergedPdfBytes = await mergedPdf.save();
      const blob = new Blob([mergedPdfBytes as any], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      const dateStr = new Date().toISOString().split('T')[0];
      const filename = `NimbPDF-Merged-${dateStr}.pdf`;

      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setSuccess(`Successfully merged ${files.length} PDF files!`);
      clearFiles();
    } catch (err) {
      console.error('Merge error:', err);
      setError(err instanceof Error ? err.message : 'Failed to merge PDFs');
    } finally {
      setIsProcessing(false);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className={embedded ? '' : 'max-w-4xl mx-auto p-6'}>
      {!embedded && (
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Merge PDFs</h1>
          <p className="text-gray-600">Combine multiple PDF files into a single document</p>
        </div>
      )}

      {/* Upload Zone */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragActive
            ? 'border-brand-500 bg-brand-50'
            : 'border-gray-300 hover:border-brand-400 hover:bg-gray-50'
        }`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <p className="text-lg font-medium text-gray-900 mb-1">
          {isDragActive ? 'Drop PDF files here' : 'Drag & drop PDF files here'}
        </p>
        <p className="text-gray-500 mb-2">or click to browse</p>
        <p className="text-sm text-gray-400">Supports multiple PDF files</p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded flex items-start justify-between">
          <div className="flex items-start space-x-2">
            <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium mb-1">Error</h3>
              <p>{error}</p>
            </div>
          </div>
          <button onClick={() => setError(null)} className="text-red-500 hover:text-red-700">
            <X size={20} />
          </button>
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded flex items-start justify-between">
          <div className="flex items-start space-x-2">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium mb-1">Success</h3>
              <p>{success}</p>
            </div>
          </div>
          <button onClick={() => setSuccess(null)} className="text-green-500 hover:text-green-700">
            <X size={20} />
          </button>
        </div>
      )}

      {/* File List */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Uploaded Files ({files.length})</h2>

        {files.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
            <p className="text-gray-500">No files uploaded yet. Use the upload area to add PDF files.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {files.map((file, index) => (
              <div
                key={file.id}
                className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center space-x-3">
                  <span className="bg-brand-100 text-brand-800 text-sm font-medium w-6 h-6 rounded-full flex items-center justify-center">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-medium text-gray-900 truncate max-w-xs">{file.name}</p>
                    <p className="text-sm text-gray-500">{formatFileSize(file.size)}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(file.id)}
                  disabled={isProcessing}
                  className="text-red-500 hover:text-red-700 p-1 disabled:opacity-50"
                  title="Remove file"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}

            <div className="flex justify-between mt-4">
              <button
                onClick={clearFiles}
                disabled={isProcessing}
                className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-md transition-colors disabled:opacity-50"
              >
                Clear All Files
              </button>

              <button
                onClick={handleMerge}
                disabled={isProcessing || files.length < 2}
                className={`px-6 py-2 rounded-md font-medium transition-colors flex items-center ${
                  isProcessing || files.length < 2
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-brand-600 text-white hover:bg-brand-700'
                }`}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                    Merging PDFs...
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-4 w-4" />
                    Merge {files.length} PDFs
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
