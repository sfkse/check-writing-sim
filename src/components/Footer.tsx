import { CreditCard, Shield, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Features */}
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Interactive Learning</h3>
            <p className="text-gray-300 text-sm">
              Practice writing checks with our real-time simulator and instant
              feedback.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Secure & Private</h3>
            <p className="text-gray-300 text-sm">
              All data stays in your browser. We don't store or share your
              information.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Always Available</h3>
            <p className="text-gray-300 text-sm">
              Access our check writing guide and simulator anytime, anywhere.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">How to Write a Check</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Learn the proper way to write checks with our comprehensive guide,
              interactive simulator, and helpful tips. Master this essential
              financial skill today.
            </p>

            <div className="bg-gray-800 rounded-lg p-4 text-sm text-gray-400 max-w-4xl mx-auto">
              <p className="mb-2">
                <strong>Disclaimer:</strong> This tool is for educational
                purposes only. Always verify check writing procedures with your
                bank. We are not responsible for any financial losses or issues
                resulting from the use of this information.
              </p>
              <p>
                Check policies and procedures may vary by bank and region. For
                official guidance, consult your financial institution.
              </p>
            </div>

            <div className="mt-6 text-gray-400 text-sm">
              <p>
                &copy; 2024 Check Writing Assistant. Built for educational
                purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
