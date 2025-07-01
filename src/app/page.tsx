import FeaturesSectionDemo from "@/components/sectionComponents/Category" 


export default function Home() {
  
  return(
    <div>
      dsa
      <section className="my-[40vw] items-center w-full max-md:pb-[10vw]">
      <div>
        <h1 className="text-center font-medium  pt-2 md:p-3 max-sm:mt-6" style={{ fontSize: "clamp(35px, 3vw, 45px)" }}>
        Our Product Options
        </h1>
      </div>
        <div className=" relative z-0">
          <FeaturesSectionDemo />
        </div>
      </section>
      dfsdfs
    </div>
  )
}