import React from "react";
import Container from "../Container";
import { FaCircleCheck } from "react-icons/fa6";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

const Vision = () => {
  return (
    <>
      <section>
        <div className="bg-[url('/visionBanner.png')] py-28 bg-center bg-no-repeat w-full">
          <Container>
            <div className="flex items-center justify-between gap-12 ">
              <div className="w-full relative min-h-112.5">
                <div className="w-[85%]">
                  <img
                    src="/visionPic_1.png"
                    alt="visionPic_1.png"
                    className="w-122.5 h-93 "
                  />
                </div>
                <div className="absolute top-81 left-75 z-20 w-[60%]">
                  <img
                    src="/visionPic_2.png"
                    alt="visionPic_2.png"
                    className="w-75 h-57"
                  />
                </div>
                <div className="absolute top-[75%] left-50 -translate-x-1/2 -translate-y-1/2 z-30 bg-[#00517a] text-white w-38 h-38 rounded-full flex flex-col items-center justify-center border-6 border-white">
                  <span className="text-3xl font-bold">0+</span>
                  <span className="text-[16px] text-center px-8 font-medium">
                    Years of Experience
                  </span>
                </div>
              </div>
              <div className="w-full min-h-112.5">
                <h2 className="text-4xl font-bold text-[#001d35] leading-[1.2] mb-6">
                  Our Passion for <br /> Design
                  <span className="text-[#005177]">
                    Bringing Your Vision <br />
                    to Life
                  </span>
                </h2>
                <p className="text-gray-600 text-sm leading-5 mb-8 w-170">
                  For over 10 years, we have completed more than 500 interior
                  design projects across{" "}
                  <span className="font-bold">Bangladesh</span> , earning our
                  reputation as the nation’s{" "}
                  <span className="font-bold">
                    Best Interior Design Company
                  </span>
                  . Our journey has been full of exciting challenges, as each
                  project carries a unique vibe. We carefully understand our
                  clients’ needs, conduct detailed site visits, plan
                  meticulously, and create 3D designs before starting the actual
                  project to ensure everything is executed perfectly.
                </p>
                <div className="flex items-center gap-30.75">
                  <div className="">
                    <div className="flex items-center gap-3 font-bold text-[#001d35] text-xs mb-[11.51px]">
                      <FaCircleCheck size={20} className="text-[#005177]" />
                      Creative Expertise
                    </div>
                    <div className="flex items-center gap-3 font-bold text-[#001d35] text-xs mb-10">
                      <FaCircleCheck size={20} className="text-[#005177]" />
                      Client-centered Approach
                    </div>
                    <Button
                      btnText={"More About Us"}
                      leftIcon={<FaArrowRight />}
                    />
                  </div>
                  <div className="border border-[#EAF0EC] py-25"></div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Vision;
