import React from "react";

export default function MovieInfo({title, text}) {
  return (
    <div className="flex items-start justify-start gap-x-3">
      <p className="text-sm font-bold">{title}</p>
      <p className="text-sm">{text}</p>
    </div>
  );
}
