import React from "react";
import { CardDemo } from "@/components/ui/card";
import img from "../../../public/image.png"
import Card from "@/components/ui/Newcard";
import GradientText from "@/components/ui/shinyext";


const page = () => {
  return (
    <section className="justify-center bg-yellow-50/25 items-center w-full h-auto">
      <h1
        className="font-medium bg-slate-500 text-center p-3"
        style={{ fontSize: "clamp(35px, 3vw, 60px)" }}
      >
        Our Products
      </h1>
      <div className="">
        <h1
          className="flex flex-col justify-center items-center font-medium p-1"
          style={{ fontSize: "clamp(20px, 2vw, 25px)" }}
        >
          <GradientText colors={["#B82800","#f83600","#f9d423", "#DBB706","#f83600","#B82800"]} animationSpeed={4} >Gas Burner</GradientText>
        </h1>
        <div className="flex justify-center">
          <div className="grid h-auto w-[90%] lg:w-[80%] md:grid-cols-3 lg:grid-cols-5 p-4 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>

    </section>
  );
};

export default page;
