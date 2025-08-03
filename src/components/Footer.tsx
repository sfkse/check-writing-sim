import {
  CreditCard,
  Shield,
  Clock,
  Home,
  BookOpen,
  HelpCircle,
  Mail,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const navigationLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Check Simulator", href: "/#simulator", icon: CreditCard },
    { name: "Complete Guide", href: "/how-to-write-a-check", icon: BookOpen },
    { name: "FAQ", href: "/#faq", icon: HelpCircle },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">Check Writing Simulator</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Learn to write checks properly with our interactive simulator and
              comprehensive educational guides. Master this essential financial
              skill today.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:contact@checkwritingsim.com"
                className="hover:text-blue-400 transition-colors"
              >
                contact@checkwritingsim.com
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      <Icon className="w-4 h-4" />
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-300 text-sm">
                <CreditCard className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Interactive Check Simulator</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300 text-sm">
                <Shield className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Secure & Private</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300 text-sm">
                <BookOpen className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <span>Comprehensive Guides</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300 text-sm">
                <Clock className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <span>Always Available</span>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal & Support</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:contact@checkwritingsim.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  <Mail className="w-3 h-3" />
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Disclaimer */}
          <div className="bg-gray-800 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-400 text-center">
              <strong className="text-gray-300">Educational Disclaimer:</strong>{" "}
              This tool is for educational purposes only. Always verify check
              writing procedures with your bank. We are not responsible for any
              financial losses or issues resulting from the use of this
              information. Check policies may vary by bank and region.
            </p>
          </div>

          {/* Copyright and Final Links */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              &copy; 2025 Check Writing Simulator. All rights reserved.
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link
                href="/privacy-policy"
                className="hover:text-blue-400 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-blue-400 transition-colors"
              >
                Terms
              </Link>
              <span>Built for education</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
