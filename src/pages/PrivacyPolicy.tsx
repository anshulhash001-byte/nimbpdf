export function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">Last updated: January 2026</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            NimbPDF ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our PDF editing tools.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Local Processing - Your Files Stay Private</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong className="text-brand-600">Important:</strong> All PDF processing happens directly in your browser. Your files are never uploaded to our servers. This means:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Your PDF files remain on your device at all times</li>
            <li>No file data is transmitted over the internet</li>
            <li>We cannot access, view, or store your documents</li>
            <li>Processing is instant and completely private</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed mb-4">We collect minimal information to improve our service:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Usage Analytics:</strong> We use cookies to track page views, tool usage patterns, and general user behavior</li>
            <li><strong>Technical Data:</strong> Browser type, device information, and IP address for analytics purposes</li>
            <li><strong>No Personal Data:</strong> We do not collect names, email addresses, or any personal information unless you voluntarily provide it</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
          <p className="text-gray-700 leading-relaxed mb-4">We use cookies for:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Analytics:</strong> Google Analytics to understand how users interact with our tools</li>
            <li><strong>Advertising:</strong> Third-party ad networks (such as Google AdSense) may use cookies to serve relevant ads</li>
            <li><strong>Preferences:</strong> To remember your settings and preferences</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">GDPR Compliance (European Users)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you are in the European Economic Area (EEA), you have certain data protection rights including the right to access, rectification, erasure, restriction of processing, data portability, and objection.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">CCPA Compliance (California Residents)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            California residents have the right to request disclosure of what personal information we collect, request deletion, and opt-out of the sale of personal information (we do not sell personal data).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have questions about this Privacy Policy, please contact us at:{' '}
            <a href="mailto:support@nimbpdf.click" className="text-brand-600 hover:text-brand-700">
              support@nimbpdf.click
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
