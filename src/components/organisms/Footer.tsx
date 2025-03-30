import React from "react";

// components
import TopLeftText from "../atoms/TopLeftText";
import Logo from "../atoms/Logo";

const Footer = () => {
  return (
    <div className="w-full h-[400px]  flex">
      {/* left box */}
      <div className="w-[40px] border-r-[1px] border-r-gray-300 box-border">
        <TopLeftText id="footer" textType="gray" text="01" />
      </div>
      {/* logo info box */}
      <div className="h-auto w-[400px] border-r-[1px] border-r-gray-300">
        <div className="w-full h-[50px]">
          <TopLeftText
            id="hero-nav"
            textType="blue"
            text='<footer class="main-footer">'
          />
          <div className="block py-3 pl-3">
            <Logo id="home" href="/" size="large" />
            <div className="mt-20 ml-2">
              <p className="">Site: 東京都港区</p>
              <p>Email: nova.tech@gmai.com</p>
            </div>
          </div>
        </div>
        <div className="w-full bg-[var(--main-red)]"></div>
      </div>
      {/* page list box */}
      <div className="h-auto sm:w-[calc(100%-440px)]">
        <TopLeftText
          id="hero-nav"
          textType="blue"
          text='<div class="list-item-box">'
        />
      </div>
    </div>
  );
};

export default Footer;
