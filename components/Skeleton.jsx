import React from "react";

export default function Skeleton() {
  return (
    <section className="container mx-auto mb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-y-10 md:gap-5 px-2 xl:px-0">
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="animate-pulse flex flex-col items-center justify-center"
          >
            <div className="w-48 h-72 bg-gray-200 rounded-md"></div>
            <div className="w-48 h-4 bg-gray-200 rounded-md mt-2"></div>
            <div className="w-48 h-4 bg-gray-200 rounded-md mt-2"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
