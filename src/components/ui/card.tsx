"use client";
import { cn } from "@/lib/utils";
import img from "../../../public/image.png"

interface CardProps {
    image: string;
    title: string;
    description: string;
    
}


export function CardDemo({image, title, description}:CardProps) {
  return (
    <div className="max-w-[250px] max-md:w-[150px] w-full group/card bg-orange-500">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card md:h-72 h-44 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-end p-4 bg-cover"
        )}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        {/* <div className="flex flex-row items-center space-x-4 z-10">
          <img
            height="100"
            width="100"
            alt="Avatar"
            src="/manu.png"
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              Manu Arora
            </p>
            <p className="text-sm text-gray-400">2 min read</p>
          </div>
        </div> */}
        
          <button className="font-bold text-xl title md:text-2xl backdrop-blur-sm rounded-md group-hover/card:text-white group-hover/card:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] text-neutral-800 bg-white/[0.2] relative z-10">
            {title}
          </button>
          
      </div>
    </div>
  );
}
