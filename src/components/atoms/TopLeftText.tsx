import React from "react";

// props
export type TopLeftTextProps = {
  id: string;
  textType: "gray" | "blue";
  text: string;
};

const TopLeftText = ({ id, textType, text }: TopLeftTextProps) => {
  const textStyle =
    textType === "gray" ? "text-gray-400" : "text-[var(--main-red)]";

  return (
    <p
      key={id}
      className={`inline-block relative top-2  left-[13px] sm:left-[13px] text-left text-xs font-thin ${textStyle}`}
    >
      {text}
    </p>
  );
};

export default TopLeftText;
