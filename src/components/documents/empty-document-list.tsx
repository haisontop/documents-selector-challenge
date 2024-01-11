import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

export function EmptyDocumentList() {
  return (
    <div className="bg-gray-100 rounded-lg">
      <div className="p-10 flex flex-col items-center">
        <FaArrowLeft className="w-16 h-16 text-gray-300" />
        <div className="mt-6 text-center text-gray-500 font-semibold">
          Select documents from the left panel to have employees review them and
          provide a signature acknowledging review
        </div>
      </div>
    </div>
  );
}
