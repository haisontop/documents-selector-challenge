import React from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { FaArrowRight } from "react-icons/fa6";

export interface DocumentItemModel {
  id: string;
  title: string;
}

interface DocumentItemProps extends DocumentItemModel {
  startIcon?: React.ReactElement;
  onAdd?: (id: string) => void;
  onRemove?: (id: string) => void;
}

export function DocumentItem({
  id,
  title,
  startIcon,
  onAdd,
  onRemove,
}: DocumentItemProps) {
  return (
    <div className="flex items-center py-2 px-[6px]">
      {startIcon && <div className="mr-2">{startIcon}</div>}
      <div className="text-sm font-medium text-gray-900">{title}</div>
      {onRemove && (
        <div className="ml-auto flex">
          <button
            className="w-6 h-6 border border-gray-200 rounded flex items-center justify-center"
            onClick={() => onRemove(id)}
          >
            <XMarkIcon className="w-4 h-4 text-gray-800" />
          </button>
        </div>
      )}
      {onAdd && (
        <div className="ml-auto flex">
          <button
            className="w-6 h-6 border border-gray-200 rounded flex items-center justify-center"
            onClick={() => onAdd(id)}
          >
            <FaArrowRight className="w-4 h-4 text-gray-800" />
          </button>
        </div>
      )}
    </div>
  );
}
