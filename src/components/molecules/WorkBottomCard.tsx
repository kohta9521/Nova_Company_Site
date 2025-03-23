"use client";
import React from "react";

// next
import Link from "next/link";

// hooks
import useAOS from "@/hooks/useAOS";
import WorkBottomLink from "../atoms/WorkBottomLink";

// jsonType / props
export type CardChildLink = {
  id: number;
  link: string;
  text: string;
}[];

export type WorkBottomCardProps = {
  id: string;
  size?: "default" | "half";
  icon: React.ReactNode;
  link: string;
  title: string;
  childLink: CardChildLink;
};

const WorkBottomCard = ({
  id,
  size = "default",
  icon,
  link,
  title,
  childLink,
}: WorkBottomCardProps) => {
  useAOS();
  const cardStyle = size === "default" ? "w-11/12" : "w-1/2";
  return (
    <Link
      key={id}
      href={link}
      className={`${cardStyle} block p-4 border-2  border-[var(--main-red)]`}
      data-aos="fade-up"
    >
      <div className="flex items-center w-full pb-3 border-b border-[var(--main-red)]">
        {/* icon box */}
        <div className="block mr-3">{icon}</div>
        {/* title box */}
        <div className="block">
          <p className="text-2xl font-semibold">{title}</p>
        </div>
      </div>
      {/* child link area */}
      <div className="w-full gap-1">
        {childLink.map((link) => (
          <WorkBottomLink key={link.id} {...link} />
        ))}
      </div>
    </Link>
  );
};

export default WorkBottomCard;
