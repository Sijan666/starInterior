import React from "react";
import Container from "../Container";

export default function Banner() {
  return (
    <>
      <section id="banner">
        <div className="bg-[url('/bannerImg.png')] py-84.25 bg-center bg-cover bg-no-repeat">
          <Container>
            <div className="lg:w-233.75">
              <h3 className="font-bold text-[25px] lg:text-[35px] text-white">
                Best Interior Design Company in Bangladesh That Transforms
                Spaces into Experiences
              </h3>
              <p className="pt-7.5 text-white text-sm lg:text-[17px] font-bold">
                We at Best Interior Design Company offer professional interior
                design services across Bangladesh, backed by over 10 years of
                experience and 500+ completed projects.
              </p>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}
