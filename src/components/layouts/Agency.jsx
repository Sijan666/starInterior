import React from "react";
import Container from "../Container";
import Image from "next/image";
import agencyIconOne from "../../../public/agencyIconOne.png";
import agencyIconTwo from "../../../public/agencyIconTwo.png";
import agencyIconThr from "../../../public/agencyIconThr.png";
import agencyOne from "../../../public/agencyOne.png";
import agencyTwo from "../../../public/agencyTwo.png";
import agencyThr from "../../../public/agencyThr.png";
import agencyFor from "../../../public/agencyFor.png";

export default function Agency() {
  return (
    <section className="bg-[#F8F8F8] py-25">
      <Container>
        <div className="flex items-center">
          <div className="">
            <h3 className="text-[46px] text-[#192324] font-bold leading-12.5 w-120">
              A behind the scenes look at
              <span className="text-btn"> Our Agency</span>
            </h3>
            <p className="text-base text-[#283132] leading-6.5 w-134 pt-5 pb-10">
              Step Into the disciplined process, collaborative partnership, and
              meticulous attention to detail that transform your vision into an
              effortlessly elegant reality—long before the final reveal.
            </p>
            <div className="flex items-start gap-x-5 border-b-2 border-[#EAF0EC]">
              <div className="bg-[#EAF0EC] w-15 h-15 rounded-full relative">
                <Image
                  src={agencyIconOne}
                  alt="One"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  width={26}
                  height={60}
                />
              </div>
              <div className="">
                <h6 className="text-xl text-[#192324] font-semibold leading-5.5">
                  Tailored Design Solutions
                </h6>
                <p className="text-base text-[#283132] leading-6.5 w-106 pb-5 pt-2.5">
                  We don't start with a style; we start with a story. Our
                  initial phase is a dedicated exploration of how you live,
                  work, and dream in your space.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-x-5 border-b-2 border-[#EAF0EC]  pt-5">
              <div className="bg-[#EAF0EC] w-15 h-15 rounded-full relative">
                <Image
                  src={agencyIconTwo}
                  alt="Two"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  width={26}
                  height={60}
                />
              </div>
              <div className="">
                <h6 className="text-xl text-[#192324] font-semibold leading-5.5">
                  Seamless Project Management
                </h6>
                <p className="text-base text-[#283132] leading-6.5 w-107.5 pb-5 pt-2.5">
                  From concept to completion, we act as the conductor of a
                  complex orchestra. Our proven project management system
                  seamlessly coordinates designers, craftsmen, and vendors,
                  protecting your vision, timeline, and budget with precision.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-x-5 pt-5">
              <div className="bg-[#EAF0EC] w-15 h-15 rounded-full relative">
                <Image
                  src={agencyIconThr}
                  alt="Thr"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  width={26}
                  height={60}
                />
              </div>
              <div className="">
                <h6 className="text-xl text-[#192324] font-semibold leading-5.5">
                  Client-Centered Collaboration
                </h6>
                <p className="text-base text-[#283132] leading-6.5 w-111.25 pt-2.5">
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
            <Image src={agencyOne} alt="AOne" width={390} height={295} />
            <Image src={agencyTwo} alt="ATwo" width={290} height={295} />
            <Image src={agencyThr} alt="AThr" width={460} height={340} />
            <Image src={agencyFor} alt="AFor" width={220} height={340} />
          </div>
        </div>
      </Container>
    </section>
  );
}
