import React from "react";

// component
import Logo from "../atoms/Logo";
import ListItem from "../atoms/ListItem";

const Header = () => {
  return (
    <div className="w-full h-20 py-6  border-b-[0.3px] border-b-gray-300">
      <div className="w-11/12 mx-auto flex items-center justify-between">
        <Logo id="home" href="/" size="medium" />
        <div className="hidden md:w-auto  md:items-center md:justify-between">
          <ListItem id="about" link="/about" size="small" text="About" />
          <ListItem id="about" link="/about" size="small" text="About" />
          <ListItem id="about" link="/about" size="small" text="About" />
          <ListItem id="about" link="/about" size="small" text="About" />
        </div>
      </div>
    </div>
  );
};

export default Header;
