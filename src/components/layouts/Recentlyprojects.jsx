"use client";

import React from "react";
import Container from "../Container";
import { CiVideoOn } from "react-icons/ci";
import { IoPlayForwardOutline } from "react-icons/io5";
import { useState } from "react";
import Button from "../Button";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Recentlyprojects() {
  const projects = [
    {
      id: 1,
      title: "Modern Home Interior Project - Agargaon",
      videoUrl: "https://www.youtube.com/embed/HEMlIn6MDD8?si=wwuVd6-7ADygSxTK",
      thumbnail:
        "https://i.ytimg.com/an_webp/HEMlIn6MDD8/mqdefault_6s.webp?du=3000&sqp=COSZ3s8G&rs=AOn4CLAbXFNf3PSoPpiRNmdafh9dlSkdrQ",
    },
    {
      id: 2,
      title: "Transforming Challenges Into Character",
      videoUrl: "https://www.youtube.com/embed/VEU56oUA3VQ?si=rJ0GZx4gFvFN_rUr",
      thumbnail: "https://i.ytimg.com/an_webp/VEU56oUA3VQ/mqdefault_6s.webp?du=3000&sqp=CPTD3s8G&rs=AOn4CLCD8xiK3EhyLBeZ_1qBEoZslKjTQg",
    },
    {
      id: 3,
      title: "1200 SQFT HOME MAKE OVER",
      videoUrl: "https://www.youtube.com/embed/sUetg-4U8gY",
      thumbnail: "https://img.youtube.com/vi/sUetg-4U8gY/mqdefault.jpg",
    },
    {
      id: 4,
      title: "100% SATISFIED CLIENT",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
    },
    {
      id: 5,
      title: "1800 SQFT HOME MAKE OVER",
      videoUrl:
        "https://www.youtube.com/embed/watch?v=dKIA-RYxo40&list=RDMMdKIA-RYxo40&start_radio=1",
      thumbnail:
        "https://i.ytimg.com/vi/dKIA-RYxo40/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALMBYoCDAgAEAEYLSBWKH8wDw==&rs=AOn4CLBFybDMOULG3WlWMonFWLBcWwLfkQ",
    },
    {
      id: 6,
      title: "MODERN OFFICE INTERIOR DESIGN",
      videoUrl:
        "https://www.youtube.com/embed/watch?v=kx5kZknqQPY&list=RDkx5kZknqQPY&start_radio=1",
      thumbnail:
        "https://i.ytimg.com/vi/kx5kZknqQPY/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCq7oZRwC0yl7AfgKZHYX_0Abu1kQ",
    },
    {
      id: 7,
      title: "PERFECT BALANCE OF AESTHETICS & FU",
      videoUrl: "https://www.youtube.com/embed/watch?v=oz3onQGlVvU",
      thumbnail:
        "https://i.ytimg.com/vi/oz3onQGlVvU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB57l7ClEiQqEkUxAtKZImDMkaVmg",
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(projects[0].videoUrl);

  return (
    <section className="bg-[#F8F8F8] py-12.5 lg:py-25">
      <Container>
        <h3 className="text-jprimary text-[30px] lg:text-[46px] font-bold ">
          Our Recently Completed <span className="text-btn">Projects</span>
        </h3>
        <p className="text-[#283132] text-base font-bold leading-[27.2px] my-5 lg:w-330">
          From concept to completion, our interior design projects demonstrate
          thoughtful planning, precise execution, and long-lasting
          quality—reflecting the standards of the best interior design company
          in Bangladesh while delivering stylish, functional, and innovative
          interior design solutions for every space.
        </p>
        {/* Providing Each Project Review */}
        <div className="flex items-start gap-x-5 group border-b border-[#EAF0EC] py-5">
          <div className="relative h-14 w-14  flex items-center justify-center p-4.25 bg-[#EAF0EC] rounded-full overflow-hidden transition-colors duration-500 group-hover:text-white shrink-0">
            <span className="absolute inset-0 z-0 bg-jprimary scale-0 rounded-full transition-transform duration-500 ease-in-out group-hover:scale-150 origin-center"></span>
            <div className="relative z-10 flex items-center justify-center">
              <CiVideoOn size={24} />
            </div>
          </div>
          <div className="">
            <h4 className="text-jprimary text-xl font-bold">
              Providing Each Project Review
            </h4>
            <p className="text-[#283132] text-base ">
              We provide a comprehensive review of each completed project,
              highlighting our design approach, functionality, and quality
              craftsmanship.
            </p>
          </div>
        </div>
        {/* Every Inch Covered */}
        <div className="flex items-start gap-x-5 group my-5 border-b border-[#EAF0EC] pb-5">
          <div className="relative h-14 w-14  flex items-center justify-center p-4.25 bg-[#EAF0EC] rounded-full overflow-hidden transition-colors duration-500 group-hover:text-white shrink-0">
            <span className="absolute inset-0 z-0 bg-jprimary scale-0 rounded-full transition-transform duration-500 ease-in-out group-hover:scale-150 origin-center"></span>
            <div className="relative z-10  flex items-center justify-center">
              <IoPlayForwardOutline size={24} />
            </div>
          </div>
          <div>
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
        {/* Video Section Area */}
        <div className="mt-10">
          <h4 className="text-black text-base font-bold uppercase mb-3">
            PROJECT VIDEOS
          </h4>
          <div className="flex flex-col lg:flex-row border border-gray-200 overflow-hidden rounded-sm">
            {/* Left: List Container */}
            <div className="w-full lg:w-100 bg-white border-r border-gray-200">
              <div className="max-h-112.5 overflow-y-scroll custom-scrollbar bg-white">
                {projects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => setSelectedVideo(project.videoUrl)}
                    className={`w-full flex items-center gap-3 p-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-all text-left ${
                      selectedVideo === project.videoUrl ? "bg-gray-100" : ""
                    }`}
                  >
                    <div className="w-24 h-16 bg-gray-200 shrink-0 relative">
                      <img
                        src={project.thumbnail}
                        alt="thumb"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <span className="text-white text-xs">▶</span>
                      </div>
                    </div>
                    <p className="text-[#283132] text-sm font-medium leading-tight line-clamp-2">
                      {project.title}
                    </p>
                  </button>
                ))}
              </div>
            </div>
            {/* Right: Video Player Section */}
            <div className="mt-5 lg:mt-0 bg-black aspect-video lg:h-112.5">
              <iframe
                key={selectedVideo}
                width="100%"
                height="100%"
                src={selectedVideo}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="border-0"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mt-5 text-center">
          <Button leftIcon={<FaArrowRightLong />} btnText={"More Videos"} />
        </div>
      </Container>
    </section>
  );
}
