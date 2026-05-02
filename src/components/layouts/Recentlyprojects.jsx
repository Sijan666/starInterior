import React from "react";
import Container from "../Container";
import { CiVideoOn } from "react-icons/ci";
import { IoPlayForwardOutline } from "react-icons/io5";

export default function Recentlyprojects() {
  return (
    <section className="bg-[#F8F8F8] py-[100px]">
      <Container>
        <h3 className="text-jprimary text-[46px] font-bold w-[550px] leading-[50.6px]">
          Our Recently Completed <span className="text-btn">Projects</span>
        </h3>
        <p className="text-[#283132] text-base font-bold leading-[27.2px] my-5 w-330">
          From concept to completion, our interior design projects demonstrate
          thoughtful planning, precise execution, and long-lasting
          quality—reflecting the standards of the best interior design company
          in Bangladesh while delivering stylish, functional, and innovative
          interior design solutions for every space.
        </p>
        {/* Providing Each Project Review  */}
        <div className="flex items-center gap-x-5 group border-b border-[#EAF0EC] pb-5">
          <div className="relative p-[17px] bg-[#EAF0EC] rounded-full overflow-hidden transition-colors duration-500 group-hover:text-white">
            <span className="absolute inset-0 z-0 bg-jprimary scale-0 rounded-full transition-transform duration-500 ease-in-out group-hover:scale-150 origin-center"></span>
            <div className="relative z-10">
              <CiVideoOn size={24} />
            </div>
          </div>
          <div className="">
            <h4 className="text-jprimary text-xl font-bold">
              Providing Each Project Review
            </h4>
            <p className="text-[#283132] text-base">
              We provide a comprehensive review of each completed project,
              highlighting our design approach, functionality, and quality
              craftsmanship.
            </p>
          </div>
        </div>
        {/* Every Inch Covered  */}
        <div className="flex items-center gap-x-5 group my-5 border-b border-[#EAF0EC] pb-5">
          <div className="relative p-[17px] bg-[#EAF0EC] rounded-full overflow-hidden transition-colors duration-500 group-hover:text-white">
            <span className="absolute inset-0 z-0 bg-jprimary scale-0 rounded-full transition-transform duration-500 ease-in-out group-hover:scale-150 origin-center"></span>
            <div className="relative z-10">
              <IoPlayForwardOutline size={24} />
            </div>
          </div>
          <div className="">
            <h4 className="text-jprimary text-xl font-bold">
              Every Inch Covered
            </h4>
            <p className="text-[#283132] text-base">
              At Best Interior Design, we ensure every corner of your space is
              thoughtfully designed and meticulously executed, leaving no detail
              overlooked.
            </p>
          </div>
        </div>
 
      </Container>
    </section>
  );
}
