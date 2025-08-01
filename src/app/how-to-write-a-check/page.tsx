import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import ContactWidget from "@/components/ContactWidget";

export const metadata: Metadata = {
  title:
    "How to Write a Check: A Step-by-Step Guide for Beginners | Complete Tutorial",
  description:
    "Master check writing with our comprehensive step-by-step guide. Learn proper techniques, avoid common mistakes, and discover digital alternatives to traditional checks.",
  keywords:
    "how to write a check, check writing guide, check tutorial, banking skills, financial literacy, check writing steps",
};

export default function HowToWriteACheckPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          {/* Header */}
          <header className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Simulator
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How to Write a Check: A Step-by-Step Guide for Beginners
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Updated July 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Financial Education Team</span>
              </div>
            </div>
          </header>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Writing a check remains a fundamental financial skill that every
              adult should master, despite the rise of digital payment methods.{" "}
              <strong>
                The process involves filling out six key fields on the check:
                the date, payee name, numerical amount, written amount,
                signature, and memo line.
              </strong>{" "}
              Each field serves a specific purpose in creating a valid payment
              instrument that banks can process.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Many people feel uncertain about proper check-writing procedures,
              especially when it comes to writing out dollar amounts in words or
              ensuring the check cannot be altered. Understanding the correct
              techniques prevents common errors that could delay payment
              processing or create security vulnerabilities. The process becomes
              straightforward once someone learns the essential steps and best
              practices.
            </p>

            <p className="text-gray-700 leading-relaxed">
              This comprehensive guide covers everything from understanding
              check components to implementing safety measures that protect
              against fraud. Readers will discover how to complete each section
              accurately, avoid typical mistakes, and explore modern
              alternatives that might better suit their payment needs.
            </p>
          </div>

          {/* Essential Steps Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Essential Steps to Write a Check
            </h2>

            <p className="text-gray-700 mb-8">
              Writing a check requires filling in four critical fields in the
              correct order and format. Each step builds upon the previous one
              to create a valid payment instrument that banks can process.
            </p>

            {/* Step 1: Date */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Filling in the Date
              </h3>

              <p className="text-gray-700 mb-4">
                The date appears in the top right corner of every check. Write
                the current date using the month/day/year format, such as
                "07/31/2025" or spell it out as "July 31, 2025."
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <p className="text-red-800">
                  <strong>Never postdate or backdate checks</strong> unless
                  absolutely necessary. Postdating means writing a future date,
                  which can cause confusion and potential legal issues.
                </p>
              </div>

              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Banks typically honor checks within six months of the written
                  date. After this period, the check becomes stale-dated and
                  banks may refuse to cash it.
                </li>
                <li>
                  Use the same date format consistently across all checks. This
                  prevents confusion and helps maintain accurate financial
                  records.
                </li>
              </ul>
            </div>

            {/* Step 2: Recipient */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Writing the Recipient's Name
              </h3>

              <p className="text-gray-700 mb-4">
                The "Pay to the Order of" line requires the exact legal name of
                the person or business receiving payment. Write clearly in pen
                to prevent alterations.
              </p>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>
                  For individuals, use their full legal name as it appears on
                  their identification.
                </li>
                <li>
                  For businesses, write the complete registered business name.
                </li>
                <li>
                  If paying yourself, write your own name exactly as it appears
                  on your bank account.
                </li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-yellow-800">
                  <strong>Double-check spelling</strong> before moving to the
                  next step. Incorrect names can cause banks to reject the check
                  or delay processing.
                </p>
              </div>
            </div>

            {/* Step 3: Numerical Amount */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Entering the Amount in Numbers
              </h3>

              <p className="text-gray-700 mb-4">
                The small box on the right side of the check displays the
                payment amount in numerical format. Write the dollar amount as
                close to the left edge of the box as possible.
              </p>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>
                  Include cents even for whole dollar amounts. Write "$50.00"
                  instead of "$50" to prevent alterations.
                </li>
                <li>
                  <strong>Use decimal points correctly.</strong> Write
                  twenty-five dollars and fifty cents as "$25.50" not "$25.5" or
                  "$2550."
                </li>
                <li>
                  Fill any remaining space in the box with a line or zeros to
                  prevent tampering.
                </li>
              </ul>
            </div>

            {/* Step 4: Written Amount */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Spelling Out the Amount in Words
              </h3>

              <p className="text-gray-700 mb-4">
                The amount line below the recipient's name requires the dollar
                amount written in words. This serves as a backup verification
                for the numerical amount.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <p className="text-blue-800">
                  <strong>Example:</strong> Write "Fifty dollars and 00/100" for
                  $50.00. The fraction represents cents, with 100 as the
                  denominator.
                </p>
              </div>

              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Start writing immediately</strong> after the printed
                  word "Pay" without leaving gaps. Capitalize the first letter
                  only.
                </li>
                <li>
                  Draw a solid line through any remaining space on the line to
                  prevent others from adding words.
                </li>
                <li>
                  If the written amount differs from the numerical amount, banks
                  typically honor the written version.
                </li>
              </ul>
            </div>
          </section>

          {/* Completing Transaction Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Completing the Transaction
            </h2>

            <p className="text-gray-700 mb-8">
              The memo line provides space for optional payment details, while
              the signature field requires a handwritten signature to authorize
              the payment and make the check valid.
            </p>

            {/* Memo */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Adding a Memo
              </h3>

              <p className="text-gray-700 mb-4">
                The memo line appears in the bottom left corner of the check.
                This field is optional but serves important purposes for
                record-keeping.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-green-800 mb-2">
                  Common memo examples:
                </h4>
                <ul className="list-disc pl-6 text-green-700 space-y-1">
                  <li>Account numbers</li>
                  <li>Invoice references</li>
                  <li>Service descriptions</li>
                  <li>Month and year for recurring payments</li>
                </ul>
              </div>
            </div>

            {/* Signature */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Signing the Check
              </h3>

              <p className="text-gray-700 mb-4">
                The signature line sits in the bottom right corner and requires
                the account holder's handwritten signature. This signature
                authorizes the bank to release funds from the account.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-red-800 mb-2">
                  Important signature requirements:
                </h4>
                <ul className="list-disc pl-6 text-red-700 space-y-1">
                  <li>Use blue or black ink only</li>
                  <li>Sign clearly and legibly</li>
                  <li>Match the registered account signature</li>
                  <li>Never leave the signature line blank</li>
                </ul>
              </div>

              <p className="text-gray-700">
                An unsigned check holds no value and banks will not process it.
                The signature legally authorizes the payment amount to transfer
                from the writer's account to the payee.
              </p>
            </div>
          </section>

          {/* Common Mistakes Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Common Mistakes to Avoid
            </h2>

            <p className="text-gray-700 mb-8">
              Small errors when writing checks can lead to payment delays, bank
              rejections, or even fraud. The most critical mistakes involve
              leaving required fields empty, making numerical or spelling
              errors, and writing conflicting amounts.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  Leaving Blank Fields
                </h3>
                <p className="text-red-700 text-sm">
                  Banks will reject checks with blank or incomplete fields.
                  Every section must be filled out completely before signing.
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                  Incorrect Numbers
                </h3>
                <p className="text-yellow-700 text-sm">
                  Mathematical errors create confusion and potential legal
                  issues. Double-checking all numbers prevents costly mistakes.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">
                  Mismatched Amounts
                </h3>
                <p className="text-orange-700 text-sm">
                  The numerical amount and written amount must match exactly.
                  When they differ, banks typically honor the written amount.
                </p>
              </div>
            </div>
          </section>

          {/* Security Tips Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Tips for Writing Checks Safely
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Preventing Fraud
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    <strong>Use gel or permanent ink pens</strong> when writing
                    checks
                  </li>
                  <li>
                    Fill out checks completely without leaving blank spaces
                  </li>
                  <li>Write clearly and legibly to avoid misinterpretation</li>
                  <li>
                    Mail checks in security envelopes with crosshatch patterns
                  </li>
                  <li>
                    Monitor bank statements regularly for unauthorized
                    transactions
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Storing Checks Securely
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Keep unused checkbooks in a locked drawer or safe</li>
                  <li>Store checks away from personal information</li>
                  <li>Maintain a detailed check register</li>
                  <li>
                    <strong>Shred old or voided checks</strong> using a
                    cross-cut shredder
                  </li>
                  <li>
                    Order checks directly from your bank or reputable companies
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Digital Alternatives Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Alternatives to Writing a Check
            </h2>

            <p className="text-gray-700 mb-8">
              Electronic payments have largely replaced traditional check
              writing for most transactions. Digital methods offer faster
              processing times and enhanced security features compared to paper
              checks.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Electronic Payment Options
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc pl-6 text-blue-800 space-y-2">
                  <li>
                    <strong>Online banking transfers</strong> - Direct
                    bank-to-bank transfers
                  </li>
                  <li>
                    <strong>Mobile payment apps</strong> - Venmo, Zelle, PayPal
                    for instant transfers
                  </li>
                  <li>
                    <strong>Debit and credit cards</strong> - Immediate
                    processing with fraud protection
                  </li>
                </ul>
                <ul className="list-disc pl-6 text-blue-800 space-y-2">
                  <li>
                    <strong>Automatic bill pay</strong> - Scheduled recurring
                    payments
                  </li>
                  <li>
                    <strong>Wire transfers</strong> - For large, same-day
                    transactions
                  </li>
                  <li>
                    <strong>Digital wallets</strong> - Apple Pay, Google Pay for
                    contactless payments
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">
                When to Use Checks vs Digital Methods
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">
                    Use Checks For:
                  </h4>
                  <ul className="list-disc pl-6 text-green-700 space-y-1">
                    <li>Landlords requiring paper payments</li>
                    <li>Government agencies</li>
                    <li>Large transactions needing documentation</li>
                    <li>Emergency situations with system outages</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">
                    Use Digital For:
                  </h4>
                  <ul className="list-disc pl-6 text-green-700 space-y-1">
                    <li>Routine transactions under $1,000</li>
                    <li>Online purchases</li>
                    <li>Person-to-person payments</li>
                    <li>Recurring monthly bills</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Widget */}
          <section className="mb-16">
            <ContactWidget />
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Practice?</h2>
            <p className="text-blue-100 mb-6">
              Now that you understand the fundamentals, try our interactive
              check writing simulator to practice your new skills.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Try the Interactive Simulator
            </Link>
          </section>
        </div>
      </article>
    </main>
  );
}
