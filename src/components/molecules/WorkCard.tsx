"use client";
import React from "react";

// next
import Link from "next/link";

// hooks
import useAOS from "@/hooks/useAOS";

// components
import TopLeftText from "../atoms/TopLeftText";

// props
export type WorkCardProps = {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  desc: string;
  tech: string;
  link: string;
};

const WorkCard = ({
  id,
  icon,
  title,
  subtitle,
  tag,
  desc,
  tech,
  link,
}: WorkCardProps) => {
  useAOS();
  return (
    <div
      data-aos="fade-up"
      key={id}
      className="w-1/4 h-[500px] border-2 border-red-500"
    >
      <TopLeftText
        id="hero-nav"
        textType="blue"
        text='<li class="work-card">'
      />
      <div className="ml-3 mt-10">
        <p className="mb-1 text-4xl font-semibold">{title}</p>
        <p className="mb-2 text-sm text-[var(--main-red)] font-semibold">
          {subtitle}
        </p>
        <p className="mb-7 inline-block bg-[var(--main-red)] px-2 py-1 text-white text-sm font-semibold rounded-md">
          {tag}
        </p>
        <p className="w-[95%] mb-3 text-medium">{desc}</p>
        <p className="text-sm text-gray-700">{tech}</p>
        <Link
          className="absolute right-10 bottom-10 bg-[var(--main-red)] text-white font-semibold text-center rounded-full px-3 py-2"
          href={link}
        >
          VIEW MORE
        </Link>
      </div>
    </div>
  );
};

export default WorkCard;
