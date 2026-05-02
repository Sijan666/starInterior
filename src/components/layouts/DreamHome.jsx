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
    <section className="py-25 bg-[url('/bgBackground.png')] bg-top bg-contain bg-no-repeat">
      <Container>
        <div className="flex items-start justify-between">
          <div className="">
            <h3 className="text-[46px] text-[#192324] font-bold leading-12.5 w-120">
              Skills that shape your
              <span className="text-btn"> Dream Home</span>
            </h3>
            <p className="text-base text-[#283132] leading-6.5 w-156.5 pt-5 pb-10">
              A dream home is not found, it is forged—through a unique alchemy
              of vision and expertise. Beyond selecting colors and furnishings,
              we apply a core set of disciplined skills to architect your ideal
              living experience. This is the meticulous craftsmanship that
              transforms inspiration into a home that is authentically yours,
              impeccably detailed, and designed for the way you live.
            </p>

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
            <div className="py-10">
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

          {/* Right Side */}
          <div className="">
            <Image src="/dream.png" alt="Dream" width={650} height={600} />
          </div>
        </div>
      </Container>
    </section>
  );
}
