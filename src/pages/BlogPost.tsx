import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  author: string;
  content: string[];
}

const blogPosts: Record<string, BlogPost> = {
  'reduce-pdf-file-size': {
    title: 'How to Reduce PDF File Size Without Losing Quality',
    date: 'January 15, 2026',
    readTime: '5 min read',
    author: 'NimbPDF Team',
    content: [
      'Large PDF files can be a hassle when sharing via email or uploading to websites. Fortunately, there are several effective methods to reduce PDF file size while maintaining excellent quality.',
      'The most common approach is to compress images within the PDF. Many PDFs contain high-resolution images that take up significant space. By optimizing these images, you can reduce file size by up to 90% without noticeable quality loss.',
      'Another technique is to remove unnecessary metadata. PDF files often contain hidden data like document properties, embedded fonts, and form fields that you may not need. Stripping these elements can significantly reduce file size.',
      'For scanned documents, consider converting them to searchable PDFs with OCR (Optical Character Recognition). This not only reduces file size but also makes the document searchable and more accessible.',
      'When compressing PDFs, always preview the result to ensure quality meets your needs. Most compression tools offer different quality levels, allowing you to find the perfect balance between file size and visual quality.',
    ],
  },
  'best-pdf-tools-students': {
    title: 'The Best Free PDF Tools for Students in 2026',
    date: 'January 10, 2026',
    readTime: '7 min read',
    author: 'NimbPDF Team',
    content: [
      'As a student, you deal with PDFs daily—research papers, textbooks, assignments, and presentations. Having the right tools can make your academic life much easier.',
      'First and foremost, you need a reliable PDF merger. Combining multiple research papers into a single document is essential for organizing your study materials. NimbPDF offers free merging with no file size limits.',
      'Splitting PDFs is equally important. When you only need specific chapters from a textbook or particular pages from a research paper, a PDF splitter saves you time and storage space.',
      'Converting PDFs to editable formats is another must-have skill. Whether you need to extract text for citations or modify a document, having a PDF to Word converter in your toolkit is invaluable.',
      'Don\'t forget about PDF compression. When submitting assignments via email or learning management systems, file size limits are common. Compressing your PDFs ensures you stay within limits without sacrificing quality.',
      'All these tools are available for free at NimbPDF, with no sign-up required and complete privacy since all processing happens in your browser.',
    ],
  },
  'merge-multiple-pdfs': {
    title: 'How to Merge Multiple PDFs into One Document',
    date: 'January 5, 2026',
    readTime: '4 min read',
    author: 'NimbPDF Team',
    content: [
      'Merging multiple PDF files into a single document is a common task for professionals and students alike. Whether you\'re combining reports, contracts, or research papers, the process is straightforward with the right tools.',
      'The first step is to gather all the PDF files you want to merge. Make sure they\'re in the order you want them to appear in the final document. Most PDF merger tools allow you to drag and drop files to reorder them.',
      'Next, upload your files to a PDF merger tool. NimbPDF allows you to merge up to 20 files at once, with no file size limits. All processing happens in your browser, ensuring your documents remain private.',
      'Once your files are uploaded, review the order and make any necessary adjustments. Some tools also allow you to add page numbers, headers, or watermarks during the merge process.',
      'Finally, click the merge button and download your combined PDF. The entire process takes just seconds, and you\'ll have a single, organized document ready to share or print.',
      'Remember to always preview your merged document before distributing it to ensure everything is in the correct order and all pages are present.',
    ],
  },
  'pdf-vs-docx': {
    title: 'PDF vs DOCX: Which Format Should You Use?',
    date: 'December 28, 2025',
    readTime: '6 min read',
    author: 'NimbPDF Team',
    content: [
      'Choosing between PDF and DOCX (Word document) format depends on your specific needs. Both formats have their strengths, and understanding when to use each can save you time and frustration.',
      'PDF (Portable Document Format) is ideal for sharing final documents. It preserves formatting across all devices and operating systems, ensuring your document looks exactly as intended. PDFs are also more secure, as they can be password-protected and are harder to edit accidentally.',
      'DOCX format is better for collaborative work and documents that need frequent editing. Word documents are easily editable, support track changes, and allow multiple people to work on the same document simultaneously.',
      'For legal documents, contracts, and official submissions, PDF is almost always the preferred format. It provides a permanent record that cannot be easily altered, which is crucial for legal and business purposes.',
      'When working on drafts, research papers, or documents that require feedback, DOCX is more practical. The ability to track changes and add comments makes collaboration much easier.',
      'The good news is that you can easily convert between formats. NimbPDF offers free PDF to Word conversion and vice versa, allowing you to work in the format that best suits your current needs.',
    ],
  },
  'extract-pages-from-pdf': {
    title: 'How to Extract Specific Pages from a PDF',
    date: 'December 20, 2025',
    readTime: '3 min read',
    author: 'NimbPDF Team',
    content: [
      'Sometimes you only need specific pages from a large PDF document. Whether it\'s a particular chapter from a textbook or specific sections from a report, extracting pages is a valuable skill.',
      'The first step is to identify which pages you need. Most PDF splitters allow you to enter page ranges like "1-3, 5, 7-10" to extract exactly the pages you want.',
      'Using a PDF splitter tool like NimbPDF, upload your document and enter the page ranges. The tool will extract those specific pages and create a new PDF with just those pages.',
      'You can also choose to extract all pages as separate files. This is useful when you need each page as an individual document, such as when preparing materials for a presentation or distributing handouts.',
      'The extraction process is fast and preserves the original quality of the pages. All formatting, images, and text remain intact in the extracted pages.',
      'Once extraction is complete, download your new PDF. You now have a focused document with just the pages you need, making it easier to share and manage.',
    ],
  },
  'pdf-to-jpg-guide': {
    title: 'Converting PDF to JPG: A Complete Guide',
    date: 'December 15, 2025',
    readTime: '5 min read',
    author: 'NimbPDF Team',
    content: [
      'Converting PDF pages to JPG images is useful for presentations, social media, web content, and situations where you need individual page images rather than a complete document.',
      'The conversion process involves rendering each PDF page as a high-quality image. Modern conversion tools like NimbPDF use advanced rendering engines to ensure the output images are crisp and clear.',
      'Before converting, consider the resolution you need. Higher resolution images are better for printing and detailed work, but they also have larger file sizes. Most tools allow you to choose quality levels from 50% to 100%.',
      'When converting, each page becomes a separate JPG file. If your PDF has 10 pages, you\'ll get 10 JPG images. These are typically packaged in a ZIP file for easy download.',
      'The conversion preserves all visual elements including text, images, charts, and graphics. However, the text in JPG images is not searchable or selectable, unlike in PDF format.',
      'After conversion, you can use the JPG images for any purpose—uploading to websites, inserting into presentations, sharing on social media, or incorporating into other documents.',
    ],
  },
};

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="container py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been moved.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-medium mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <article>
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-brand-50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to work with PDFs?
              </h2>
              <p className="text-gray-600 mb-6">
                Try NimbPDF's free tools to merge, split, compress, and convert your PDFs.
              </p>
              <Link
                to="/"
                className="inline-block bg-brand-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors"
              >
                Start Editing PDFs
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}
