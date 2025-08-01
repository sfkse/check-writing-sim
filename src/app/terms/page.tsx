import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service - Check Writing Assistant",
  description:
    "Read our Terms of Service for using the Check Writing Assistant educational platform.",
  keywords: "terms of service, terms, conditions, check writing assistant",
};

export default function TermsPage() {
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
              <FileText className="w-8 h-8 text-blue-600" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Terms of Service
              </h1>
            </div>

            <p className="text-gray-600 text-lg">Last updated: July 2025</p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Welcome to Check Writing Assistant
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By using Check Writing Assistant, you agree to these Terms of
                Service. Please read them carefully before using our educational
                platform.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <p className="text-blue-800">
                  <strong>Educational Purpose:</strong> This platform is
                  designed for educational purposes only and should not replace
                  professional financial advice.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Educational Use Only
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Check Writing Assistant is an educational tool designed to teach
                proper check writing techniques. By using our service, you
                acknowledge that:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>This tool is for learning purposes only</li>
                <li>
                  You should always consult your bank for official guidance
                </li>
                <li>Check policies may vary by financial institution</li>
                <li>
                  We provide general information, not personalized financial
                  advice
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Acceptable Use
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When using our platform, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Use the service for educational purposes only</li>
                <li>Not attempt to circumvent security measures</li>
                <li>Not use the service for any illegal activities</li>
                <li>Respect our intellectual property rights</li>
                <li>Not interfere with the operation of our service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Disclaimer of Warranties
              </h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-4">
                <p className="text-yellow-800">
                  <strong>Important:</strong> Check Writing Assistant is
                  provided "as is" without warranties of any kind.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We make no warranties, expressed or implied, regarding:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>The accuracy or completeness of information</li>
                <li>The availability or reliability of the service</li>
                <li>The fitness for any particular purpose</li>
                <li>The absence of errors or interruptions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Check Writing Assistant and its operators shall not be liable
                for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Any financial losses resulting from the use of our information
                </li>
                <li>
                  Errors in check writing that occur despite using our guidance
                </li>
                <li>Problems with checks that are not accepted by banks</li>
                <li>Any indirect, incidental, or consequential damages</li>
                <li>Loss of data or interruption of service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content on Check Writing Assistant, including but not
                limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Text, graphics, and design elements</li>
                <li>Software code and functionality</li>
                <li>Educational materials and guides</li>
                <li>The Check Writing Assistant name and branding</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                All content is protected by copyright and other intellectual
                property laws. You may not reproduce, distribute, or create
                derivative works without permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                User-Generated Content
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you contact us or provide feedback:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>You retain ownership of your content</li>
                <li>
                  You grant us permission to use feedback to improve our service
                </li>
                <li>
                  You are responsible for the accuracy of information you
                  provide
                </li>
                <li>You agree not to submit harmful or illegal content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Your privacy is important to us. Please review our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Privacy Policy
                </Link>{" "}
                to understand how we collect, use, and protect your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update these Terms of Service from time to time. Any
                changes will be posted on this page with an updated revision
                date. Continued use of our service constitutes acceptance of the
                updated terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service are governed by and construed in
                accordance with applicable laws. Any disputes will be resolved
                through appropriate legal channels.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about these Terms of Service, please
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
