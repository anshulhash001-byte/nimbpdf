import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Menu, X, ChevronDown, Merge, Split, Image, Minimize2 } from 'lucide-react';
import { Button } from '../ui/button';
import { tools } from '../../config/tools';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsToolsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getToolIcon = (slug: string) => {
    switch (slug) {
      case 'merge-pdf': return Merge;
      case 'split-pdf': return Split;
      case 'pdf-to-jpg': return Image;
      case 'compress-pdf': return Minimize2;
      default: return FileText;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/60 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-600 shadow-sm group-hover:shadow-md transition-shadow">
            <FileText className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Nimb<span className="text-brand-500">PDF</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {/* Tools Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsToolsDropdownOpen(!isToolsDropdownOpen)}
              className={`flex items-center space-x-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                isToolsDropdownOpen 
                  ? 'bg-brand-50 text-brand-600' 
                  : 'text-gray-700 hover:bg-gray-100 hover:text-brand-600'
              }`}
            >
              <span>Tools</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isToolsDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isToolsDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 rounded-xl border border-gray-200 bg-white shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="p-2 space-y-1">
                  {tools.slice(0, 4).map((tool) => {
                    const Icon = getToolIcon(tool.slug);
                    return (
                      <Link
                        key={tool.slug}
                        to={`/tools/${tool.slug}`}
                        className="flex items-start space-x-3 rounded-lg p-3 hover:bg-gray-50 transition-colors group"
                        onClick={() => setIsToolsDropdownOpen(false)}
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 group-hover:bg-brand-100 transition-colors">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 group-hover:text-brand-600 transition-colors">
                            {tool.name}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                            {tool.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="border-t border-gray-100 p-2">
                  <Link
                    to="/#tools"
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-brand-600 hover:bg-brand-50 transition-colors"
                    onClick={() => setIsToolsDropdownOpen(false)}
                  >
                    <span>View all tools</span>
                    <span className="text-xs">→</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link 
            to="/pricing" 
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-brand-600 transition-colors"
          >
            Pricing
          </Link>
          <Link 
            to="/dashboard" 
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-brand-600 transition-colors"
          >
            Dashboard
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Link to="/login">
            <Button variant="ghost" size="sm">
              Sign in
            </Button>
          </Link>
          <Link to="/pricing">
            <Button variant="premium" size="sm" className="gap-1.5">
              <span>✨</span>
              Go Pro
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white animate-in slide-in-from-top-2 duration-200">
          <div className="container py-4 space-y-1">
            <Link
              to="/"
              className="block rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className="py-2">
              <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Tools
              </p>
              {tools.map((tool) => (
                <Link
                  key={tool.slug}
                  to={`/tools/${tool.slug}`}
                  className="block rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {tool.name}
                </Link>
              ))}
            </div>
            <div className="border-t border-gray-100 pt-2">
              <Link
                to="/pricing"
                className="block rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/dashboard"
                className="block rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            </div>
            <div className="border-t border-gray-100 pt-4 space-y-2">
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  Sign in
                </Button>
              </Link>
              <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="premium" className="w-full gap-1.5">
                  <span>✨</span>
                  Go Pro
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
