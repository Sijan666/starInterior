import React from "react";
import Container from "../Container";
import Image from "next/image";

export default function Agency() {
  return (
    <section className="bg-[#F8F8F8] lg:py-25 py-13">
      <Container>
        <div className="flex items-center justify-center gap-10 lg:gap-0 flex-col md:flex-row">
          <div className="">
            <h3 className="lg:text-[46px] text-3xl text-[#192324] font-bold lg:leading-12.5 leading-8 lg:w-120 w-70">
              A behind the scenes look at
              <span className="text-btn"> Our Agency</span>
            </h3>
            <p className="lg:text-base text-sm text-[#283132] lg:leading-6.5 leading-5 lg:w-134 w-70 pt-5 pb-10">
              Step Into the disciplined process, collaborative partnership, and
              meticulous attention to detail that transform your vision into an
              effortlessly elegant reality—long before the final reveal.
            </p>
            <div className="flex items-start lg:gap-x-5 gap-x-2 border-b-2 border-[#EAF0EC]">
              <div className="bg-[#EAF0EC] lg:w-15 lg:h-15 w-8 h-8 rounded-full relative">
                <Image
                  src={"/agencyIconOne.png"}
                  alt="One"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit lg:w-6.5"
                  width={26}
                  height={60}
                />
              </div>
              <div className="">
                <h6 className="lg:text-xl text-base text-[#192324] font-semibold leading-5.5">
                  Tailored Design Solutions
                </h6>
                <p className="lg:text-base text-sm text-[#283132] lg:leading-6.5 leading-5 lg:w-106 w-65 pb-5 pt-2.5">
                  We don't start with a style; we start with a story. Our
                  initial phase is a dedicated exploration of how you live,
                  work, and dream in your space.
                </p>
              </div>
            </div>
            <div className="flex items-start lg:gap-x-5 gap-x-2 border-b-2 border-[#EAF0EC] pt-5">
              <div className="bg-[#EAF0EC] lg:w-15 lg:h-15 w-8 h-8 rounded-full relative">
                <Image
                  src={"/agencyIconTwo.png"}
                  alt="Two"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit lg:w-6.5"
                  width={26}
                  height={60}
                />
              </div>
              <div className="">
                <h6 className="lg:text-xl text-base text-[#192324] font-semibold leading-5.5">
                  Seamless Project Management
                </h6>
                <p className="lg:text-base text-sm text-[#283132] lg:leading-6.5 leading-5 lg:w-107.5 w-65 pb-5 pt-2.5">
                  From concept to completion, we act as the conductor of a
                  complex orchestra. Our proven project management system
                  seamlessly coordinates designers, craftsmen, and vendors,
                  protecting your vision, timeline, and budget with precision.
                </p>
              </div>
            </div>
            <div className="flex items-start lg:gap-x-5 gap-x-2 pt-5 lg:pb-0 pb-5">
              <div className="bg-[#EAF0EC] lg:w-15 lg:h-15 w-8 h-8 rounded-full relative">
                <Image
                  src={"/agencyIconThr.png"}
                  alt="Thr"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit lg:w-6.5"
                  width={26}
                  height={60}
                />
              </div>
              <div className="">
                <h6 className="lg:text-xl text-base text-[#192324] font-semibold leading-5.5">
                  Client-Centered Collaboration
                </h6>
                <p className="lg:text-base text-sm text-[#283132] lg:leading-6.5 leading-5 lg:w-111.5 w-65 pt-2.5">
                  This is your story, and you are the essential author. We
                  facilitate a dynamic dialogue, valuing your input at every
                  milestone. Through presentations, samples, and walkthroughs,
                  we ensure the final design is unmistakably and authentically
                  yours.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 justify-end">
            <Image src={"/agencyOne.png"} alt="AOne" width={390} height={295} className="hidden lg:block" />
            <Image src={"/agencyTwo.png"} alt="ATwo" width={290} height={295} className="hidden lg:block" />
            <Image src={"/agencyThr.png"} alt="AThr" width={460} height={340} className="hidden lg:block" />
            <Image src={"/agencyFor.png"} alt="AFor" width={220} height={340} className="hidden lg:block" />
            <Image src={"/agencyResponsive.png"} alt="RR" width={370} height={350} className="lg:hidden" />
            
          </div>
        </div>
      </Container>
    </section>
  );
}
