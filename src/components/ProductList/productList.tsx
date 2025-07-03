"use client";

import React, { useEffect, useRef } from "react";
import Card from "@/components/ui/Newcard";
import GradientText from "@/components/ui/shinyext";
// import img from "../../../public/image.png";
import b1 from "../../../public/product/b1.png";
import b2 from "../../../public/product/b2.png";
import b3 from "../../../public/product/b3.png";
import b4 from "../../../public/product/b4.png";
import b5 from "../../../public/product/b5.png";
import b6 from "../../../public/product/b6.png";
import b7 from "../../../public/product/b7.png";
import b8 from "../../../public/product/b8.png";
import b9 from "../../../public/product/b9.png";
import b10 from "../../../public/product/b10.png";
import t1 from "../../../public/product/t1.png";
import t2 from "../../../public/product/t2.png";
import t3 from "../../../public/product/t3.png";
import t4 from "../../../public/product/t4.png";
import dt1 from "../../../public/product/dt1.png";
import dt2 from "../../../public/product/dt2.png";
import dt3 from "../../../public/product/dt3.png";
import dt4 from "../../../public/product/dt4.png";
import s1 from "../../../public/product/s1.png";
import s2 from "../../../public/product/s2.png";
import s3 from "../../../public/product/s3.png";
import s4 from "../../../public/product/s4.png";
import store1 from "../../../public/product/store1.png";
import store2 from "../../../public/product/store2.png";
import v1 from "../../../public/product/v1.png";
import v2 from "../../../public/product/v2.png";
import v3 from "../../../public/product/v3.png";
import v4 from "../../../public/product/v4.png";
import wt1 from "../../../public/product/wt1.png";
import wt2 from "../../../public/product/wt2.png";
import wt3 from "../../../public/product/wt3.png";
import wt4 from "../../../public/product/wt4.png";
import wt5 from "../../../public/product/wt5.png";
import wt6 from "../../../public/product/wt6.png";

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
  { header: "Burner", img: b1, title: "Double Burner" },
  { header: "Burner", img: b2, title: "Chinese Burner" },
  { header: "Burner", img: b3, title: "Single Burner" },
  { header: "Burner", img: b4, title: "Four Burner" },
  { header: "Burner", img: b5, title: "Tandoori Pot" },
  { header: "Burner", img: b6, title: "barbecuie grill" },
  { header: "Burner", img: b7, title: "shawarma machine" },
  { header: "Burner", img: b8, title: "grill machine" },
  { header: "Burner", img: b9, title: "alfaham machine" },
  { header: "Burner", img: b10, title: "dosa tawa" },
  { header: "Washing Sink", img: s1, title: "Hand wash Sink" },
  { header: "Washing Sink", img: s2, title: "single dub sink" },
  { header: "Washing Sink", img: s3, title: "drinking water sink" },
  { header: "Washing Sink", img: s4, title: "single basin sink" },
  { header: "Trolley", img: t1, title: "service trolley" },
  { header: "Trolley", img: t2, title: "ss hand trolley" },
  { header: "Trolley", img: t3, title: "surgical trolley" },
  { header: "Trolley", img: t4, title: "food warmer trolley" },
  { header: "Storage Rack", img: store1, title: "ss tier rack" },
  { header: "Storage Rack", img: store2, title: "ss plate rack" },
  { header: "Dining Table", img: dt1, title: "ss Dining Table" },
  { header: "Dining Table", img: dt2, title: "modern Dining Table" },
  { header: "Dining Table", img: dt3, title: "dining with stool" },
  { header: "Dining Table", img: dt4, title: "ss Dining Table frame" },
  { header: "Counter Table", img: wt1, title: "ss work table" },
  { header: "Counter Table", img: wt2, title: "ss service counter" },
  { header: "Counter Table", img: wt3, title: "ss chat counter" },
  { header: "Counter Table", img: wt4, title: "ss coffee barcounter" },
  { header: "Counter Table", img: wt5, title: "display counter" },
  { header: "Counter Table", img: wt6, title: "meat display counter" },
  { header: "Vessel", img: v1, title: "ss heavy vessel" },
  { header: "Vessel", img: v2, title: "ss deep water gunj" },
  { header: "Vessel", img: v3, title: "ss heavy kadai" },
  { header: "Vessel", img: v4, title: "ss water tank" },
  { header: "Grinder", img: b1, title: "surgical trolley" },
  { header: "Grinder", img: b2, title: "food warmer trolley" },
  { header: "Burner", img: b3, title: "Double Burner" },
  { header: "Grinder", img: b4, title: "Chinese Burner" },
  { header: "Railing gate", img: b5, title: "Single Burner" },
  { header: "Railing gate", img: b6, title: "Four Burner" },
  { header: "Railing gate", img: b1, title: "Tandoori Pot" },
  { header: "Preperation machines", img: b1, title: "barbecuie grill" },
  { header: "Preperation machines", img: b6, title: "shawarma machine" },
  { header: "Preperation machines", img: b7, title: "grill machine" },
  { header: "Chiller", img: s1, title: "alfaham machine" },
  { header: "Chiller", img: s2, title: "dosa tawa" },
  { header: "Chiller", img: s3, title: "Hand wash Sink" },
  { header: "Steam burner", img: s1, title: "single dub sink" },
  { header: "Steam burner", img: s2, title: "drinking water sink" },
  { header: "Bakery machines", img: b1, title: "single basin sink" },
  { header: "Bakery machines", img: b2, title: "service trolley" },
  { header: "Exhaust fan", img: b3, title: "ss hand trolley" },
  { header: "Exhaust fan", img: b4, title: "surgical trolley" },
  { header: "Exhaust fan", img: b5, title: "food warmer trolley" },
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
          className={`lg:my-5 py-5 lg:py-8 ${
            index % 2 === 0 ? "bg-white" : "bg-lin-bag"
          }`}
          key={index}
          id={slugify(data)}
          ref={sectionRefs[slugify(data)]}
        >
          <h1
            className="flex flex-col justify-center items-center font-medium p-1"
            style={{ fontSize: "clamp(30px, 5vw, 35px)" }}
          >
            <GradientText
              colors={[
                "#B82800", // dark burnt orange
                // "#5C5C5C", // medium-dark gray
                "#f83600", // vivid orange-red
                "#3A3A3A", // neutral dark gray
                // "#DBB706", // gold-like transition (optional highlight)
                "#2E2E2E", // very dark gray
              ]}
              animationSpeed={4}
            >
              {data}
            </GradientText>
          </h1>

          <div className=" md:mt-4 flex justify-center">
            <div className="grid lg:w-[80%] xl:w-[95%] 2xl:w-[85%] h-auto w-[95%] md:grid-cols-3 xl:grid-cols-5 p-4 gap-4">
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
