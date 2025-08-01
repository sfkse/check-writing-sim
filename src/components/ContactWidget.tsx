import { Mail } from "lucide-react";

export default function ContactWidget() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center max-w-2xl mx-auto">
      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
        Questions About Check Writing?
      </h3>

      <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
        Need additional help with check formatting or have specific questions
        about banking standards?
      </p>

      <a
        href="mailto:contact@checkwritingsim.com"
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors shadow-md"
      >
        <Mail className="w-5 h-5" />
        contact@checkwritingsim.com
      </a>
    </div>
  );
}
