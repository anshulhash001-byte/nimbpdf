import { Shield, Lock, Eye, UserCheck } from 'lucide-react';

const CONTACT_EMAIL = 'support@nimbpdf.click';

export function GdprPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">GDPR Compliance</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">Last updated: January 2026</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment to GDPR</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            NimbPDF is committed to protecting the privacy and security of personal data for all users, particularly those in the European Economic Area (EEA). This page outlines how we comply with the General Data Protection Regulation (GDPR).
          </p>
        </section>

        <section className="mb-8">
          <div className="flex items-start gap-4 p-6 bg-green-50 rounded-lg border border-green-200">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Client-Side Processing</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>All PDF processing happens directly in your browser.</strong> Your files are never uploaded to our servers. This means we have no access to the content of your documents, and no personal data is collected through file processing.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data We Collect</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We collect minimal data to operate our service:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>No File Data:</strong> Your PDF files never leave your device</li>
            <li><strong>No Personal Data:</strong> We don't collect names, emails, or addresses unless you contact us</li>
            <li><strong>Anonymous Analytics:</strong> We use anonymized analytics to improve our service</li>
            <li><strong>Technical Data:</strong> Browser type, device info, and IP address for security</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights Under GDPR</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            As an EEA resident, you have the following rights:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <Eye className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900">Right to Access</h3>
                <p className="text-sm text-gray-600">Request a copy of your personal data</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <UserCheck className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900">Right to Rectification</h3>
                <p className="text-sm text-gray-600">Correct inaccurate personal data</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <Lock className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900">Right to Erasure</h3>
                <p className="text-sm text-gray-600">Request deletion of your data</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <Shield className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900">Right to Object</h3>
                <p className="text-sm text-gray-600">Object to processing of your data</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Legal Basis for Processing</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We process data under the following legal bases:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Consent:</strong> For analytics cookies and marketing</li>
            <li><strong>Legitimate Interest:</strong> For service improvement and security</li>
            <li><strong>Contract:</strong> To provide our services to you</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Since we don't store your files or personal data, there's nothing to retain. Analytics data is anonymized and retained for a maximum of 26 months. Contact form submissions are retained for 12 months to respond to inquiries.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Transfers</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Since all processing happens in your browser, no data is transferred internationally. Any analytics data is processed by Google Analytics, which complies with the EU-US Data Privacy Framework.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Our DPO</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For any GDPR-related inquiries or to exercise your rights, contact us at:
          </p>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-700">
              <strong>Email:</strong>{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-600 hover:text-brand-700">
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Subject:</strong> GDPR Inquiry
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Supervisory Authority</h2>
          <p className="text-gray-700 leading-relaxed">
            If you believe we have not adequately addressed your concerns, you have the right to lodge a complaint with your local data protection supervisory authority.
          </p>
        </section>
      </div>
    </div>
  );
}
