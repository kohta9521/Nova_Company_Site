import React from "react";

// next
import Link from "next/link";

// props
export type ListBlockItemProps = {
  id: string;
  link: string;
  text: string;
};

const ListBlockItem = ({ id, link, text }: ListBlockItemProps) => {
  return (
    <Link
      key={id}
      href={link}
      className="inline-block px-3 py-1.5 rounded-full bg-[var(--main-red)] text-white text-sm text-center"
    >
      {text}
    </Link>
  );
};

export default ListBlockItem;
