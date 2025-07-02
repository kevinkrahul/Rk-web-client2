"use client";

import React from "react";
import clsx from "clsx";
import img from "../../../public/image.png"; // Adjust the path as necessary
import Image from "next/image";
import { TypewriterEffect } from "./underLineText"; // Adjust the import path as necessary
const Card = () => {
  return (
    <div
      className={clsx(
  "relative max-w-56 w-full h-72 rounded-sm cursor-pointer mx-auto",
  "bg-black/10 backdrop-blur-lg border border-white/30 shadow-inner",
  "hover:shadow-[0_0_4px_4px_rgba(0,0,0,0.1)] active:scale-[0.98]",
  "flex items-center justify-center px-2 pt-2 pb-[3.4em] group/card",
  "transition-all duration-300 ease-in-out"
)}
    >
      {/* Add to Cart / Added! */}
      <div
        className={clsx(
  "absolute left-0 bottom-0 w-full h-8 rounded-sm flex items-center justify-center gap-1",
  "text-black text-[0.75rem] font-semibold uppercase",
  "bg-bgorangeshade backdrop-blur-3xl",
  "opacity-0 translate-y-4 pointer-events-none",
  "transition-all duration-300 ease-out",
  "group-hover/card:opacity-100 group-hover/card:translate-y-0 group-hover/card:pointer-events-auto"
)}
      >
        Specification
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Image block with zoom on hover */}
      <div className="w-full h-full grid place-items-center transition-transform duration-300 group-hover/card:scale-105">
        <Image
          src={img}
          alt="Product Image"
          className="w-full h-60 object-fill rounded-md"
        />
        {/* <span className="max-w-[55px] text-sm text-black">This is a chair.</span> */}
      </div>

      {/* Title */}
      <span className={clsx("absolute bottom-[1%] opacity-100 transition-opacity ease-in-out"," group-hover/card:opacity-0 group-hover/card:duration-0 duration-700")}>
        <TypewriterEffect
          words={[
            { text: "Gas", className: "text-black font-medium text-xl" },
            { text: "Burner", className: "text-black text-xl font-medium" },
          ]}
        />
      </span>
    </div>
  );
};

export default Card;
