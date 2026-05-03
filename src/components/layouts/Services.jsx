import React from "react";
import Container from "../Container";
import Image from "next/image";
import { Card } from "../Card";
import Service1 from "../../../public/services1.png";
import Service2 from "../../../public/services2.png";
import Service3 from "../../../public/services3.png";
import Service4 from "../../../public/services3.png";
import Service5 from "../../../public/services3.png";
import Service6 from "../../../public/services3.png";
import Button from "../Button";
import { FaArrowRight } from 'react-icons/fa';

const servicesCard = [
  {
    image: Service1,
    title: "Residential Interior Design",
    description:
      "We create personalized living spaces that reflect your style and functional needs.",
  },
  {
    image: Service2,
    title: "Office Interior Design",
    description:
      "Enhancing business environments with professional, functional, and aesthetically.",
  },
  {
    image: Service3,
    title: "Residential Interior Design",
    description:
      "Let’s make your restaurant stand out! Schedule a consultation for your project.",
  },
  {
    image: Service4,
    title: "Residential Interior Design",
    description:
      "We create personalized living spaces that reflect your style and functional needs.",
  },
  {
    image: Service5,
    title: "Residential Interior Design",
    description:
      "We create personalized living spaces that reflect your style and functional needs.",
  },
  {
    image: Service6,
    title: "Residential Interior Design",
    description:
      "We create personalized living spaces that reflect your style and functional needs.",
  },
];

export const Services = () => {
  return (
    <section id="">
      <div className="py-12.5">
        <Container>
          <div className="">
            <h2 className="font-bold lg:text-[46px] text-[26px] text-[#192324] pb-4">
              Innovative Design Services for{" "}
              <span className="text-[#00517a]">Every Need</span>{" "}
            </h2>
            <p className="text-base text-[#283132] ">
              At Best Interior Design, we offer a wide range of{" "}
              <span className="font-bold text-[#283132] ">
                interior design services.
              </span>{" "}
              Our expertise isn’t limited to interiors—we also handle many
              exterior design projects.
            </p>
            <p className="text-base text-[#283132]">
              Our skilled architects conduct site visits, develop detailed plans
              and 3D designs, and then begin the project to ensure we meet your
              needs.
            </p>
          </div>
          <div className="py-5  grid lg:grid-cols-3 grid-cols-1 gap-6.25">
            {servicesCard.map((service, index) => (
              <Card
                kay={index}
                image={service.image}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <div className="text-center pt-7.5">
            <Button btnText={'See All Services'} rightIcon={<FaArrowRight />}/>
          </div>
        </Container>
      </div>
    </section>
  );
};
