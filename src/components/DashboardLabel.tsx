import React, { Children } from "react";

const DashboardLabel = ({
  children,
  left,
  top,
  active,
}: {
  children: React.ReactNode;
  left: number;
  top: number;
  active: boolean;
}) => {
  return (
    <div
      className={` absolute text-xl max-w-40 left-[${left}px] top-[${top}px]  translate-y-[-50%] px-4 py-2 rounded-lg bg-indigo-800/30 border border-indigo-400 text-gray-300 ${
        active ? "absolute" : "hidden"
      }`}
    >
      {children}
    </div>
  );
};

export default DashboardLabel;
