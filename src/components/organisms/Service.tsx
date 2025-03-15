"use client";
import React from "react";

// hooks
import useAOS from "@/hooks/useAOS";

// compoentns
import TopLeftText from "../atoms/TopLeftText";

const Service = () => {
  useAOS();
  return (
    <div className="w-full h-auto border-b-[1px] border-b-gray-300">
      <div className="flex w-full">
        {/* side box 40px */}
        <div className="w-[40px] flex-shrink-0 border-r-[1px] border-r-gray-300 box-border">
          <TopLeftText id="service" textType="gray" text="03" />
        </div>
        {/* main box */}
        <div className="w-[100%]">
          <div className="w-full h-[100px] sm:h-[130px] border-b-[1px] border-b-gray-300">
            <TopLeftText
              id="hero-nav"
              textType="blue"
              text='<h1 class="service-title">'
            />
            <h1
              data-aos="fade-up"
              className="mt-3 sm:mt-5 ml-3 text-5xl sm:text-6xl font-semibold"
            >
              SERVICES
            </h1>
          </div>
          {/* Service Card */}
          <div className="h-[500px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Service;
