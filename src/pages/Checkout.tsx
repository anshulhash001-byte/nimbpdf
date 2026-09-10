import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CreditCard, Calendar, Lock, Loader2, FileText, CheckCircle, Shield, ArrowLeft } from 'lucide-react';

export function Checkout() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setShowSuccess(true);

    // Show success message
    setTimeout(() => {
      alert('Welcome to NimbPDF Pro! All ads have been removed.');
      navigate('/');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2.5 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-600 shadow-sm group-hover:shadow-md transition-shadow">
              <FileText className="h-7 w-7 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight">
              Nimb<span className="text-brand-500">PDF</span>
            </span>
          </Link>
        </div>

        {/* Success State */}
        {showSuccess ? (
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Payment Successful!
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Welcome to NimbPDF Pro!
            </p>
            <div className="bg-brand-50 rounded-lg p-6 mb-6">
              <div className="space-y-3">
                <div className="flex items-center text-brand-700">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-medium">All ads have been removed</span>
                </div>
                <div className="flex items-center text-brand-700">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-medium">All Pro features unlocked</span>
                </div>
                <div className="flex items-center text-brand-700">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-medium">Priority support enabled</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500">Redirecting to home page...</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Upgrade to NimbPDF Pro
              </h1>
              <p className="text-gray-600 mb-4">
                Unlock all features and remove ads
              </p>
              <div className="inline-block bg-brand-50 text-brand-700 px-6 py-3 rounded-lg font-bold text-2xl">
                $5.00 <span className="text-base font-normal">/ month</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Card Number */}
              <div>
                <label
                  htmlFor="cardNumber"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Card Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <CreditCard className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="cardNumber"
                    type="text"
                    required
                    maxLength={19}
                    value={cardNumber}
                    onChange={(e) =>
                      setCardNumber(formatCardNumber(e.target.value))
                    }
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
              </div>

              {/* Expiry and CVV */}
              <div className="grid grid-cols-2 gap-4">
                {/* Expiry */}
                <div>
                  <label
                    htmlFor="expiry"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Expiry Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="expiry"
                      type="text"
                      required
                      maxLength={5}
                      value={expiry}
                      onChange={(e) =>
                        setExpiry(formatExpiry(e.target.value))
                      }
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors"
                      placeholder="MM/YY"
                    />
                  </div>
                </div>

                {/* CVV */}
                <div>
                  <label
                    htmlFor="cvv"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    CVV
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="cvv"
                      type="text"
                      required
                      maxLength={4}
                      value={cvv}
                      onChange={(e) =>
                        setCvv(e.target.value.replace(/[^0-9]/g, ''))
                      }
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-brand-600 text-white py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-5 w-5" />
                    Processing Payment...
                  </>
                ) : (
                  <>
                    <Lock className="mr-2 h-4 w-4" />
                    Pay $5.00
                  </>
                )}
              </button>
            </form>

            {/* Trust Badges */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <Shield className="h-4 w-4 text-green-600" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>30-day guarantee</span>
              </div>
            </div>

            {/* Security Notice */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                <Lock className="inline h-3 w-3 mr-1" />
                Your payment is secure and encrypted
              </p>
            </div>

            {/* Back Link */}
            <div className="mt-6 text-center">
              <Link
                to="/pricing"
                className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Pricing
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
