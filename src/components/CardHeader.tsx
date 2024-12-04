import React from "react";
import StarIcon from "@/assets/icons/star.svg"
import { twMerge } from "tailwind-merge";

const CardHeader = ({title,description,className,descClassName}: {title: string; description: string, className?: string, descClassName?: string}) => {
  return (
    <div className={twMerge("flex flex-col", className)}>
      <div className="inline-flex items-center justify-center gap-2">
        <StarIcon className="size-9 text-emerald-300" />
        <h3 className="font-serif text-3xl md:text-4xl">{title}</h3>
      </div>
      <p className={twMerge("text-sm text-white/60 mt-2 md:text-lg", descClassName)}>{description}</p>
    </div>
  );
};

export default CardHeader;
