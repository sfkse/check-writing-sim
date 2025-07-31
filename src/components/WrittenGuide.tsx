import { CheckCircle, AlertCircle, BookOpen } from "lucide-react";

export default function WrittenGuide() {
  const steps = [
    {
      number: 1,
      title: "Write the Date",
      description:
        "In the top right corner, write today's date. Use the format MM/DD/YYYY or spell out the month.",
      tip: "Always use the current date unless you're post-dating the check.",
    },
    {
      number: 2,
      title: "Write the Recipient's Name",
      description:
        "On the 'Pay to the Order of' line, write the full name of the person or business you're paying.",
      tip: "Write clearly and spell the name correctly. If unsure, ask for the correct spelling.",
    },
    {
      number: 3,
      title: "Write the Amount in Numbers",
      description:
        "In the small box with the '$' symbol, write the exact amount in numbers with cents included.",
      tip: "Start writing close to the '$' symbol to prevent tampering. Use decimals for cents (e.g., 125.50).",
    },
    {
      number: 4,
      title: "Write the Amount in Words",
      description:
        "On the long line below the recipient's name, spell out the dollar amount. Write 'and XX/100' for cents.",
      tip: "If there's leftover space, draw a line to prevent additions. Example: 'One hundred twenty-five and 50/100'",
    },
    {
      number: 5,
      title: "Write a Memo (Optional)",
      description:
        "In the memo line, note what the payment is for. This helps with record-keeping.",
      tip: "Common memos include 'Rent', 'Utilities', 'Payment for services', or an invoice number.",
    },
    {
      number: 6,
      title: "Sign the Check",
      description:
        "Sign your name in the bottom right corner exactly as it appears on your bank account.",
      tip: "Never sign a blank check. Your signature authorizes the bank to pay the amount specified.",
    },
  ];

  const tips = [
    "Always use a pen, preferably black or blue ink",
    "Write clearly and legibly",
    "Don't leave blank spaces that could be filled in later",
    "Keep a record of all checks written in your check register",
    "Never sign a blank check",
    "Void checks by writing 'VOID' in large letters across the front",
    "Store unused checks in a secure location",
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-8">
        <BookOpen className="w-8 h-8 text-blue-600" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Complete Guide to Writing a Check
        </h2>
      </div>

      {/* Step-by-step instructions */}
      <div className="space-y-8 mb-12">
        {steps.map((step) => (
          <div key={step.number} className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                {step.number}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700 mb-3">{step.description}</p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-blue-800 text-sm">
                    <strong>Tip:</strong> {step.tip}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Tips */}
      <div className="bg-green-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-green-600" />
          Important Tips for Check Writing
        </h3>
        <ul className="grid md:grid-cols-2 gap-3">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Security Section */}
      <div className="mt-8 bg-red-50 border-l-4 border-red-400 p-6 rounded">
        <h3 className="text-lg font-semibold text-red-800 mb-3">
          Security Reminders
        </h3>
        <ul className="space-y-2 text-red-700">
          <li>
            • Never give your account information to someone you don't trust
          </li>
          <li>• Report lost or stolen checks to your bank immediately</li>
          <li>
            • Monitor your account regularly for unauthorized transactions
          </li>
          <li>
            • Consider using online banking or electronic payments for better
            security
          </li>
        </ul>
      </div>
    </div>
  );
}
