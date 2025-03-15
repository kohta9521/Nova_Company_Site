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
      <div className="block sm:py-4 sm:flex sm:items-center sm:justify-between">
        {/* image box */}
        <div className="w-full  sm:w-[100%] bg-[var(--main-red)]">
          <Image
            className="w-full h-auto"
            src={img}
            width={800}
            height={400}
            alt={`service-image-${title}`}
          />
        </div>
        {/* content box */}
        <div className="w-full px-5 py-7 sm:w-full sm:px-10">
          <p className="text-[var(--main-red)] font-semibold">{subtitle}</p>
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="font-medium mb-5">{desc}</p>
          <ListBlockItem id="philosophy-btn" link={link} text={`VIEW MORE`} />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
