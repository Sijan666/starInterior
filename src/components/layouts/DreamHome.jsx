"use client";

import React, { useState, useEffect } from "react";
import Container from "../Container";
import Image from "next/image";
import { Field, FieldLabel } from "../ui/field";
import { Progress } from "../ui/progress";

export default function DreamHome() {
  const [percents, setPercents] = useState({
    planning: 0,
    design: 0,
    furniture: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setPercents({
        planning: 95,
        design: 90,
        furniture: 85,
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="lg:py-25 py-13 bg-none lg:bg-[url('/bgBackground.png')] bg-top bg-contain bg-no-repeat">
      <Container>
        <div className="flex flex-col md:flex-row items-start lg:justify-between justify-center gap-10 lg:gap-0">
          <div className="">
            <h3 className="lg:text-[46px] text-3xl text-[#192324] font-bold lg:leading-12.5 leading-8 lg:w-120 w-70">
              Skills that shape your
              <span className="text-btn"> Dream Home</span>
            </h3>
            <p className="lg:text-base text-sm text-[#283132] lg:leading-6.5 leading-5 lg:w-156.5 w-70 pt-5 pb-10">
              A dream home is not found, it is forged—through a unique alchemy
              of vision and expertise. Beyond selecting colors and furnishings,
              we apply a core set of disciplined skills to architect your ideal
              living experience. This is the meticulous craftsmanship that
              transforms inspiration into a home that is authentically yours,
              impeccably detailed, and designed for the way you live.
            </p>
            <div className="">
              {/* Bar 1 */}
              <Field className="w-full max-w-125">
                <FieldLabel className="flex justify-between mb-2">
                  <span className="text-base text-[#192324]">
                    Space Planning And Layout
                  </span>
                  <span className="text-base text-[#192324]">
                    {percents.planning}%
                  </span>
                </FieldLabel>
                <Progress value={percents.planning} />
              </Field>
              {/* Bar 2 */}
              <div className="lg:py-10 py-5">
                <Field className="w-full max-w-125">
                  <FieldLabel className="flex justify-between mb-2">
                    <span className="text-base text-[#192324]">
                      Project Challenges And Solutions
                    </span>
                    <span className="text-base text-[#192324]">
                      {percents.design}%
                    </span>
                  </FieldLabel>
                  <Progress value={percents.design} />
                </Field>
              </div>
              {/* Bar 3 */}
              <Field className="w-full max-w-125">
                <FieldLabel className="flex justify-between mb-2">
                  <span className="text-base text-[#192324]">
                    Sustainability And Eco-Friendly Features
                  </span>
                  <span className="text-base text-[#192324]">
                    {percents.furniture}%
                  </span>
                </FieldLabel>
                <Progress value={percents.furniture} />
              </Field>
            </div>
          </div>

          {/* Right Side */}
          <div className="mt-5 lg:mt-0">
            <Image
              src="/dream.png"
              alt="Dream"
              width={650}
              height={600}
              className="lg:block hidden"
            />
            <Image
              src="/dreamResponsive.png"
              alt="Dream"
              width={370}
              height={345}
              className="lg:hidden"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
