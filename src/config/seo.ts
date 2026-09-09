export interface ToolSEO {
  title: string;
  description: string;
  keywords: string;
  openGraph: {
    title: string;
    description: string;
  };
}

export const toolSEO: Record<string, ToolSEO> = {
  'merge-pdf': {
    title: 'Merge PDF Files Online Free | Combine PDFs in Seconds - NimbPDF',
    description: 'Merge multiple PDF files into one in seconds. Free, fast, and secure online PDF merger. No sign-up required. Files processed in your browser.',
    keywords: 'merge pdf, combine pdf, pdf merger, join pdf files, merge pdf online free, combine pdfs, pdf combiner',
    openGraph: {
      title: 'Merge PDF Files Online Free | Combine PDFs in Seconds',
      description: 'Merge multiple PDF files into one in seconds. Free, fast, and secure online PDF merger. No sign-up required.',
    },
  },
  'split-pdf': {
    title: 'Split PDF Online Free | Extract PDF Pages - NimbPDF',
    description: 'Split PDF files or extract specific pages instantly. Free online PDF splitter with no file size limits. 100% secure and private.',
    keywords: 'split pdf, extract pdf pages, pdf splitter, separate pdf pages, split pdf online free, extract pages from pdf',
    openGraph: {
      title: 'Split PDF Online Free | Extract PDF Pages',
      description: 'Split PDF files or extract specific pages instantly. Free online PDF splitter with no file size limits. 100% secure and private.',
    },
  },
  'pdf-to-jpg': {
    title: 'Convert PDF to JPG Online Free | PDF to Image - NimbPDF',
    description: 'Convert PDF pages to high-quality JPG images instantly. Free online PDF to JPG converter. No sign-up, no watermarks, blazing fast.',
    keywords: 'pdf to jpg, convert pdf to image, pdf to jpg converter, pdf to image online free, convert pdf to jpg free, pdf to jpeg',
    openGraph: {
      title: 'Convert PDF to JPG Online Free | PDF to Image',
      description: 'Convert PDF pages to high-quality JPG images instantly. Free online PDF to JPG converter. No sign-up, no watermarks.',
    },
  },
};

export function getToolSEO(slug: string): ToolSEO | null {
  return toolSEO[slug] || null;
}
