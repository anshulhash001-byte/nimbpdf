import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText, CheckCircle, Loader2 } from 'lucide-react';
import { useFileStore } from '../../store/appStore';

interface FileUploadZoneProps {
  onFilesAdded?: () => void;
}

export function FileUploadZone({ onFilesAdded }: FileUploadZoneProps) {
  const { files, addFiles } = useFileStore();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      addFiles(acceptedFiles);
      if (onFilesAdded) onFilesAdded();
    },
    [addFiles, onFilesAdded]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
    },
    multiple: true,
  });

  return (
    <div
      {...getRootProps()}
      className={`relative rounded-2xl border-2 border-dashed p-12 text-center cursor-pointer transition-all duration-300 ${
        isDragActive
          ? 'border-brand-500 bg-brand-50 scale-[1.02] shadow-lg shadow-brand-100'
          : files.length > 0
          ? 'border-green-300 bg-green-50'
          : 'border-gray-300 hover:border-brand-400 hover:bg-brand-50/30'
      }`}
    >
      <input {...getInputProps()} />
      
      {/* Icon */}
      <div className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-all ${
        isDragActive
          ? 'bg-brand-100 text-brand-600 scale-110'
          : files.length > 0
          ? 'bg-green-100 text-green-600'
          : 'bg-gray-100 text-gray-400 group-hover:bg-brand-100 group-hover:text-brand-500'
      }`}>
        {files.length > 0 ? (
          <CheckCircle className="h-8 w-8" />
        ) : (
          <Upload className="h-8 w-8" />
        )}
      </div>

      {/* Text */}
      <div className="space-y-2">
        {files.length > 0 ? (
          <>
            <p className="text-xl font-semibold text-green-900">
              {files.length} file{files.length > 1 ? 's' : ''} ready
            </p>
            <p className="text-sm text-green-600">
              Drop more files or click to add additional PDFs
            </p>
          </>
        ) : (
          <>
            <p className="text-xl font-semibold text-gray-900">
              <span className="text-brand-600">Click to upload</span> or drag and drop
            </p>
            <p className="text-sm text-gray-500">
              PDF files only • Max 100MB per file
            </p>
          </>
        )}
      </div>

      {/* File count badge */}
      {files.length > 0 && (
        <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
          <FileText className="h-3 w-3" />
          {files.length} file{files.length > 1 ? 's' : ''} selected
        </div>
      )}

      {/* Decorative corner elements */}
      <div className={`absolute top-4 left-4 h-3 w-3 border-t-2 border-l-2 rounded-tl transition-colors ${
        isDragActive ? 'border-brand-400' : 'border-gray-200'
      }`} />
      <div className={`absolute top-4 right-4 h-3 w-3 border-t-2 border-r-2 rounded-tr transition-colors ${
        isDragActive ? 'border-brand-400' : 'border-gray-200'
      }`} />
      <div className={`absolute bottom-4 left-4 h-3 w-3 border-b-2 border-l-2 rounded-bl transition-colors ${
        isDragActive ? 'border-brand-400' : 'border-gray-200'
      }`} />
      <div className={`absolute bottom-4 right-4 h-3 w-3 border-b-2 border-r-2 rounded-br transition-colors ${
        isDragActive ? 'border-brand-400' : 'border-gray-200'
      }`} />
    </div>
  );
}
