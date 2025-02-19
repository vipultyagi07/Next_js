import React from "react";

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-8 m-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex justify-center items-center">
      {children}
    </div>
  );
};
