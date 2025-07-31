"use client";

import { useState } from "react";
import { CheckData } from "@/types/check";
import EmailModal from "./EmailModal";
import { Download, FileText } from "lucide-react";

interface ExportButtonsProps {
  checkData: CheckData;
}

export default function ExportButtons({ checkData }: ExportButtonsProps) {
  const [showEmailModal, setShowEmailModal] = useState(false);

  const exportToPDF = async () => {
    try {
      const jsPDF = (await import("jspdf")).default;
      const html2canvas = (await import("html2canvas")).default;

      const element = document.getElementById("check-preview");
      if (!element) return;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      const imgWidth = 250;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 20, 20, imgWidth, imgHeight);

      // Add a title with the account holder's name if available
      const fileName = checkData.accountName
        ? `check-${checkData.accountName.replace(/\s+/g, "-").toLowerCase()}.pdf`
        : "check-preview.pdf";

      pdf.save(fileName);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    }
  };

  const isCheckComplete =
    checkData.date &&
    checkData.payTo &&
    checkData.amount &&
    checkData.signature;

  return (
    <div className="space-y-4">
      <button
        onClick={exportToPDF}
        disabled={!isCheckComplete}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        <Download size={20} />
        Export Check as PDF
      </button>

      <button
        onClick={() => setShowEmailModal(true)}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        <FileText size={20} />
        Download Sample Check Template
      </button>

      {!isCheckComplete && (
        <p className="text-sm text-gray-500 text-center">
          Complete all required fields to export your check
        </p>
      )}

      <EmailModal
        isOpen={showEmailModal}
        onClose={() => setShowEmailModal(false)}
      />
    </div>
  );
}
