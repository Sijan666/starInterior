"use client";

import React, { useState } from "react";
import Container from "../Container";
import { BiDownArrow } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoArrowUpOutline } from "react-icons/io5";
import { GoArrowUp } from "react-icons/go";
import { BsChevronDown } from "react-icons/bs";

const faqs = [
  {
    id: 1,
    question: "Do you provide interior design services in my city?",
    answer:
      "Yes, we provide interior design services all across Bangladesh — from north to south, east to west, in both rural and urban areas — tailored to your specific needs.",
  },
  {
    id: 2,
    question: "How much will my interior design project cost?",
    answer:
      "The overall interior design cost mostly depends on your requirements. It varies based on your space, design style, materials, and deadline. We provide a tailored quotation to ensure the best balance of quality, functionality, and budget. For detailed pricing insights, you can visit our interior design cost blog or contact us directly.",
  },
  {
    id: 3,
    question: "How long will my interior design project take?",
    answer: (
      <div className="space-y-5">
        <p>
          The timeline depends on your project size, design complexity, and
          material availability. Most projects are completed within a planned
          timeframe while ensuring quality and smooth execution.
        </p>

        <p className="font-semibold">
          However, to give you an idea, we are providing some estimated
          timeframes.
        </p>

        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>500 – 1000 SQFT:</strong> 25 – 30 Days
          </li>
          <li>
            <strong>1000 – 2500 SQFT:</strong> 30 – 45 Days
          </li>
          <li>
            <strong>2500 – 5000 SQFT:</strong> 45 – 60 Days
          </li>
          <li>
            <strong>5000 – 10000 SQFT:</strong> 60 – 90 Days
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 4,
    question: "What materials will be used in my interior design project?",
    answer:
      "The materials used depend on your design style, budget, and project requirements. We carefully select high-quality wood, board, glass, metal, fabrics, tiles, and premium finishes to ensure durability, functionality, and long-lasting beauty.",
  },
  {
    id: 5,
    question: "What is your interior design process from start to handover?",
    answer: (
      <div className="space-y-5">
        <p>
          Our process is structured to ensure a smooth and client-focused
          experience:
        </p>

        <p>
          <strong>Consultation & Requirement Gathering</strong> – Understanding
          your needs, style, and budget.
        </p>

        <p>
          <strong>Concept & Design Development</strong> – Creating layouts,
          color schemes, and 3D visuals.
        </p>

        <p>
          <strong>Material Selection & Planning</strong> – Choosing high-quality
          materials and finalizing timelines.
        </p>

        <p>
          <strong>Execution & Supervision</strong> – Managing construction,
          furnishing, and installation.
        </p>

        <p>
          <strong>Final Review & Handover</strong> – Ensuring every detail is
          perfect before delivering your ready-to-use space.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    question: "Do you provide 3D designs before starting work?",
    answer:
      "Yes! After finalizing the deal, we provide free, realistic 3D designs and visualizations so you can see your space before execution. This allows you to make informed decisions about layout, colors, and materials, ensuring the final result matches your vision.",
  },
  {
    id: 7,
    question: "Can I make changes during the project?",
    answer:
      "Yes! We understand ideas can evolve. You can make changes during the project, and we’ll guide you on how they may affect the timeline and cost to ensure smooth execution and the best results.",
  },
  {
    id: 8,
    question: "Who will handle or manage execution on site?",
    answer:
      "Your project will be managed by our experienced on-site project manager and certified electrician, who supervise construction, furniture installation, electrical work, and all finishing touches. They ensure quality, safety, and timely execution from start to handover.",
  },
  {
    id: 9,
    question: "Do you provide after-service support nationwide?",
    answer:
      "Yes! We offer 3 years of free after-service support across Bangladesh, assisting with any adjustments, maintenance, or concerns even after your project is completed. Your satisfaction is our top priority.",
  },
  {
    id: 10,
    question: "Why should I choose Best Interior Design over other companies?",
    answer:
      "Unlike other companies, we combine creativity, precision, and full-service management to transform your space into a perfect blend of style and functionality. With customized designs, top-quality materials, and 10+ years of experience, we don’t just decorate — we craft living and working spaces that truly reflect you.",
  },
];

export default function Faq() {
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-10 bg-white">
      <Container>
        <div className="">
          {/* Title */}
          <h2 className="text-[26px] md:text-4xl lg:text-[46px] font-bold text- text-btn mb-5 ">
            Frequently Asked <span className="text-jprimary">Questions</span>
          </h2>

          {/* FAQ List */}
          <div className="space-y-2.5">
            {faqs.map((faq) => (
              <div key={faq.id} className="">
                {/* Question Button */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 md:px-7.5 py-4 flex justify-between items-center text-left group bg-[#F7F9FB] overflow-hidden"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-bold text-black leading-6">
                      {faq.id}.{faq.question}
                    </span>
                  </div>

                  <span className="text-2xl text-black transition-all duration-300">
                    {openId === faq.id ? <GoArrowUp /> : <BsChevronDown />}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out text-justify ${
                    openId === faq.id
                      ? "max-h-500 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 md:px-17 pt-7.5 pb-10 text-[#283132] leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
