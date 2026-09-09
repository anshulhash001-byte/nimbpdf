import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowRight, Check, HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../lib/utils';

interface ToolLayoutProps {
  tool: {
    slug: string;
    name: string;
    shortName: string;
    description: string;
    longDescription: string;
    icon: any;
    category: string;
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
  };
  children: ReactNode;
  h1Title?: string;
}

export function ToolLayout({ tool, children, h1Title }: ToolLayoutProps) {
  const Icon = tool.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50/30 to-white">
      {/* Tool Header */}
      <header className="border-b border-gray-100 bg-white">
        <div className="container py-8 md:py-12">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="flex items-center gap-1.5 hover:text-brand-600 transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/#tools" className="hover:text-brand-600 transition-colors">
              Tools
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-gray-900 font-medium">{tool.shortName}</span>
          </nav>

          {/* Title & Description */}
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-200">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                {h1Title || tool.name}
              </h1>
              <p className="mt-2 text-base md:text-lg text-gray-600 max-w-2xl">
                {tool.longDescription}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          {/* Left Column: Tool + How to Use */}
          <div className="space-y-10 min-w-0">
            {/* Tool Content */}
            <section className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
              {children}
            </section>

            {/* How to Use - SEO Critical Section */}
            <section className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  How to {tool.shortName.toLowerCase()} a PDF
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Complete the process in 3 simple steps
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {tool.howToUse.map((step, index) => (
                  <div
                    key={step.step}
                    className="relative rounded-xl border border-gray-100 bg-gradient-to-b from-white to-gray-50/50 p-5"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-white text-sm font-bold">
                        {step.step}
                      </div>
                      <h3 className="font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                    {index < tool.howToUse.length - 1 && (
                      <ArrowRight className="hidden md:block absolute -right-3 top-1/2 h-5 w-5 -translate-y-1/2 translate-x-1/2 text-brand-300 z-10 bg-white rounded-full" />
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Banner Ad Placeholder */}
            <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 p-8 text-center">
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">Advertisement</p>
              <div className="h-24 flex items-center justify-center">
                <p className="text-sm text-gray-400">Ad space - 728x90</p>
              </div>
            </div>

            {/* Features Section */}
            <section className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Why use NimbPDF {tool.shortName}?
              </h2>
              <div className="grid gap-3 md:grid-cols-2">
                {tool.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-lg p-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600 mt-0.5">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            {tool.faq && tool.faq.length > 0 && (
              <section className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <HelpCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Frequently Asked Questions
                    </h2>
                    <p className="text-sm text-gray-500">
                      Common questions about {tool.name.toLowerCase()}
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {tool.faq.map((item) => (
                    <FAQItem
                      key={item.question}
                      question={item.question}
                      answer={item.answer}
                    />
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column: Sidebar */}
          <aside className="space-y-6">
            <div className="sticky top-24 space-y-6">
              {/* Sidebar Ad */}
              <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 p-4 text-center">
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">Advertisement</p>
                <div className="aspect-[300/250] flex items-center justify-center">
                  <p className="text-sm text-gray-400">Ad space - 300x250</p>
                </div>
              </div>

              {/* Related Tools */}
              <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">
                  Related Tools
                </h3>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">More PDF tools coming soon...</p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom Ad (Mobile) */}
        <div className="mt-10 lg:hidden">
          <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 p-8 text-center">
            <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">Advertisement</p>
            <div className="h-32 flex items-center justify-center">
              <p className="text-sm text-gray-400">Ad space - Mobile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// FAQ Accordion Item
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg border border-gray-100 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-sm font-medium text-gray-900">{question}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-gray-400 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <div className="border-t border-gray-100 p-4 bg-gray-50/50">
          <p className="text-sm text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
