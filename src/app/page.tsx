import CheckSimulator from "@/components/CheckSimulator";
import WrittenGuide from "@/components/WrittenGuide";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ContactWidget from "@/components/ContactWidget";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            How to Write a Check
          </h1>
          <p className="text-lg text-gray-600 text-center mt-2 max-w-2xl mx-auto">
            Learn to write checks properly with our interactive simulator and
            comprehensive guide
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Check Simulator */}
        <section id="simulator" className="mb-16">
          <CheckSimulator />
        </section>

        {/* Blog Card Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-8 md:px-8 md:py-12">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                    <BookOpen className="w-8 h-8 text-white flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                      Complete Check Writing Guide
                    </h2>
                  </div>
                  <p className="text-purple-100 text-base lg:text-lg mb-4 leading-relaxed">
                    Master the art of check writing with our comprehensive
                    step-by-step tutorial. Learn proper techniques, avoid common
                    mistakes, and discover when to use digital alternatives.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-purple-200">
                    <span>✓ Step-by-step instructions</span>
                    <span>✓ Security tips & fraud prevention</span>
                    <span>✓ Common mistakes to avoid</span>
                    <span>✓ Digital payment alternatives</span>
                  </div>
                </div>

                <div className="flex justify-center lg:justify-end lg:flex-shrink-0">
                  <Link
                    href="/how-to-write-a-check"
                    className="inline-flex items-center gap-2 bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors shadow-lg w-full sm:w-auto justify-center"
                  >
                    Read Full Guide
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Written Guide */}
        <section className="mb-16">
          <WrittenGuide />
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <FAQ />
        </section>

        {/* Contact Widget */}
        <section className="mb-16">
          <ContactWidget />
        </section>
      </div>

      {/* <Footer /> */}
    </main>
  );
}
