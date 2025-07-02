import CategorySectionDemo from "@/components/sectionComponents/Category";

export default function Home() {
  return (
    <div className="bg-yellow-50/25">
      display
      <div className="mt-[30vw]">xsds</div>
      <section className="my-[40vw] bg-rad-bag pb-10 items-center w-full max-md:pb-[10vw]">
        <div>
          <h1
            className="text-center font-medium  pt-2 md:p-3 max-sm:mt-6"
            style={{ fontSize: "clamp(35px, 3vw, 45px)" }}
          >
            Our Product Options
          </h1>
        </div>
        <div className=" relative z-0">
          <CategorySectionDemo />
        </div>
      </section>
      dfsdfs
    </div>
  );
}
