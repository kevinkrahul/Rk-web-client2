import CategorySectionDemo from "@/components/sectionComponents/Category";

export default function Home() {
  return (
    <div className="bg-white">
      <div className=" bg-lin-bag min-h-screen flex justify-center items-center text-2xl">Home</div>
      <div className="flex min-h-96 items-center text-2xl justify-center"> Why us </div>
      <section className=" bg-lin-bag pb-10 items-center w-full max-md:pb-[10vw]">
        <div>
          <h1
            className="text-center text-orange-900 font-medium  pt-2 md:p-3 max-sm:mt-6"
            style={{ fontSize: "clamp(35px, 3vw, 45px)" }}
          >
            Our Product Options
          </h1>
        </div>
        <div className=" relative z-0">
          <CategorySectionDemo />
        </div>
      </section>
      <div className="flex min-h-96 items-center text-2xl justify-center">Clients testimonial</div>
      <div className="flex min-h-96 bg-orange-900/10 items-center text-2xl justify-center"> Footer </div>
    </div>
  );
}
