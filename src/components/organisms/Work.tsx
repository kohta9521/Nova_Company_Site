"use client";
import React from "react";

// next
import Image from "next/image";

// hooks
import useAOS from "@/hooks/useAOS";

// components
import TopLeftText from "../atoms/TopLeftText";
import ListBlockItem from "../atoms/ListBlockItem";

const Works = () => {
  useAOS();
  return (
    <div className="w-full border-b-[1px] border-b-gray-300">
      <div className="flex w-full">
        {/* sidebar box */}
        <div className="w-[40px] flex-shrink-0 border-r-[1px] border-gray-300 box-border">
          <TopLeftText id="works-tag" textType="gray" text="04" />
        </div>
        {/* main box */}
        <div className="w-[100%]">
          {/* section title box */}
          <div className="w-full h-[100px] sm:h-[130px] border-b-[1px] border-b-gray-300">
            <div className="sm:block sm:w-[1046px] sm:h-[100%] sm:border-r-[1px] border-r-gray-300">
              <TopLeftText
                id="hero-nav"
                textType="blue"
                text='<h1 class="service-title">'
              />
              <h1
                data-aos="fade-up"
                className="mt-3 sm:mt-5 ml-3 text-5xl sm:text-6xl font-semibold"
              >
                WORKS
              </h1>
            </div>
          </div>
          {/*  main contents */}
          <div className="w-[100%] h-auto sm:flex">
            <div className="w-full block sm:flex">
              {/* main image */}
              <div className="sm:w-[1046px] sm:h-auto sm:border-r-[1px] border-r-gray-300">
                {/* <TopLeftText
                  id="hero-nav"
                  textType="blue"
                  text='<ul class="service-card">'
                /> */}
                <Image
                  className="w-full h-full"
                  src="/images/bg.png"
                  width={600}
                  height={600}
                  layout="responsive"
                  alt="works hero img"
                />
              </div>
              {/* main text box */}
              <div className="h-auto pr-5">
                <TopLeftText
                  id="works-nav"
                  textType="blue"
                  text='<div class="works-textbox">'
                />
                <h1 className="mt-12 mb-8 sm:mt-16 sm:mb-10 ml-5 text-2xl sm:text-5xl font-semibold leading-relaxed">
                  <span className="text-[var(--main-red)]">学生</span>
                  という立場をフル活用し
                  <br />
                  固定概念に囚われない提案と
                  <br />
                  圧倒的な
                  <span className="text-[var(--main-red)]">稼働時間</span>・
                  <span className="text-[var(--main-red)]">実装速度</span>を
                  <br />
                  実現しています。
                </h1>
                <p className="mb-3 sm:mb-8 ml-5 text-medium font-semibold leading-7">
                  実務経験を積んだ様々な知見を持つエンジニアがクライアント様のご要望に最大限寄り添った提案をさせていただきます。
                  <br />
                  エンジニアリングの業務だけにとどまらずDX化のご提案やデザインの作成・動画の作成まで幅広く対応をさせていただきます。
                  <br />
                  またサービスも様々なプランをご用意しておりますので是非お気軽にお問い合わせください。
                </p>
                <div className="ml-5 mb-10">
                  <ListBlockItem
                    id="philosophy-btn"
                    link="/"
                    text="NOVAについて知る"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
