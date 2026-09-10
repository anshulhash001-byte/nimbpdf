import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

export function Blog() {
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'How to Reduce PDF File Size Without Losing Quality',
      excerpt: 'Learn the best techniques to compress your PDF files while maintaining crystal-clear quality. Perfect for email attachments and web uploads.',
      date: 'January 15, 2026',
      readTime: '5 min read',
      category: 'Tips & Tricks',
      slug: 'reduce-pdf-file-size',
    },
    {
      id: '2',
      title: 'The Best Free PDF Tools for Students in 2026',
      excerpt: 'Discover essential PDF tools that every student needs for research papers, assignments, and studying. All completely free and privacy-focused.',
      date: 'January 10, 2026',
      readTime: '7 min read',
      category: 'Productivity',
      slug: 'best-pdf-tools-students',
    },
    {
      id: '3',
      title: 'How to Merge Multiple PDFs into One Document',
      excerpt: 'Step-by-step guide to combining multiple PDF files into a single, organized document. Works on any device, no software installation required.',
      date: 'January 5, 2026',
      readTime: '4 min read',
      category: 'Tutorials',
      slug: 'merge-multiple-pdfs',
    },
    {
      id: '4',
      title: 'PDF vs DOCX: Which Format Should You Use?',
      excerpt: 'Understanding the differences between PDF and Word documents, and when to use each format for maximum compatibility and security.',
      date: 'December 28, 2025',
      readTime: '6 min read',
      category: 'Guides',
      slug: 'pdf-vs-docx',
    },
    {
      id: '5',
      title: 'How to Extract Specific Pages from a PDF',
      excerpt: 'Need just a few pages from a large PDF? Learn how to extract exactly the pages you need in seconds, completely free.',
      date: 'December 20, 2025',
      readTime: '3 min read',
      category: 'Tutorials',
      slug: 'extract-pages-from-pdf',
    },
    {
      id: '6',
      title: 'Converting PDF to JPG: A Complete Guide',
      excerpt: 'Everything you need to know about converting PDF pages to high-quality JPG images, including resolution settings and batch processing.',
      date: 'December 15, 2025',
      readTime: '5 min read',
      category: 'Tutorials',
      slug: 'pdf-to-jpg-guide',
    },
  ];

  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            NimbPDF Blog
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Tips, tutorials, and insights to help you work smarter with PDFs.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-block bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {post.category}
                </span>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-brand-600 transition-colors">
                <Link to={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
              >
                Read more
                <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-brand-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Stay updated with the latest PDF tips
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the best PDF tips and tutorials delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-3">
            No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
