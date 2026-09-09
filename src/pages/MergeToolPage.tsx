import { useState } from 'react';
import { useFileStore } from '../store/appStore';
import { mergePDFs, downloadFile } from '../lib/pdfProcessor';
import { Trash2, X } from 'lucide-react';
import { FileUploadZone } from '../components/tools/FileUploadZone';

interface MergeToolPageProps {
  embedded?: boolean;
}

export function MergeToolPage({ embedded = false }: MergeToolPageProps) {
  const { files, removeFile, clearFiles } = useFileStore();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleMerge = async () => {
    if (files.length < 2) {
      setError('You must upload at least 2 PDF files to merge');
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      const fileObjects = files.map(f => f.file);
      const mergedData = await mergePDFs(fileObjects);
      
      const dateStr = new Date().toISOString().split('T')[0];
      const filename = `NimbPDF-Merged-${dateStr}.pdf`;
      
      downloadFile(mergedData, filename);
      clearFiles();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to merge PDFs');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className={embedded ? '' : 'max-w-4xl mx-auto p-6'}>
      {!embedded && (
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Merge PDFs
          </h1>
          <p className="text-gray-600">
            Combine multiple PDF files into a single document
          </p>
        </div>
      )}

      <FileUploadZone />

      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded flex items-start justify-between">
          <div>
            <h3 className="font-medium mb-1">Error</h3>
            <p>{error}</p>
          </div>
          <button onClick={() => setError(null)} className="text-red-500 hover:text-red-700">
            <X size={20} />
          </button>
        </div>
      )}

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
                    <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(file.id)}
                  className="text-red-500 hover:text-red-700 p-1"
                  title="Remove file"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
            
            <div className="flex justify-between mt-4">
              <button
                onClick={clearFiles}
                className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
              >
                Clear All Files
              </button>
              
              <button
                onClick={handleMerge}
                disabled={isProcessing || files.length < 2}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  isProcessing || files.length < 2
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-brand-600 text-white hover:bg-brand-700'
                }`}
              >
                {isProcessing ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Merging PDFs...
                  </span>
                ) : (
                  'Merge PDFs'
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
