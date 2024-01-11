"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { FaChevronUp } from "react-icons/fa";
import type { ReactNode } from "react";

interface DisclosureCardProps {
  label: string;
}

export function DisclosureCard({
  label,
  children
}: React.PropsWithChildren<DisclosureCardProps>): JSX.Element {
  return (
    <Disclosure data-accordion="collapse">
      {({ open }): JSX.Element => {
        // closeFnRef.current = close;

        return (
          <div className="flex flex-col">
            <Disclosure.Button
              className={`ui-open:bg-gray-100 ui-not-open:bg-gray-50 shadow-mxl flex w-full justify-between border border-slate-100 px-5 py-4 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 flex items-center`}
            >
              <div className="ui-open:text-gray-900 ui-not-open:text-gray-600 font-medium">
                {label}
              </div>
              <FaChevronUp
                className={`${
                  open ? "transform text-gray-900" : "rotate-180 text-gray-600 "
                } h-3 w-3 `}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="p-2 text-sm text-gray-500">
              {children}
            </Disclosure.Panel>
          </div>
        );
      }}
    </Disclosure>
  );
}
