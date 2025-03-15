import React from "react";

// next
import Link from "next/link";

// icon
import { CiMenuFries } from "react-icons/ci";

// component
import Logo from "../atoms/Logo";
import ListBlockItem from "../atoms/ListBlockItem";

const Header = () => {
  return (
    <div className="w-full h-20 py-6  border-b-[1px] border-b-gray-300">
      <div className="w-11/12 mx-auto flex items-center justify-between">
        <Logo id="home" href="/" size="medium" />
        <div className=" flex w-auto items-center justify-between">
          <ListBlockItem id="header-contact-btn" link="/" text="CONTACT" />
          <Link href="/" className="group  block w-7 h-7 ml-3">
            <CiMenuFries
              size={27}
              className="group-hover:text-[var(--main-red)] transiton-all duration-200"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
