import React from "react";

interface TitleCardProps {
  title: string;
}

export function TitleCard({
  title,
  children,
}: React.PropsWithChildren<TitleCardProps>) {
  return (
    <div className="p-4 rounded-lg bg-white">
      <div className="text-gray-900 font-medium">{title}</div>
      {children && <div className="mt-3">{children}</div>}
    </div>
  );
}
