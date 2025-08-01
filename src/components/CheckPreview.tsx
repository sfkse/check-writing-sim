"use client";

import { CheckData } from "@/types/check";

interface CheckPreviewProps {
  checkData: CheckData;
}

export default function CheckPreview({ checkData }: CheckPreviewProps) {
  // Format the account holder information with fallbacks
  const displayName = checkData.accountName || "YOUR NAME";
  const displayAddress = checkData.accountAddress || "123 Your Street";
  const displayLocation =
    checkData.accountCity && checkData.accountState && checkData.accountZip
      ? `${checkData.accountCity}, ${checkData.accountState} ${checkData.accountZip}`
      : "Your City, ST 12345";

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Check Preview
      </h3>

      {/* Horizontal scroll container for mobile */}
      <div className="overflow-x-auto pb-4">
        <div
          id="check-preview"
          className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 md:p-8 font-mono text-sm min-h-[380px] md:min-h-[480px]"
          style={{
            aspectRatio: "2.5/1",
            minWidth: "800px", // Ensures minimum width for proper check layout
            width: "100%",
            maxWidth: "100%", // Maximum width on larger screens
            backgroundImage: `
              linear-gradient(90deg, transparent 0%, transparent 98%, #d1d5db 98%, #d1d5db 100%),
              linear-gradient(0deg, transparent 0%, transparent 98%, #d1d5db 98%, #d1d5db 100%)
            `,
            backgroundSize: "15px 15px",
          }}
        >
          {/* Check Header */}
          <div className="flex justify-between items-start mb-6 md:mb-8">
            <div className="space-y-1">
              <div className="text-sm md:text-base font-bold text-gray-900">
                {displayName.toUpperCase()}
              </div>
              <div className="text-xs md:text-sm text-gray-800">
                {displayAddress}
              </div>
              <div className="text-xs md:text-sm text-gray-800">
                {displayLocation}
              </div>
            </div>
            <div className="text-right space-y-2">
              <div className="text-xs md:text-sm text-gray-700">Check #</div>
              <div className="text-base md:text-lg font-bold text-gray-900">
                1001
              </div>
            </div>
          </div>

          {/* Date */}
          <div className="flex justify-end mb-4 md:mb-6">
            <div className="flex items-center">
              <span className="text-xs md:text-sm text-gray-800 mr-3">
                Date:
              </span>
              <div className="border-b-2 border-gray-600 px-2 md:px-3 py-1 md:py-2 min-w-[80px] md:min-w-[100px] text-xs md:text-sm text-gray-900">
                {checkData.date || "___/___/_____"}
              </div>
            </div>
          </div>

          {/* Pay To */}
          <div className="mb-4 md:mb-6">
            <div className="flex items-center flex-wrap gap-2 md:gap-3">
              <span className="text-xs md:text-sm text-gray-800 whitespace-nowrap">
                Pay to the order of:
              </span>
              <div className="border-b-2 border-gray-600 flex-1 px-2 md:px-3 py-1 md:py-2 min-h-[20px] md:min-h-[24px] min-w-[160px] md:min-w-[200px] text-xs md:text-sm text-gray-900">
                {checkData.payTo || "________________________________"}
              </div>
              <div className="flex items-center">
                <span className="text-xs md:text-sm text-gray-800 mr-1 md:mr-2">
                  $
                </span>
                <div className="border-2 border-gray-600 px-2 md:px-3 py-1 md:py-2 min-w-[60px] md:min-w-[80px] text-right text-xs md:text-sm text-gray-900">
                  {checkData.amount || "0.00"}
                </div>
              </div>
            </div>
          </div>

          {/* Amount in Words */}
          <div className="mb-6 md:mb-8">
            <div className="px-2 md:px-3 py-1 md:py-2 min-h-[24px] md:min-h-[28px] text-xs md:text-sm text-gray-900 flex items-center justify-between">
              <div className="flex items-center flex-1 border-b-2 border-gray-600 pb-1 md:pb-2">
                <span className="text-xs md:text-sm">
                  {checkData.amountWords || "Zero dollars and 00/100"}
                </span>
                <div
                  className="flex-1 mx-2 md:mx-3 h-[6px] md:h-[8px] relative"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='8' viewBox='0 0 16 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 4L4 0L8 4L12 0L16 4L12 8L8 4L4 8Z' fill='%23374151' stroke='%23374151' stroke-width='0.5'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat-x",
                    backgroundSize: "16px 8px",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <span className="font-bold ml-4 md:ml-6 text-xs md:text-sm">
                DOLLARS
              </span>
            </div>
          </div>

          {/* Bank Info and Memo/Signature */}
          <div className="flex justify-between items-end">
            <div className="text-xs text-gray-800 max-w-[45%] space-y-1">
              <div className="font-semibold text-xs md:text-sm">
                SAMPLE BANK
              </div>
              <div className="text-xs">123 Bank Street</div>
              <div className="text-xs">Bank City, ST 54321</div>
              <div className="mt-3 md:mt-4 flex items-center">
                <span className="text-gray-700 mr-1 md:mr-2 text-xs">
                  Memo:
                </span>
                <div className="border-b border-gray-500 inline-block min-w-[80px] md:min-w-[120px] px-1 md:px-2 py-1 text-xs text-gray-900">
                  {checkData.memo || ""}
                </div>
              </div>
            </div>

            <div className="text-right max-w-[45%]">
              <div className="text-xs text-gray-700 mb-1 md:mb-2">
                Signature
              </div>
              <div className="border-b-2 border-gray-600 px-2 md:px-3 py-1 md:py-2 min-w-[100px] md:min-w-[140px] min-h-[24px] md:min-h-[32px] italic text-xs md:text-sm text-gray-900">
                {checkData.signature || ""}
              </div>
            </div>
          </div>

          {/* Bottom routing numbers */}
          <div className="mt-4 md:mt-6 text-xs text-gray-600 font-mono">
            ⚹123456789⚹ 987654321⚹ 1001
          </div>
        </div>
      </div>

      {/* Mobile scroll hint */}
      <div className="md:hidden text-xs text-gray-500 text-center mt-2 flex items-center justify-center gap-1">
        <span>Scroll horizontally to view full check</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </div>
  );
}
