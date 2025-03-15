import Link from "next/link";

// clsx
import clsx from "clsx";

// icon
import { IoIosArrowRoundForward } from "react-icons/io";

// props
export type ListItemProps = {
  id: string;
  link: string;
  size?: "small" | "medium" | "large";
  text: string;
};

const ListItem = ({ id, link, size = "medium", text }: ListItemProps) => {
  return (
    <Link
      key={id}
      href={link}
      className={clsx(
        "flex items-center group font-medium transition-colors duration-200 hover:text-[var(--main-red)]",
        size === "small" && "text-sm px-5 py-1",
        size === "medium" && "text-base px-6 py-2",
        size === "large" && "text-lg px-7 py-3"
      )}
    >
      <IoIosArrowRoundForward
        size={20}
        className="text-[var(--main-red)] group-hover:mr-1 transition-all"
      />
      {text}
    </Link>
  );
};

export default ListItem;
