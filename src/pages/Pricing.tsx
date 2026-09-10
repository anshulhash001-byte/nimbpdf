import { Check, X } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for occasional use',
      features: [
        { text: 'Merge PDFs', included: true },
        { text: 'Split PDFs', included: true },
        { text: 'PDF to JPG conversion', included: true },
        { text: 'Up to 100MB file size', included: true },
        { text: 'Client-side processing', included: true },
        { text: 'No sign-up required', included: true },
        { text: 'Contains ads', included: true },
        { text: 'Compress PDFs', included: false },
        { text: 'PDF to Word conversion', included: false },
        { text: 'Edit PDFs', included: false },
        { text: 'Priority support', included: false },
      ],
      cta: 'Start Free',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$5',
      period: '/month',
      description: 'For professionals and power users',
      features: [
        { text: 'Everything in Free', included: true },
        { text: 'No ads', included: true },
        { text: 'Compress PDFs', included: true },
        { text: 'PDF to Word conversion', included: true },
        { text: 'Edit PDFs', included: true },
        { text: 'JPG to PDF conversion', included: true },
        { text: 'Up to 500MB file size', included: true },
        { text: 'Batch processing', included: true },
        { text: 'Priority support', included: true },
        { text: 'Early access to new features', included: true },
        { text: 'Cancel anytime', included: true },
      ],
      cta: 'Upgrade to Pro',
      highlighted: true,
    },
  ];

  return (
    <div className="container py-16">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Choose the plan that works best for you. Start free, upgrade when you need more.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-brand-600 text-white ring-2 ring-brand-600 ring-offset-2'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-brand-600 px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? 'text-brand-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </span>
                <span className={`text-lg ${plan.highlighted ? 'text-brand-100' : 'text-gray-600'}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'text-white' : 'text-brand-600'
                      }`} />
                    ) : (
                      <X className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-400" />
                    )}
                    <span className={`text-sm ${
                      feature.included
                        ? plan.highlighted ? 'text-white' : 'text-gray-700'
                        : 'text-gray-400'
                    }`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-brand-600 hover:bg-brand-50'
                    : 'bg-brand-600 text-white hover:bg-brand-700'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Pricing FAQ
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Can I use NimbPDF for free forever?</h3>
              <p className="text-gray-600">
                Yes! Our Free plan includes all the core PDF tools you need. You can use them as much as you 
                want, with no time limits or hidden fees.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, debit cards, and PayPal. All payments are processed securely 
                through our payment provider.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Can I cancel my Pro subscription anytime?</h3>
              <p className="text-gray-600">
                Absolutely. You can cancel your Pro subscription at any time from your account settings. You'll 
                continue to have access to Pro features until the end of your billing period.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Is there a refund policy?</h3>
              <p className="text-gray-600">
                Yes, we offer a 30-day money-back guarantee. If you're not satisfied with Pro, contact us 
                within 30 days of your purchase for a full refund.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer discounts for students or nonprofits?</h3>
              <p className="text-gray-600">
                Yes! We offer special pricing for students, educators, and nonprofit organizations. Contact us 
                at support@nimbpdf.click to learn more.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-brand-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our team is here to help. Reach out to us and we'll get back to you within 24 hours.
          </p>
          <a
            href="/contact"
            className="inline-block bg-brand-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
