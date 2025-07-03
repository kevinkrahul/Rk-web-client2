import React from "react";
import ProductList from "@/components/ProductList/productList";

const page = () => {
  return (
    <section className="justify-center bg-yellow-50/25 items-center w-full h-auto">
      <h1
        className="font-medium bg-slate-500 text-center p-3"
        style={{ fontSize: "clamp(35px, 3vw, 60px)" }}
      >
        Our Products
      </h1>
      <ProductList />
    </section>
  );
};

export default page;
