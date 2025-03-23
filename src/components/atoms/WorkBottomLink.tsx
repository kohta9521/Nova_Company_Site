import React from "react";

// next
import Link from "next/link";

// props
export type WorkBottomLinkProps = {
  id: number;
  link: string;
  text: string;
};

const WorkBottomLink = ({ id, link, text }: WorkBottomLinkProps) => {
  return (
    <Link key={id} href={link} className="block ">
      <p className="">{text}</p>
    </Link>
  );
};

export default WorkBottomLink;
