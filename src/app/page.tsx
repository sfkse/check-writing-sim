import CheckSimulator from '@/components/CheckSimulator'
import WrittenGuide from '@/components/WrittenGuide'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

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
            Learn to write checks properly with our interactive simulator and comprehensive guide
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Check Simulator */}
        <section className="mb-16">
          <CheckSimulator />
        </section>

        {/* Written Guide */}
        <section className="mb-16">
          <WrittenGuide />
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <FAQ />
        </section>
      </div>

      <Footer />
    </main>
  )
}
