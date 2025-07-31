"use client";

import { useState } from "react";
import CheckPreview from "./CheckPreview";
import ExportButtons from "./ExportButtons";
import { CheckData } from "@/types/check";

export default function CheckSimulator() {
  const [checkData, setCheckData] = useState<CheckData>({
    // Account holder information
    accountName: "",
    accountAddress: "",
    accountCity: "",
    accountState: "",
    accountZip: "",

    // Check fields
    date: "",
    payTo: "",
    amount: "",
    amountWords: "",
    memo: "",
    signature: "",
  });

  const handleInputChange = (field: keyof CheckData, value: string) => {
    setCheckData((prev) => {
      const updated = { ...prev, [field]: value };

      // Auto-convert amount to words
      if (field === "amount") {
        updated.amountWords = convertAmountToWords(value);
      }

      return updated;
    });
  };

  const convertAmountToWords = (amount: string): string => {
    const num = parseFloat(amount);
    if (isNaN(num)) return "";

    // Simple number to words conversion for demo
    const ones = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];
    const tens = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];
    const teens = [
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];

    if (num === 0) return "zero dollars";
    if (num >= 1000000) return "Amount too large";

    const dollars = Math.floor(num);
    const cents = Math.round((num - dollars) * 100);

    let result = "";

    if (dollars >= 1000) {
      const thousands = Math.floor(dollars / 1000);
      if (thousands >= 100) {
        result += ones[Math.floor(thousands / 100)] + " hundred ";
      }
      const remainingThousands = thousands % 100;
      if (remainingThousands >= 20) {
        result += tens[Math.floor(remainingThousands / 10)] + " ";
        if (remainingThousands % 10 > 0) {
          result += ones[remainingThousands % 10] + " ";
        }
      } else if (remainingThousands >= 10) {
        result += teens[remainingThousands - 10] + " ";
      } else if (remainingThousands > 0) {
        result += ones[remainingThousands] + " ";
      }
      result += "thousand ";
    }

    const remainingDollars = dollars % 1000;
    if (remainingDollars >= 100) {
      result += ones[Math.floor(remainingDollars / 100)] + " hundred ";
    }

    const finalDollars = remainingDollars % 100;
    if (finalDollars >= 20) {
      result += tens[Math.floor(finalDollars / 10)] + " ";
      if (finalDollars % 10 > 0) {
        result += ones[finalDollars % 10] + " ";
      }
    } else if (finalDollars >= 10) {
      result += teens[finalDollars - 10] + " ";
    } else if (finalDollars > 0) {
      result += ones[finalDollars] + " ";
    }

    result += dollars === 1 ? "dollar" : "dollars";

    if (cents > 0) {
      result += ` and ${cents}/100`;
    }

    return result.trim();
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
        Interactive Check Writing Simulator
      </h2>

      {/* Top Row - Account Info and Check Info Side by Side */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Account Holder Information Section */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Account Holder Information
          </h3>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="accountName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="accountName"
                value={checkData.accountName}
                onChange={(e) =>
                  handleInputChange("accountName", e.target.value)
                }
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white placeholder-gray-500"
              />
            </div>

            <div>
              <label
                htmlFor="accountAddress"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Street Address
              </label>
              <input
                type="text"
                id="accountAddress"
                value={checkData.accountAddress}
                onChange={(e) =>
                  handleInputChange("accountAddress", e.target.value)
                }
                placeholder="123 Main Street"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white placeholder-gray-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="accountCity"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  City
                </label>
                <input
                  type="text"
                  id="accountCity"
                  value={checkData.accountCity}
                  onChange={(e) =>
                    handleInputChange("accountCity", e.target.value)
                  }
                  placeholder="Your City"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white placeholder-gray-500"
                />
              </div>

              <div>
                <label
                  htmlFor="accountState"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  State
                </label>
                <input
                  type="text"
                  id="accountState"
                  value={checkData.accountState}
                  onChange={(e) =>
                    handleInputChange("accountState", e.target.value)
                  }
                  placeholder="ST"
                  maxLength={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white placeholder-gray-500"
                />
              </div>
            </div>

            <div className="w-1/2">
              <label
                htmlFor="accountZip"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                ZIP Code
              </label>
              <input
                type="text"
                id="accountZip"
                value={checkData.accountZip}
                onChange={(e) =>
                  handleInputChange("accountZip", e.target.value)
                }
                placeholder="12345"
                maxLength={10}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Check Information Section */}
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Check Information
          </h3>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                value={checkData.date}
                onChange={(e) => handleInputChange("date", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
              />
            </div>

            <div>
              <label
                htmlFor="payTo"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Pay to the Order of
              </label>
              <input
                type="text"
                id="payTo"
                value={checkData.payTo}
                onChange={(e) => handleInputChange("payTo", e.target.value)}
                placeholder="Enter recipient name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white placeholder-gray-500"
              />
            </div>

            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Amount ($)
              </label>
              <input
                type="number"
                id="amount"
                value={checkData.amount}
                onChange={(e) => handleInputChange("amount", e.target.value)}
                placeholder="0.00"
                step="0.01"
                min="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white placeholder-gray-500"
              />
            </div>

            <div>
              <label
                htmlFor="memo"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Memo (Optional)
              </label>
              <input
                type="text"
                id="memo"
                value={checkData.memo}
                onChange={(e) => handleInputChange("memo", e.target.value)}
                placeholder="What is this payment for?"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white placeholder-gray-500"
              />
            </div>

            <div>
              <label
                htmlFor="signature"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Signature
              </label>
              <input
                type="text"
                id="signature"
                value={checkData.signature}
                onChange={(e) => handleInputChange("signature", e.target.value)}
                placeholder="Your signature"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white placeholder-gray-500"
              />
            </div>

            <ExportButtons checkData={checkData} />
          </div>
        </div>
      </div>

      {/* Bottom Row - Check Preview Full Width */}
      <div className="w-full">
        <CheckPreview checkData={checkData} />
      </div>
    </div>
  );
}
