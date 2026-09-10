import { lazy, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Construction, Loader2 } from 'lucide-react';
import { toolsBySlug } from '../config/tools';
import { getToolSEO } from '../config/seo';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { ToolLayout } from '../components/layout/ToolLayout';
import { SplitPDFTool } from '../components/tools/SplitPDFTool';
import { MergePDFTool } from '../components/tools/MergePDFTool';
import { JpgToPdfTool } from '../components/tools/JpgToPdfTool';
import { CompressPDFTool } from '../components/tools/CompressPDFTool';
import { PdfToWordTool } from '../components/tools/PdfToWordTool';
import { Button } from '../components/ui/button';

const PdfToImageTool = lazy(() =>
  import('../components/tools/PdfToImageTool').then((module) => ({
    default: module.PdfToImageTool,
  }))
);

export function ToolPage() {
  const { slug } = useParams<{ slug: string }>();
  const tool = slug ? toolsBySlug[slug] : null;
  const seo = slug ? getToolSEO(slug) : null;

  // Set up dynamic meta tags
  useDocumentMeta({
    title: seo?.title || 'PDF Tools - NimbPDF',
    description: seo?.description || 'Free online PDF tools. Merge, split, convert PDFs in seconds. No sign-up required.',
    keywords: seo?.keywords,
    openGraph: seo?.openGraph,
  });

  // Extract H1 title from SEO title (remove brand name)
  const h1Title = seo?.openGraph?.title || tool?.name;

  // 404 - Tool not found
  if (!tool) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100">
          <Construction className="h-8 w-8 text-gray-400" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Tool not found
        </h1>
        <p className="text-gray-600 mb-6 max-w-md">
          The tool you're looking for doesn't exist or hasn't been built yet.
        </p>
        <div className="flex gap-3">
          <Button variant="outline" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button asChild>
            <Link to="/#tools">Browse all tools</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Tool not yet available - show coming soon
  if (!tool.isAvailable) {
    return (
      <ToolLayout tool={tool} h1Title={h1Title}>
        <ComingSoonContent toolName={tool.name} />
      </ToolLayout>
    );
  }

  // Render the appropriate tool based on slug
  switch (slug) {
    case 'merge-pdf':
      return (
        <ToolLayout tool={tool} h1Title={h1Title}>
          <MergeToolContent />
        </ToolLayout>
      );
    case 'split-pdf':
      return (
        <ToolLayout tool={tool} h1Title={h1Title}>
          <SplitToolContent />
        </ToolLayout>
      );
    case 'pdf-to-jpg':
      return (
        <ToolLayout tool={tool} h1Title={h1Title}>
          <Suspense fallback={<LoadingSkeleton />}>
            <PdfToImageToolContent />
          </Suspense>
        </ToolLayout>
      );
    case 'jpg-to-pdf':
      return (
        <ToolLayout tool={tool} h1Title={h1Title}>
          <JpgToPdfToolContent />
        </ToolLayout>
      );
    case 'compress-pdf':
      return (
        <ToolLayout tool={tool} h1Title={h1Title}>
          <CompressPDFToolContent />
        </ToolLayout>
      );
    case 'pdf-to-word':
      return (
        <ToolLayout tool={tool} h1Title={h1Title}>
          <PdfToWordToolContent />
        </ToolLayout>
      );
    default:
      return (
        <ToolLayout tool={tool} h1Title={h1Title}>
          <ComingSoonContent toolName={tool.name} />
        </ToolLayout>
      );
  }
}

// Coming Soon Placeholder
function ComingSoonContent({ toolName }: { toolName: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50">
        <Construction className="h-8 w-8 text-brand-500" />
      </div>
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        {toolName} - Coming Soon
      </h2>
      <p className="text-gray-600 max-w-md mb-6">
        We're working hard to bring you this tool. Sign up for our newsletter to
        be notified when it launches.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 rounded-lg border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
        />
        <Button variant="premium">Notify me</Button>
      </div>
    </div>
  );
}

// Loading skeleton for lazy-loaded tools
function LoadingSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <Loader2 className="h-8 w-8 animate-spin text-brand-500 mb-4" />
      <p className="text-gray-600">Loading tool...</p>
    </div>
  );
}

// Merge Tool Content
function MergeToolContent() {
  return <MergePDFTool embedded />;
}

// Split Tool Content
function SplitToolContent() {
  return <SplitPDFTool embedded />;
}

// PDF to Image Tool Content
function PdfToImageToolContent() {
  return <PdfToImageTool embedded />;
}

// JPG to PDF Tool Content
function JpgToPdfToolContent() {
  return <JpgToPdfTool embedded />;
}

// Compress PDF Tool Content
function CompressPDFToolContent() {
  return <CompressPDFTool embedded />;
}

// PDF to Word Tool Content
function PdfToWordToolContent() {
  return <PdfToWordTool embedded />;
}
