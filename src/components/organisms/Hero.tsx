import React from "react";

// next
import Image from "next/image";

// components
import TopLeftText from "../atoms/TopLeftText";
import ListItem from "../atoms/ListItem";

// components

const Hero = () => {
  return (
    <div className="w-full h-screen border-b-[0.3px] border-b-gray-300 flex">
      {/* left box */}
      <div className="w-[40px] border-r-[0.3px] border-r-gray-300">
        <TopLeftText id="hero" textType="gray" text="01" />
      </div>
      {/* nav box pc */}
      <div className="hidden sm:block sm:w-[200px] sm:border-r-[0.3px] sm:border-r-gray-300">
        <TopLeftText id="hero-nav" textType="blue" text="<nav>" />
        <div className="mt-16 sm:mt-24">
          <ListItem id="hero-about" link="/" size="small" text="About" />
          <ListItem id="hero-about" link="/" size="small" text="Services" />
          <ListItem id="hero-about" link="/" size="small" text="Works" />
          <ListItem id="hero-about" link="/" size="small" text="Company" />
          <ListItem id="hero-about" link="/" size="small" text="Contact" />
        </div>
      </div>
      {/* main box */}
      <div className="w-[calc(screen - 40px)] sm:w-full">
        {/* nav box mobile */}
        <div className="w-full h-[370px] border-b-[0.3px] border-b-gray-300 sm:w-[calc(screen - 240px)]">
          <TopLeftText
            id="hero-nav"
            textType="blue"
            text='<h1 class="top-message">'
          />
          <h1 className="mt-16 ml-2 text-5xl leading-14 font-semibold sm:mt-20 sm:ml-5 sm:text-7xl sm:leading-24">
            <span className="text-[var(--main-red)]">バックグランド</span>
            に縛られず
            <br />
            全ての人に<span className="text-[var(--main-red)]">価値</span>
            を提供する
          </h1>
        </div>
        <div className="block w-full h-[150px]  border-b-[0.3px] border-b-gray-300 md:hidden">
          <TopLeftText id="hero-nav" textType="blue" text="<nav>" />
          <div className="flex mt-5">
            <div className="w-auto mr-6">
              <ListItem id="hero-about" link="/" size="small" text="About" />
              <ListItem id="hero-about" link="/" size="small" text="Services" />
              <ListItem id="hero-about" link="/" size="small" text="Works" />
            </div>
            <div className="w-auto">
              <ListItem id="hero-about" link="/" size="small" text="Company" />
              <ListItem id="hero-about" link="/" size="small" text="Contact" />
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="w-full h-full">
          <Image
            className="w-full h-auto"
            src="/images/img-04.webp"
            width={600}
            height={1000}
            quality={100}
            alt="hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
