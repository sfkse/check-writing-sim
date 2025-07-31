"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What if I make a mistake while writing a check?",
      answer:
        "If you make a small mistake, you can try to neatly cross it out and initial the correction. However, for significant errors, it's better to void the check by writing 'VOID' in large letters across it and start with a new check. Banks may reject checks with too many corrections.",
    },
    {
      question: "How long is a check valid?",
      answer:
        "Most personal checks are valid for 6 months (180 days) from the date written. After this period, banks may refuse to cash them, though some banks have longer policies. Business and certified checks may have different validity periods.",
    },
    {
      question: "Can I write a check for more money than I have in my account?",
      answer:
        "No, you should never write a check for more than your account balance. This results in a 'bounced' or 'NSF' (Non-Sufficient Funds) check, which typically incurs fees from your bank and the recipient's bank, and can damage your credit rating.",
    },
    {
      question:
        "What's the difference between writing out 'and' vs. '&' for cents?",
      answer:
        "When writing the amount in words, use 'and' to separate dollars from cents (e.g., 'One hundred and 50/100 dollars'). The '&' symbol should be avoided in formal check writing as it can be unclear or misinterpreted.",
    },
    {
      question: "Do I need to write anything in the memo line?",
      answer:
        "The memo line is optional but recommended for record-keeping. It helps you and the recipient track what the payment was for. Common entries include bill types, invoice numbers, or services provided.",
    },
    {
      question: "What should I do if I lose a check I wrote?",
      answer:
        "Contact your bank immediately to place a stop payment on the check. There's usually a fee for this service (typically $25-35). You'll need to provide the check number, amount, date, and recipient's name.",
    },
    {
      question: "Can I post-date a check?",
      answer:
        "Yes, you can write a future date on a check (post-dating), but banks are not legally required to honor the date. They may process the check immediately if presented. It's better to hold the check until the intended date or use electronic payment scheduling.",
    },
    {
      question: "What if the written amount and numerical amount don't match?",
      answer:
        "If there's a discrepancy, banks typically honor the written (spelled-out) amount since it's considered more difficult to alter. However, large discrepancies may cause the bank to reject the check entirely.",
    },
    {
      question: "Is it safe to write checks?",
      answer:
        "Checks can be safe when used properly, but they do carry some risks like theft or fraud. For better security, consider electronic payments, online banking, or debit/credit cards. If you must use checks, store them securely and monitor your account regularly.",
    },
    {
      question: "What information should never be written on a check?",
      answer:
        "Never write your Social Security number, driver's license number, or credit card numbers on a check. Also avoid writing 'paid in full' unless you intend to settle a disputed amount, as this phrase has legal implications.",
    },
    {
      question: "Can I use pencil to write a check?",
      answer:
        "No, always use a pen with permanent ink (blue or black). Pencil can be easily erased and altered, making your check vulnerable to fraud. Some banks may refuse to process checks written in pencil.",
    },
    {
      question: "What happens if I forget to sign a check?",
      answer:
        "An unsigned check is invalid and cannot be processed by the bank. The recipient would need to return it to you for signature, or you would need to void it and write a new check. Always double-check that you've signed before giving a check to someone.",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-8">
        <HelpCircle className="w-8 h-8 text-purple-600" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
            >
              <h3 className="font-semibold text-gray-900 pr-4">
                {faq.question}
              </h3>
              {openItems.includes(index) ? (
                <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
              )}
            </button>
            {openItems.includes(index) && (
              <div className="px-6 py-4 bg-white border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">
          Still Have Questions?
        </h3>
        <p className="text-blue-800">
          If you have additional questions about check writing that aren't
          covered here, contact your bank directly. They can provide specific
          guidance based on their policies and your account type.
        </p>
      </div>
    </div>
  );
}
