import { PDFDocument } from 'pdf-lib';

export async function mergePDFs(files: File[]): Promise<Uint8Array> {
  if (files.length < 2) {
    throw new Error('At least 2 PDF files are required for merging');
  }

  const mergedPdf = await PDFDocument.create();
  
  for (const file of files) {
    if (file.type !== 'application/pdf') {
      throw new Error(`File ${file.name} is not a valid PDF`);
    }
    
    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(arrayBuffer);
    const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
    
    copiedPages.forEach(page => {
      mergedPdf.addPage(page);
    });
  }
  
  return await mergedPdf.save();
}

export function downloadFile(data: Uint8Array, filename: string): void {
  const blob = new Blob([data as unknown as BlobPart], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
