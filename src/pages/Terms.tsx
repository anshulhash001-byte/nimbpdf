export function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">Last updated: January 2026</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            By accessing and using NimbPDF ("the Service"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description of Service</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            NimbPDF provides browser-based PDF editing tools including merging, splitting, and converting PDF files. All processing occurs locally in your browser using client-side JavaScript.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptable Use</h2>
          <p className="text-gray-700 leading-relaxed mb-4">You agree to use NimbPDF only for lawful purposes. You must not:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Use the service to process illegal, harmful, or infringing content</li>
            <li>Attempt to reverse engineer, modify, or create derivative works of our service</li>
            <li>Use automated systems or bots to access the service</li>
            <li>Interfere with or disrupt the service or servers</li>
            <li>Violate any intellectual property rights</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Responsibilities</h2>
          <p className="text-gray-700 leading-relaxed mb-4">You are solely responsible for:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Content:</strong> All files you process using our service. You must have the right to use and modify these files.</li>
            <li><strong>Backups:</strong> Maintaining backups of your original files before processing</li>
            <li><strong>Accuracy:</strong> Verifying the accuracy of processed files before use</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Warranty</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">We do not guarantee that:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>The service will be uninterrupted, secure, or error-free</li>
            <li>Processed files will be accurate or complete</li>
            <li>Any errors or defects will be corrected</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, NimbPDF SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR FILE CORRUPTION.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our total liability shall not exceed the amount you paid us in the twelve months preceding the claim, or $100, whichever is greater.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about these Terms of Service, please contact us at: legal@nimbpdf.com
          </p>
        </section>
      </div>
    </div>
  );
}
