import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// peops
export type AchieveCardProps = {
  id: string;
  number: string;
  title: React.ReactNode;
  hash: string[];
  maintext: string;
  tech: string[];
  img?: string;
  link: string;
};

const AchieveCard = ({
  id,
  number,
  title,
  hash,
  maintext,
  tech,
  img,
  link,
}: AchieveCardProps) => {
  return (
    <div
      key={id}
      className="sm:w-1/3 border-b-[1px] border-b-gray-300 sm:border-r-[1px] sm:border-gray-300"
    >
      <div className="flex items-center p-3">
        <h2 className="block mr-3 text-7xl font-semibold text-[var(--main-red)]">
          {number}
        </h2>
        <div>{title}</div>
      </div>
      <div className="w-full pl-4 mb-4">
        {hash.map((hashItem, index) => (
          <p key={index} className="inline-block mr-3 text-gray-400">
            {hashItem}
          </p>
        ))}
      </div>
      <div className="w-full h-[300px] relative">
        {img && (
          <Image
            className="object-cover"
            src={img}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            alt="achieve-image-1"
          />
        )}
      </div>
      <div className="ml-3 py-4 pb-5">
        <p className="text-base font-medium mb-3">{maintext}</p>
        <div className="w-full mb-4 flex items-center">
          <p className="block mr-2">使用技術 : </p>
          {tech.map((techItem, index) => (
            <p
              key={index}
              className="block text-sm font-semibold mr-4 text-[var(--main-red)]"
            >
              {techItem}
            </p>
          ))}
        </div>
        <Link
          className="inline-block px-4 py-3 bg-[var(--main-red)] text-white font-semibold text-sm text-enter rounded-full"
          href={link}
        >
          詳しく見る
        </Link>
      </div>
    </div>
  );
};

export default AchieveCard;
