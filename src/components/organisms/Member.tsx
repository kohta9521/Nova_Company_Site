"use client";
import React from "react";

// hooks
import useAOS from "@/hooks/useAOS";

// components
import TopLeftText from "../atoms/TopLeftText";

const Member = () => {
  useAOS();
  return (
    <div className="w-full h-auto border-b-[1px] border-gray-300">
      <div className="flex w-full">
        {/* sidebar 40px */}
        <div className="w-[40px] flex-shrink-0 border-r-[1px] border-r-gray-300 box-border">
          <TopLeftText id="member" textType="gray" text="06" />
        </div>
        {/* main box */}
        <div className="w-[100%]">
          {/* section title box */}
          <div className="block h-auto sm:flex sm:h-[130px] border-b-[1px] border-b-gray-300">
            <div className="block py-2 border-b-gray-300 w-full sm:w-[672px] sm:h-[100%] sm:border-r-[1px] border-r-gray-300">
              <TopLeftText
                id="hero-nav"
                textType="blue"
                text='<h1 class="member-title">'
              />
              <h1
                data-aos="fade-up"
                className=" mt-3 sm:mt-5 ml-3 text-5xl sm:text-6xl font-semibold"
              >
                MEMBER
              </h1>
            </div>
            {/* sub title box */}
            <div className="w-full border-b-[1px] border-b-gray-300 sm:border-none">
              <TopLeftText
                id="hero-nav"
                textType="blue"
                text='<p class="member-subtitle">'
              />
              <p className="py-5  sm:pt-7 ml-3 text-base font-semibold">
                私たちについてのご紹介です。
                <br />
                それぞれの強みやこれまでの活動をご覧ください。
              </p>
            </div>
          </div>
          {/* main contents */}
          <div className="w-full">
            <h1>kohta kochi</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
