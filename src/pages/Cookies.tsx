import { Cookie, Shield, Settings } from 'lucide-react';

export function Cookies() {
  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Last updated: January 2026
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center">
                <Cookie className="w-6 h-6 text-brand-600" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">What Are Cookies?</h2>
              <p className="text-gray-700 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit a website. They help 
                websites remember your preferences, understand how you use the site, and provide a better 
                user experience. Cookies are widely used to make websites work more efficiently and provide 
                valuable information to website owners.
              </p>
            </div>
          </div>
        </section>

        {/* How We Use Cookies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Cookies</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At NimbPDF, we use cookies to enhance your experience and improve our services. Here's a detailed 
            breakdown of the types of cookies we use:
          </p>

          <div className="space-y-6">
            {/* Essential Cookies */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                  <p className="text-gray-700 mb-3">
                    These cookies are necessary for the website to function properly. They enable core 
                    functionality such as security, network management, and accessibility. You may disable 
                    these by changing your browser settings, but this may affect how the website functions.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                    <li>Session management cookies</li>
                    <li>Security cookies</li>
                    <li>Load balancing cookies</li>
                  </ul>
                  <p className="text-sm text-green-600 font-medium mt-2">
                    ✓ These cookies cannot be disabled
                  </p>
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                  <p className="text-gray-700 mb-3">
                    We use analytics cookies to understand how visitors interact with our website. These cookies 
                    help us improve our services by collecting information about which pages you visit, how long 
                    you stay on the site, and any issues you encounter.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                    <li>Google Analytics cookies (_ga, _gid, _gat)</li>
                    <li>Page view tracking</li>
                    <li>User behavior analysis</li>
                    <li>Performance metrics</li>
                  </ul>
                  <p className="text-sm text-blue-600 font-medium mt-2">
                    ⚙ You can opt out of analytics cookies
                  </p>
                </div>
              </div>
            </div>

            {/* Preference Cookies */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Preference Cookies</h3>
                  <p className="text-gray-700 mb-3">
                    These cookies allow our website to remember choices you make (such as your language preference 
                    or the region you are in) and provide enhanced, more personalized features.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                    <li>Language preference cookies</li>
                    <li>Theme preference cookies</li>
                    <li>Cookie consent preferences</li>
                  </ul>
                  <p className="text-sm text-purple-600 font-medium mt-2">
                    ⚙ You can manage preference cookies
                  </p>
                </div>
              </div>
            </div>

            {/* Advertising Cookies */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-orange-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Advertising Cookies</h3>
                  <p className="text-gray-700 mb-3">
                    We use advertising cookies to display relevant ads to our users. These cookies track user 
                    behavior across websites and help us show you advertisements that are more relevant to your 
                    interests. We partner with Google AdSense for our advertising needs.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                    <li>Google AdSense cookies</li>
                    <li>Ad personalization cookies</li>
                    <li>Ad performance tracking</li>
                  </ul>
                  <p className="text-sm text-orange-600 font-medium mt-2">
                    ⚙ You can opt out of advertising cookies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Managing Cookies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Managing Your Cookies</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            You have several options to manage cookies on your device:
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-brand-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Browser Settings</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Most web browsers allow you to control cookies through their settings. You can typically find 
                these settings in the "Options" or "Preferences" menu of your browser. You can set your browser 
                to refuse cookies, or to alert you when cookies are being sent.
              </p>
            </div>

            <div className="border-l-4 border-brand-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Google Analytics Opt-Out</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                To opt out of Google Analytics cookies, you can install the{' '}
                <a 
                  href="https://tools.google.com/dlpage/gaoptout" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:text-brand-700 underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                . This prevents Google Analytics from tracking your activity on our website.
              </p>
            </div>

            <div className="border-l-4 border-brand-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Advertising Preferences</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                You can manage your advertising preferences and opt out of personalized ads by visiting{' '}
                <a 
                  href="https://www.google.com/settings/ads" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:text-brand-700 underline"
                >
                  Google Ads Settings
                </a>
                . You can also opt out of third-party vendor cookies by visiting the{' '}
                <a 
                  href="https://www.aboutads.info/choices/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:text-brand-700 underline"
                >
                  Digital Advertising Alliance's opt-out page
                </a>
                .
              </p>
            </div>

            <div className="border-l-4 border-brand-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Cookie Consent Banner</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                When you first visit our website, you'll see a cookie consent banner that allows you to accept 
                or reject non-essential cookies. You can change your preferences at any time by clicking the 
                "Cookie Settings" link in our website footer.
              </p>
            </div>
          </div>
        </section>

        {/* Important Note */}
        <section className="mb-12">
          <div className="bg-brand-50 rounded-xl p-6 border border-brand-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Important Note About Your Privacy
            </h3>
            <p className="text-gray-700 leading-relaxed">
              While we use cookies for analytics and advertising, it's important to understand that{' '}
              <strong>all PDF processing happens entirely in your browser</strong>. We never upload your PDF 
              files to our servers, and we have no access to the content of your documents. Cookies are only 
              used to track website usage and display relevant ads—they do not affect the privacy or security 
              of your PDF files in any way.
            </p>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In addition to our own cookies, we also use various third-party cookies to report usage statistics 
            of the service, display advertisements, and provide a better user experience. These include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
            <li><strong>Google AdSense:</strong> For displaying relevant advertisements</li>
            <li><strong>Google Fonts:</strong> For loading custom fonts (may set minimal cookies)</li>
            <li><strong>Cloudflare:</strong> For content delivery and security (essential cookies only)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Please note that we do not control these third-party cookies. We encourage you to review the privacy 
            policies of these third-party services for more information about their cookie practices.
          </p>
        </section>

        {/* Changes to This Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Cookie Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update our Cookie Policy from time to time to reflect changes in technology, legislation, 
            or our data practices. When we make changes, we will update the "Last updated" date at the top of 
            this page. We encourage you to review this Cookie Policy periodically to stay informed about how 
            we are protecting your information.
          </p>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have any questions about our Cookie Policy or how we use cookies, please contact us:
          </p>
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong>{' '}
              <a href="mailto:support@nimbpdf.click" className="text-brand-600 hover:text-brand-700">
                support@nimbpdf.click
              </a>
            </p>
            <p className="text-gray-700">
              <strong>Subject:</strong> Cookie Policy Inquiry
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
