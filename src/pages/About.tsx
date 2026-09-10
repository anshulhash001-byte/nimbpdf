import { Shield, Zap, Users, Globe } from 'lucide-react';

export function About() {
  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About NimbPDF
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're on a mission to make PDF editing accessible, secure, and free for everyone.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              NimbPDF was born from a simple frustration: most PDF tools either require expensive subscriptions, 
              upload your files to unknown servers, or are packed with intrusive ads. We believed there had to be 
              a better way.
            </p>
            <p>
              Our mission is to provide powerful PDF editing tools that run entirely in your browser. This means 
              your files never leave your device—ever. We process everything locally using cutting-edge web 
              technologies, ensuring your sensitive documents stay private and secure.
            </p>
            <p>
              We're committed to making professional PDF tools accessible to students, professionals, and anyone 
              who needs to work with PDFs, without breaking the bank or compromising on privacy.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-brand-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Privacy First</h3>
                <p className="text-gray-600">
                  Your files are processed entirely in your browser. We never upload, store, or have access to 
                  your documents. What happens on your device, stays on your device.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-brand-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
                <p className="text-gray-600">
                  By processing files locally, we eliminate upload/download times. Your PDFs are processed 
                  instantly, right in your browser, with no server delays.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-brand-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">User-Focused</h3>
                <p className="text-gray-600">
                  We build tools that are simple, intuitive, and accessible. No complicated interfaces, no 
                  hidden fees, no surprises. Just powerful PDF tools that work.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-brand-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Open & Transparent</h3>
                <p className="text-gray-600">
                  We believe in transparency. Our privacy policy is clear, our pricing is straightforward, 
                  and we're always open to feedback from our community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Technology</h2>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              NimbPDF leverages the latest web technologies to bring desktop-grade PDF processing to your browser:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>pdf-lib:</strong> A powerful JavaScript library that allows us to create, modify, and 
                merge PDF files entirely client-side.
              </li>
              <li>
                <strong>pdf.js:</strong> Mozilla's PDF rendering engine that enables high-quality PDF to image 
                conversion without any server processing.
              </li>
              <li>
                <strong>Modern Web APIs:</strong> We use the latest browser APIs for file handling, canvas 
                rendering, and download management.
              </li>
            </ul>
            <p>
              All of this runs directly in your browser, which means faster processing, better privacy, and 
              no server costs for basic operations.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Team</h2>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              We're a small, dedicated team of developers and designers who believe that essential tools should 
              be accessible to everyone. We work remotely from around the world, united by our passion for 
              building great software.
            </p>
            <p>
              Our team has extensive experience in web development, PDF processing, and user experience design. 
              We're committed to continuously improving NimbPDF based on user feedback and the latest 
              technological advances.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-brand-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to try NimbPDF?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of users who trust NimbPDF for their PDF editing needs. 
            No sign-up required, no files uploaded to servers.
          </p>
          <a
            href="/"
            className="inline-block bg-brand-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors"
          >
            Start Editing PDFs
          </a>
        </section>
      </div>
    </div>
  );
}
