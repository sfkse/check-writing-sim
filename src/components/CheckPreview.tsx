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

      <div
        id="check-preview"
        className="bg-gray-50 border-2 border-gray-300 rounded-lg p-8 font-mono text-sm overflow-hidden"
        style={{
          aspectRatio: "2.5/1",
          minHeight: "320px",
          maxWidth: "100%",
          backgroundImage: `
            linear-gradient(90deg, transparent 0%, transparent 98%, #d1d5db 98%, #d1d5db 100%),
            linear-gradient(0deg, transparent 0%, transparent 98%, #d1d5db 98%, #d1d5db 100%)
          `,
          backgroundSize: "15px 15px",
        }}
      >
        {/* Check Header */}
        <div className="flex justify-between items-start mb-8">
          <div className="space-y-1">
            <div className="text-base font-bold text-gray-900">
              {displayName.toUpperCase()}
            </div>
            <div className="text-sm text-gray-800">{displayAddress}</div>
            <div className="text-sm text-gray-800">{displayLocation}</div>
          </div>
          <div className="text-right space-y-2">
            <div className="text-sm text-gray-700">Check #</div>
            <div className="text-lg font-bold text-gray-900">1001</div>
          </div>
        </div>

        {/* Date */}
        <div className="flex justify-end mb-6">
          <div className="flex items-center">
            <span className="text-sm text-gray-800 mr-3">Date:</span>
            <div className="border-b-2 border-gray-600 px-3 py-2 min-w-[100px] text-gray-900">
              {checkData.date || "___/___/_____"}
            </div>
          </div>
        </div>

        {/* Pay To */}
        <div className="mb-6">
          <div className="flex items-center flex-wrap gap-3">
            <span className="text-sm text-gray-800 whitespace-nowrap">
              Pay to the order of:
            </span>
            <div className="border-b-2 border-gray-600 flex-1 px-3 py-2 min-h-[24px] min-w-[200px] text-gray-900">
              {checkData.payTo || "________________________________"}
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-800 mr-2">$</span>
              <div className="border-2 border-gray-600 px-3 py-2 min-w-[80px] text-right text-gray-900">
                {checkData.amount || "0.00"}
              </div>
            </div>
          </div>
        </div>

        {/* Amount in Words */}
        <div className="mb-8">
          <div className="px-3 py-2 min-h-[28px] text-gray-900 flex items-center justify-between">
            <div className="flex items-center flex-1 border-b-2 border-gray-600 pb-2">
              <span className="text-sm">
                {checkData.amountWords || "Zero dollars and 00/100"}
              </span>
              <div
                className="flex-1 mx-3 h-[8px] relative"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='8' viewBox='0 0 16 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 4L4 0L8 4L12 0L16 4L12 8L8 4L4 8Z' fill='%23374151' stroke='%23374151' stroke-width='0.5'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "repeat-x",
                  backgroundSize: "16px 8px",
                  backgroundPosition: "center",
                }}
              />
            </div>
            <span className="font-bold ml-6 text-sm">DOLLARS</span>
          </div>
        </div>

        {/* Bank Info and Memo/Signature */}
        <div className="flex justify-between items-end">
          <div className="text-xs text-gray-800 max-w-[45%] space-y-1">
            <div className="font-semibold text-sm">SAMPLE BANK</div>
            <div>123 Bank Street</div>
            <div>Bank City, ST 54321</div>
            <div className="mt-4 flex items-center">
              <span className="text-gray-700 mr-2">Memo:</span>
              <div className="border-b border-gray-500 inline-block min-w-[120px] px-2 py-1 text-gray-900">
                {checkData.memo || ""}
              </div>
            </div>
          </div>

          <div className="text-right max-w-[45%]">
            <div className="text-sm text-gray-700 mb-2">Signature</div>
            <div className="border-b-2 border-gray-600 px-3 py-2 min-w-[140px] min-h-[32px] italic text-gray-900">
              {checkData.signature || ""}
            </div>
          </div>
        </div>

        {/* Bottom routing numbers */}
        <div className="mt-6 text-xs text-gray-600 font-mono">
          ⚹123456789⚹ 987654321⚹ 1001
        </div>
      </div>
    </div>
  );
}
