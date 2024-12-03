import React from "react";
import StarIcon from "@/assets/icons/star.svg"

const CardHeader = ({title,description}: {title: string; description: string}) => {
  return (
    <div className="flex flex-col">
      <div className="inline-flex items-center justify-center gap-2">
        <StarIcon className="size-9 text-emerald-300" />
        <h3 className="font-serif text-3xl md:text-4xl">{title}</h3>
      </div>
      <p className="text-sm text-white/60 mt-2 md:text-lg">{description}</p>
    </div>
  );
};

export default CardHeader;
