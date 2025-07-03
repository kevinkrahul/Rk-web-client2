"use client";

import React from "react";

interface ProductButtonProps {
    title: string;
}

const ProductButton: React.FC<ProductButtonProps> = ({ title }) => {
  return (
    <>
      <style jsx>{`
        @keyframes ripple {
  0% {
    box-shadow:
      0 0 0 0 rgba(255, 165, 0, 0.1),
      0 0 0 20px rgba(200, 200, 200, 0.08),
      0 0 0 40px rgba(255, 165, 0, 0.1),
      0 0 0 60px rgba(200, 200, 200, 0.08);
  }
  100% {
    box-shadow:
      0 0 0 20px rgba(255, 165, 0, 0.1),
      0 0 0 40px rgba(200, 200, 200, 0.08),
      0 0 0 60px rgba(255, 165, 0, 0.1),
      0 0 0 80px rgba(200, 200, 200, 0);
  }
}



        .animate-ripple {
          animation: ripple 0.6s linear infinite;
        }
      `}</style>

      <div className="relative inline-flex text-orange-950 items-center justify-center min-w-[200px] px-5 py-2 text-xs font-semibold uppercase tracking-widest rounded-md shadow-md overflow-hidden cursor-pointer hover:opacity-95 transition-all duration-200">
        <span className="absolute left-2 w-3 h-3 rounded-full bg-orange-700/10 animate-ripple" />
        {title}
        <span className="absolute right-2 w-3 h-3 rounded-full bg-orange-700/10 animate-ripple" />
      </div>
    </>
  );
};

export default ProductButton;
