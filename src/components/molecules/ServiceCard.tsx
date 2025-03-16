"use client";
import React from "react";

// next
import Image from "next/image";

// hooks
import useAOS from "@/hooks/useAOS";

// components
// import TopLeftText from "../atoms/TopLeftText";
import ListBlockItem from "../atoms/ListBlockItem";

// props
export type ServiceCardProps = {
  id: string;
  img: string;
  subtitle: string;
  title: string;
  desc: string;
  link: string;
};

const ServiceCard = ({
  id,
  img,
  subtitle,
  title,
  desc,
  link,
}: ServiceCardProps) => {
  useAOS();
  return (
    <div
      key={id}
      data-aos="fade-up"
      className="w-full border-b-[1px] border-b-gray-300"
    >
      <div className="block sm:py-4 sm:flex sm:items-center sm:justify-between sm:gap-5">
        {/* image box */}
        <div className="sm:w-[40%] sm:h-[300px] bg-[var(--main-red)] overflow-hidden">
          <Image
            className="w-full h-auto"
            src={img}
            layout="responsive"
            width={600}
            height={300}
            alt={`service-image-${title}`}
          />
        </div>
        {/* content box */}
        <div className="sm:w-[55%] px-5 py-7 sm:pl-6 sm:pr-10">
          <p className="text-[var(--main-red)] font-semibold">{subtitle}</p>
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">{title}</h1>
          <p className="font-medium mb-5">{desc}</p>
          <ListBlockItem id="philosophy-btn" link={link} text={`VIEW MORE`} />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
