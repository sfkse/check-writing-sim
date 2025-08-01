import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - Check Writing Assistant",
  description:
    "Learn about how Check Writing Assistant protects your privacy and handles data.",
  keywords: "privacy policy, data protection, privacy, check writing assistant",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          {/* Header */}
          <header className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Privacy Policy
              </h1>
            </div>

            <p className="text-gray-600 text-lg">Last updated: July 2025</p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Your Privacy Matters
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Check Writing Assistant is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, and safeguard
                your information when you use our educational platform.
              </p>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                <p className="text-green-800">
                  <strong>Key Point:</strong> All your data stays in your
                  browser. We don't store or share any personal information you
                  enter in our simulator.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Information We Don't Collect
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our check writing simulator operates entirely in your browser.
                We do not:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Store any personal information you enter (names, addresses,
                  amounts)
                </li>
                <li>Save your check data on our servers</li>
                <li>Track your specific simulator usage</li>
                <li>Collect financial information</li>
                <li>Require user accounts or registration</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Anonymous Usage Data
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect anonymous, non-personal data to improve our
                service:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>General website traffic and page views</li>
                <li>Browser type and device information</li>
                <li>Approximate geographic location (country/region)</li>
                <li>How users navigate through our site</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                This data cannot be used to identify individual users and helps
                us understand how to improve our educational content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you contact us via email, we collect:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Your email address</li>
                <li>Your name (if provided)</li>
                <li>The content of your message</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                This information is used solely to respond to your inquiry and
                is not shared with third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Cookies and Local Storage
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website may use:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Essential cookies:</strong> Required for basic website
                  functionality
                </li>
                <li>
                  <strong>Analytics cookies:</strong> Help us understand website
                  usage (anonymous)
                </li>
                <li>
                  <strong>Local storage:</strong> May temporarily store
                  simulator data in your browser
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                You can control cookies through your browser settings. Disabling
                cookies may affect some website functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Third-Party Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may use third-party services for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Website analytics (Google Analytics)</li>
                <li>Content delivery</li>
                <li>Website hosting</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                These services have their own privacy policies and may collect
                anonymous usage data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Children's Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our service is designed for general educational use. We do not
                knowingly collect personal information from children under 13.
                If you believe a child has provided personal information, please
                contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Changes to This Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated revision date. We
                encourage you to review this policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:contact@checkwritingsim.com"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    contact@checkwritingsim.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
