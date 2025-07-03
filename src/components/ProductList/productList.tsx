"use client";

import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import Card from "@/components/ui/Newcard";
import GradientText from "@/components/ui/shinyext";
import img from "../../../public/image.png";

export const Header = [
  "Burner",
  "Washing Sink",
  "Trolley",
  "Storage",
  "Dining Table",
  "Counter Table",
  "Vessel",
  "Steam burner",
  "Grinder",
  "Chiller",
  "Bakery machines",
  "Exhaust fan",
  "Railing gate",
  "Preperation machines",
];

const productData = [
  { header: "Burner", img: img, title: "Double Burner" },
  { header: "Burner", img: img, title: "Chinese Burner" },
  { header: "Burner", img: img, title: "Single Burner" },
  { header: "Burner", img: img, title: "Four Burner" },
  { header: "Burner", img: img, title: "Tandoori Pot" },
  { header: "Burner", img: img, title: "barbecuie grill" },
  { header: "Burner", img: img, title: "shawarma machine" },
  { header: "Burner", img: img, title: "grill machine" },
  { header: "Burner", img: img, title: "alfaham machine" },
  { header: "Burner", img: img, title: "dosa tawa" },
  { header: "Washing Sink", img: img, title: "Hand wash Sink" },
  { header: "Washing Sink", img: img, title: "single dub sink" },
  { header: "Washing Sink", img: img, title: "drinking water sink" },
  { header: "Washing Sink", img: img, title: "single basin sink" },
  { header: "Trolley", img: img, title: "service trolley" },
  { header: "Trolley", img: img, title: "ss hand trolley" },
  { header: "Trolley", img: img, title: "surgical trolley" },
  { header: "Trolley", img: img, title: "food warmer trolley" },
  { header: "Storage Rack", img: img, title: "ss tier rack" },
  { header: "Storage Rack", img: img, title: "ss plate rack" },
  { header: "Dining Table", img: img, title: "ss Dining Table" },
  { header: "Dining Table", img: img, title: "modern Dining Table" },
  { header: "Dining Table", img: img, title: "dining with stool" },
  { header: "Dining Table", img: img, title: "ss Dining Table frame" },
  { header: "Counter Table", img: img, title: "ss work table" },
  { header: "Counter Table", img: img, title: "ss service counter" },
  { header: "Counter Table", img: img, title: "ss chat counter" },
  { header: "Counter Table", img: img, title: "ss coffee barcounter" },
  { header: "Counter Table", img: img, title: "display counter" },
  { header: "Counter Table", img: img, title: "meat display counter" },
  { header: "Vessel", img: img, title: "ss heavy vessel" },
  { header: "Vessel", img: img, title: "ss deep water gunj" },
  { header: "Vessel", img: img, title: "ss heavy kadai" },
  { header: "Vessel", img: img, title: "ss water tank" },
  { header: "Grinder", img: img, title: "surgical trolley" },
  { header: "Grinder", img: img, title: "food warmer trolley" },
  { header: "Burner", img: img, title: "Double Burner" },
  { header: "Grinder", img: img, title: "Chinese Burner" },
  { header: "Railing gate", img: img, title: "Single Burner" },
  { header: "Railing gate", img: img, title: "Four Burner" },
  { header: "Railing gate", img: img, title: "Tandoori Pot" },
  { header: "Preperation machines", img: img, title: "barbecuie grill" },
  { header: "Preperation machines", img: img, title: "shawarma machine" },
  { header: "Preperation machines", img: img, title: "grill machine" },
  { header: "Chiller", img: img, title: "alfaham machine" },
  { header: "Chiller", img: img, title: "dosa tawa" },
  { header: "Chiller", img: img, title: "Hand wash Sink" },
  { header: "Steam burner", img: img, title: "single dub sink" },
  { header: "Steam burner", img: img, title: "drinking water sink" },
  { header: "Bakery machines", img: img, title: "single basin sink" },
  { header: "Bakery machines", img: img, title: "service trolley" },
  { header: "Exhaust fan", img: img, title: "ss hand trolley" },
  { header: "Exhaust fan", img: img, title: "surgical trolley" },
  { header: "Exhaust fan", img: img, title: "food warmer trolley" },
];

const ProductList = () => {
  const slugify = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

  const sectionRefs = Header.reduce((acc, name) => {
    const slug = slugify(name);
    acc[slug] = useRef<HTMLDivElement>(null);
    return acc;
  }, {} as Record<string, React.RefObject<HTMLDivElement | null>>);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const targetRef = sectionRefs[hash];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: "auto", block: "start" });

      // Optional: adjust position if sticky header overlaps
      setTimeout(() => {
        window.scrollBy({ top: -80, behavior: "smooth" }); // adjust -80 to match your header height
      }, 100);
    }
  }, []);

  return (
    <div>
      {Header.map((data, index) => (
        <div
          className={`my-10 py-10 ${index % 2 === 0 ?"bg-white" :"bg-lin-bag"}`}
          key={index}
          id={slugify(data)}
          ref={sectionRefs[slugify(data)]}
        >
          <h1
            className="flex flex-col justify-center items-center font-medium p-1"
            style={{ fontSize: "clamp(20px, 2vw, 25px)" }}
          >
            <GradientText
              colors={[
                "#B82800", // dark burnt orange
                // "#5C5C5C", // medium-dark gray
                "#f83600", // vivid orange-red
                "#3A3A3A", // neutral dark gray
                // "#DBB706", // gold-like transition (optional highlight)
                "#2E2E2E", // very dark gray
              ]} className="text-4xl"
              animationSpeed={4}
            >
              {data}
            </GradientText>
          </h1>

          <div className=" mt-8 flex justify-center">
            <div className="grid lg:w-[80%] h-auto w-[90%] md:grid-cols-3 xl:grid-cols-5 p-4 gap-4">
              {productData.map(
                (product, proindex) =>
                  product.header === data && (
                    <div key={proindex}>
                      <Card image={product.img} title={product.title} />
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
