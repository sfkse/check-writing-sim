"use client";

import { useState } from "react";
import { X, Mail } from "lucide-react";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmailModal({ isOpen, onClose }: EmailModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Generate and download sample PDF
    try {
      const jsPDF = (await import("jspdf")).default;
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      // Add title and instructions
      pdf.setFontSize(18);
      pdf.setFont("helvetica", "bold");
      pdf.text("Practice Check Template", 20, 25);

      pdf.setFontSize(11);
      pdf.setFont("helvetica", "normal");
      pdf.text(
        "Print this template on blank paper for check writing practice.",
        20,
        35
      );
      pdf.text(
        "Use a pen to fill out the fields and practice proper check writing techniques.",
        20,
        42
      );

      // Single check in the center
      drawCheck(pdf, 20, 60);

      // Instructions at bottom
      pdf.setFontSize(10);
      pdf.setFont("helvetica", "bold");
      pdf.text("Practice Tips:", 20, 170);

      pdf.setFont("helvetica", "normal");
      const tips = [
        "• Always use a pen with permanent ink (blue or black)",
        "• Write clearly and legibly in all fields",
        "• Fill out the date, payee, amount (numbers and words), memo, and signature",
        "• Draw a line after written amounts to prevent alterations",
        "• Keep your signature consistent with your bank account signature",
      ];

      tips.forEach((tip, index) => {
        pdf.text(tip, 25, 180 + index * 7);
      });

      pdf.save("practice-check-template.pdf");

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error generating sample PDF:", error);
      alert("Error generating sample PDF. Please try again.");
    }

    setIsSubmitting(false);
  };

  // Function to draw a realistic check
  const drawCheck = (pdf: import('jspdf').jsPDF, x: number, y: number) => {
    const checkWidth = 250;
    const checkHeight = 80;

    // Main check border
    pdf.setLineWidth(0.8);
    pdf.rect(x, y, checkWidth, checkHeight);

    // Header section with customizable placeholder
    pdf.setFontSize(9);
    pdf.setFont("helvetica", "bold");
    pdf.text("YOUR NAME", x + 8, y + 12);
    pdf.setFont("helvetica", "normal");
    pdf.text("123 Your Street", x + 8, y + 18);
    pdf.text("Your City, State 12345", x + 8, y + 24);

    // Check number (top right)
    pdf.setFont("helvetica", "normal");
    pdf.text("Check #", x + checkWidth - 35, y + 12);
    pdf.setLineWidth(0.3);
    pdf.line(x + checkWidth - 25, y + 14, x + checkWidth - 5, y + 14);

    // Date field (top right)
    pdf.text("Date:", x + checkWidth - 45, y + 25);
    pdf.line(x + checkWidth - 35, y + 27, x + checkWidth - 5, y + 27);

    // Pay to the order of line
    pdf.setFontSize(8);
    pdf.text("Pay to the", x + 8, y + 38);
    pdf.text("order of:", x + 8, y + 43);

    pdf.setLineWidth(0.4);
    pdf.line(x + 30, y + 45, x + checkWidth - 55, y + 45);

    // Dollar amount box
    pdf.text("$", x + checkWidth - 50, y + 43);
    pdf.rect(x + checkWidth - 45, y + 37, 40, 12);

    // Amount in words line
    pdf.setLineWidth(0.4);
    pdf.line(x + 8, y + 57, x + checkWidth - 80, y + 57);
    pdf.setFontSize(7);
    pdf.text("DOLLARS", x + checkWidth - 75, y + 59);

    // Bank information (bottom left) - moved up to avoid overlap
    pdf.setFontSize(7);
    pdf.setFont("helvetica", "bold");
    pdf.text("SAMPLE BANK", x + 8, y + checkHeight - 18);
    pdf.setFont("helvetica", "normal");
    pdf.text(
      "123 Bank Street, Bank City, ST 54321",
      x + 8,
      y + checkHeight - 14
    );

    // Memo line (moved down and made shorter)
    pdf.text("Memo:", x + 8, y + checkHeight - 6);
    pdf.setLineWidth(0.3);
    pdf.line(x + 22, y + checkHeight - 4, x + 90, y + checkHeight - 4);

    // Signature line (positioned to avoid overlap)
    pdf.text("Signature:", x + checkWidth - 90, y + checkHeight - 6);
    pdf.line(
      x + checkWidth - 65,
      y + checkHeight - 4,
      x + checkWidth - 8,
      y + checkHeight - 4
    );

    // MICR line (bottom) - moved down
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8);
    pdf.text("⚹123456789⚹  987654321⚹  1001", x + 8, y + checkHeight + 8);

    // Security background pattern (light)
    pdf.setDrawColor(230, 230, 230);
    pdf.setLineWidth(0.1);
    for (let i = 0; i < checkWidth; i += 8) {
      for (let j = 0; j < checkHeight; j += 8) {
        if ((i + j) % 16 === 0) {
          pdf.circle(x + i, y + j, 0.3);
        }
      }
    }

    // Reset colors
    pdf.setDrawColor(0, 0, 0);
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-md w-full p-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Download Started!
            </h3>
            <p className="text-gray-600 mb-6">
              Your practice check template should begin downloading shortly.
              Print it on regular paper and use it to practice writing checks
              with a pen.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setEmail("");
                onClose();
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900">
            Download Practice Check Template
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <p className="text-gray-600 mb-6">
          Get a printable practice check template with realistic design and
          layout. Perfect for practicing check writing skills with pen and
          paper!
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !email}
              className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              {isSubmitting ? "Generating..." : "Get Template"}
            </button>
          </div>
        </form>

        <p className="text-xs text-gray-500 mt-4 text-center">
          We respect your privacy. Your email is only used for this download.
        </p>
      </div>
    </div>
  );
}
