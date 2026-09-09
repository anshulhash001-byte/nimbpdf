import { Merge, Split, Image, Minimize2, FileText } from 'lucide-react';

export interface Tool {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  icon: any;
  category: 'organize' | 'optimize' | 'convert' | 'secure';
  isAvailable: boolean;
  howToUse: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  features: string[];
  faq?: Array<{
    question: string;
    answer: string;
  }>;
}

export const tools: Tool[] = [
  {
    slug: 'merge-pdf',
    name: 'Merge PDF Files',
    shortName: 'Merge',
    description: 'Combine multiple PDF files into one document',
    longDescription: 'Combine multiple PDF files into a single, organized document. Perfect for combining reports, contracts, or any collection of PDFs into one seamless file.',
    icon: Merge,
    category: 'organize',
    isAvailable: true,
    howToUse: [
      {
        step: 1,
        title: 'Upload your PDFs',
        description: 'Drag and drop or select the PDF files you want to merge. You can upload up to 20 files at once.',
      },
      {
        step: 2,
        title: 'Arrange the order',
        description: 'Reorder the files by dragging them into your preferred sequence. The final PDF will follow this order.',
      },
      {
        step: 3,
        title: 'Download merged PDF',
        description: 'Click "Merge PDFs" and your combined document will download automatically. It\'s that simple.',
      },
    ],
    features: [
      'Combine up to 20 PDFs at once',
      'Drag-and-drop reordering',
      'No file size limits',
      'Files processed locally in your browser',
    ],
    faq: [
      {
        question: 'Is there a limit to how many PDFs I can merge?',
        answer: 'You can merge up to 20 PDF files in a single operation. For larger batches, you can merge them in groups.',
      },
      {
        question: 'Will the quality of my PDFs be preserved?',
        answer: 'Yes, merging PDFs preserves the original quality of each document. No compression or quality loss occurs during the merge process.',
      },
    ],
  },
  {
    slug: 'split-pdf',
    name: 'Split PDF Files',
    shortName: 'Split',
    description: 'Extract pages or split PDF into multiple files',
    longDescription: 'Split a PDF into multiple files or extract specific pages. Choose custom page ranges or split into individual pages with just a few clicks.',
    icon: Split,
    category: 'organize',
    isAvailable: true,
    howToUse: [
      {
        step: 1,
        title: 'Upload your PDF',
        description: 'Select the PDF file you want to split. We support files up to 100MB.',
      },
      {
        step: 2,
        title: 'Choose split method',
        description: 'Select specific page ranges, extract every N pages, or split into individual pages.',
      },
      {
        step: 3,
        title: 'Download split files',
        description: 'Your split PDFs will be packaged in a ZIP file for easy download.',
      },
    ],
    features: [
      'Extract specific page ranges',
      'Split into individual pages',
      'Batch split every N pages',
      'Download as ZIP archive',
    ],
    faq: [
      {
        question: 'Can I extract specific pages from a PDF?',
        answer: 'Yes! You can enter page ranges like "1-3, 5, 7-10" to extract exactly the pages you need.',
      },
      {
        question: 'What happens when I extract all pages?',
        answer: 'When you choose to extract all pages, each page becomes a separate PDF file, and they\'re all packaged in a convenient ZIP file for download.',
      },
    ],
  },
  {
    slug: 'pdf-to-jpg',
    name: 'PDF to JPG',
    shortName: 'PDF to JPG',
    description: 'Convert PDF pages to high-quality JPG images',
    longDescription: 'Convert your PDF pages into high-resolution JPG images. Perfect for presentations, social media, or when you need individual page images.',
    icon: Image,
    category: 'convert',
    isAvailable: true,
    howToUse: [
      {
        step: 1,
        title: 'Upload your PDF',
        description: 'Select the PDF file you want to convert to images.',
      },
      {
        step: 2,
        title: 'Choose image quality',
        description: 'Select from standard, high, or original quality based on your needs.',
      },
      {
        step: 3,
        title: 'Download JPG images',
        description: 'Each page becomes a separate JPG file, packaged in a ZIP archive.',
      },
    ],
    features: [
      'High-resolution output',
      'Multiple quality options',
      'Batch conversion',
      'Preserves page layout',
    ],
    faq: [
      {
        question: 'What image quality options are available?',
        answer: 'You can choose from 50% to 100% quality. Higher quality means larger file sizes but better image clarity.',
      },
      {
        question: 'Will the images maintain the original PDF layout?',
        answer: 'Yes, each page is rendered at 2x scale for maximum clarity while preserving the original layout and formatting.',
      },
    ],
  },
  {
    slug: 'compress-pdf',
    name: 'Compress PDF',
    shortName: 'Compress',
    description: 'Reduce PDF file size without losing quality',
    longDescription: 'Compress your PDF files to reduce their size while maintaining excellent quality. Perfect for email attachments and web uploads.',
    icon: Minimize2,
    category: 'optimize',
    isAvailable: false,
    howToUse: [
      {
        step: 1,
        title: 'Upload your PDF',
        description: 'Select the PDF file you want to compress.',
      },
      {
        step: 2,
        title: 'Choose compression level',
        description: 'Select from recommended, extreme, or less compression based on your needs.',
      },
      {
        step: 3,
        title: 'Download compressed PDF',
        description: 'Get your smaller PDF file ready for sharing via email or upload.',
      },
    ],
    features: [
      'Up to 90% size reduction',
      'Multiple compression levels',
      'Quality preservation',
      'Batch compression available',
    ],
  },
  {
    slug: 'pdf-to-word',
    name: 'PDF to Word',
    shortName: 'PDF to Word',
    description: 'Convert PDF to editable Word documents',
    longDescription: 'Transform your PDF files into fully editable Word documents (.docx) while preserving formatting, images, and layout.',
    icon: FileText,
    category: 'convert',
    isAvailable: false,
    howToUse: [
      {
        step: 1,
        title: 'Upload your PDF',
        description: 'Select the PDF file you want to convert to Word format.',
      },
      {
        step: 2,
        title: 'Convert to Word',
        description: 'Our engine will extract text, images, and formatting from your PDF.',
      },
      {
        step: 3,
        title: 'Download Word file',
        description: 'Get your editable .docx file ready for modifications in Microsoft Word.',
      },
    ],
    features: [
      'Preserves formatting and images',
      'Editable text output',
      'OCR for scanned PDFs',
      'Works with any PDF',
    ],
  },
  {
    slug: 'jpg-to-pdf',
    name: 'JPG to PDF',
    shortName: 'JPG to PDF',
    description: 'Convert images to PDF documents',
    longDescription: 'Combine multiple JPG images into a single PDF document. Perfect for creating photo albums, portfolios, or image-based reports.',
    icon: Image,
    category: 'convert',
    isAvailable: false,
    howToUse: [
      {
        step: 1,
        title: 'Upload your images',
        description: 'Select one or more JPG images you want to convert to PDF.',
      },
      {
        step: 2,
        title: 'Arrange and customize',
        description: 'Reorder images, adjust page size, and set margins to your preference.',
      },
      {
        step: 3,
        title: 'Download PDF',
        description: 'Get your PDF document with all images arranged as you specified.',
      },
    ],
    features: [
      'Multiple images per PDF',
      'Customizable page size',
      'Adjustable margins',
      'Image reordering',
    ],
  },
];

export const toolsBySlug = tools.reduce((acc, tool) => {
  acc[tool.slug] = tool;
  return acc;
}, {} as Record<string, Tool>);
