import React from "react";

// components
import TopLeftText from "../atoms/TopLeftText";
import AchieveCard from "../molecules/AchieveCard";

const Achieve = () => {
  return (
    <div className="w-full h-auto border-b-[1px] border-b-gray-300">
      <div className="flex w-full">
        {/* sidebar */}
        <div className="w-[40px] flex-shrink-0 border-r-[1px] border-gray-300 box-border">
          <TopLeftText id="works-tag" textType="gray" text="05" />
        </div>
        {/* main */}
        <div className="w-[100%]">
          {/* section title box */}
          <div className="block h-auto sm:flex sm:h-[130px] border-b-[1px] border-b-gray-300">
            <div className="block border-b-[1px] py-2 border-b-gray-300 w-full sm:w-[672px] sm:h-[100%] sm:border-r-[1px] border-r-gray-300">
              <TopLeftText
                id="hero-nav"
                textType="blue"
                text='<h1 class="service-title">'
              />
              <h1
                data-aos="fade-up"
                className=" mt-3 sm:mt-5 ml-3 text-5xl sm:text-6xl font-semibold"
              >
                ACHIEVE
              </h1>
            </div>
            {/* sub title box */}
            <div className="w-full border-b-[1px] border-b-gray-300 sm:border-none">
              <TopLeftText
                id="hero-nav"
                textType="blue"
                text='<p class="service-subtitle">'
              />
              <p className="py-5  sm:pt-7 ml-3 text-base font-semibold">
                これまでにご依頼をいただいてきたお仕事です。
                <br />
                Web制作から企業のDX化まで幅広くご覧いただけます。
              </p>
            </div>
          </div>
          {/*  main contents */}
          <div className="w-[100%] h-auto sm:flex">
            <AchieveCard
              id="sample"
              number="01"
              title={
                <h1 className="text-3xl font-semibold">
                  Sample
                  <br />
                  SampleSample
                </h1>
              }
              hash={["#sample", "#sam"]}
              maintext="sadosdfklsdsdflsdljsdljsdfljsdflj"
              tech={["React", "Next.js", "MicroCMS"]}
              link="/"
            />
            <AchieveCard
              id="sample"
              number="02"
              title={
                <h1 className="text-3xl">
                  Sample
                  <br />
                  SampleSample
                </h1>
              }
              hash={["#sample", "#sam"]}
              maintext="sadosdfklsdsdflsdljsdljsdfljsdflj"
              tech={["React", "Next.js", "MicroCMS"]}
              link="/"
            />
            <AchieveCard
              id="sample"
              number="03"
              title={
                <h1 className="text-3xl">
                  Sample
                  <br />
                  SampleSample
                </h1>
              }
              hash={["#sample", "#sam"]}
              maintext="sadosdfklsdsdflsdljsdljsdfljsdflj"
              tech={["React", "Next.js", "MicroCMS"]}
              link="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achieve;
