import React from "react";
import Container from "../Container";
import Image from "next/image";
import { Card } from "../Card";
import Service1 from '../../../public/services1.png'

export const Services = () => {
  return (
    <section id="">
      <div className="py-12.5">
        <Container>
          <div className="">
            <h2 className="font-bold text-[46px] text-[#192324]">
              Innovative Design Services for{" "}
              <span className="text-[#00517a]">Every Need</span>{" "}
            </h2>
            <p className="text-base text-[#283132] ">
              At Best Interior Design, we offer a wide range of <span className="font-bold text-[#283132] ">interior design services.</span> Our expertise isn’t limited to interiors—we also handle
              many exterior design projects.</p>
              <p className="text-base text-[#283132]">Our skilled architects conduct site
              visits, develop detailed plans and 3D designs, and then begin the
              project to ensure we meet your needs.</p>
          </div>
          <div className="py-5">
           
          </div>
        </Container>
      </div>
    </section>
  );
};
