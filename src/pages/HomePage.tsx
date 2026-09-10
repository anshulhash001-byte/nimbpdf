import { Link } from 'react-router-dom';
import { FileUploadZone } from '../components/tools/FileUploadZone';
import { tools } from '../config/tools';
import { Zap, Shield, Clock, ArrowRight, Sparkles, Check } from 'lucide-react';
import { Button } from '../components/ui/button';

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/50 via-white to-white" />
        
        {/* Decorative background elements */}
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-brand-200/20 blur-3xl" />
        <div className="absolute top-40 right-10 h-96 w-96 rounded-full bg-brand-300/20 blur-3xl" />
        
        <div className="relative container px-4 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm">
              <Sparkles className="h-4 w-4" />
              <span>Trusted by 2M+ users worldwide</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              The Nimble Way to
              <span className="block mt-2 bg-gradient-to-r from-brand-500 via-brand-600 to-brand-700 bg-clip-text text-transparent">
                Edit PDFs
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Merge, compress, convert, and edit your PDFs with ease. 
              Fast, secure, and free. No sign-up required.
            </p>
            
            {/* Upload Zone */}
            <div className="max-w-2xl mx-auto">
              <FileUploadZone />
            </div>

            {/* Quick stats */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" strokeWidth={3} />
                <span>No sign-up required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" strokeWidth={3} />
                <span>Files processed securely</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" strokeWidth={3} />
                <span>Max 100MB per file</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="border-t border-gray-100 bg-gray-50/50">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm border border-gray-100">
                <Zap className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-sm text-gray-600">Process documents in seconds, not minutes</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm border border-gray-100">
                <Shield className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Private</h3>
              <p className="text-sm text-gray-600">Files are encrypted and auto-deleted after processing</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm border border-gray-100">
                <Clock className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Always Available</h3>
              <p className="text-sm text-gray-600">No downloads required. Works on any device</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 mb-4">
            <span>All-in-one PDF toolkit</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Every PDF tool you'll ever need
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From merging and splitting to converting and securing — handle any 
            PDF task with our comprehensive suite of tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.slug}
                to={`/tools/${tool.slug}`}
                className="group relative flex flex-col rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-200 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-100/50 hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-100 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-600 transition-colors mb-2">
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  {tool.description}
                </p>

                <div className="mt-4 flex items-center text-sm font-medium text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Try now</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 md:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-700 px-6 py-16 md:px-16">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
          <div className="relative text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to transform your PDF workflow?
            </h2>
            <p className="text-brand-100 max-w-lg mx-auto mb-8">
              Join millions of users who trust NimbPDF for their document needs.
              Start for free, upgrade when you need more.
            </p>
            <Button 
              size="lg" 
              className="gap-2 bg-white text-brand-600 hover:bg-brand-50 shadow-lg"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Get started free
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
