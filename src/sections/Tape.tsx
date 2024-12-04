"use client"
import StarIcon from "@/assets/icons/star.svg";
import { motion, useInView } from "framer-motion";
import { Fragment, useRef } from "react";
const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  const tapeRef = useRef(null);
  const isInView = useInView(tapeRef, { amount: 0.2 });
  return (
    <motion.div
      ref={tapeRef}
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="py-16 lg:py-24 overflow-x-clip"
    >
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-4 animate-move-left">
            {[...new Array(2)].fill(0).map((_,idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
              <div key={word} className="inline-flex gap-4">
                <span className="text-gray-900 uppercase font-extrabold text-sm ">
                  {word}
                </span>
                <StarIcon className="size-6 text-gray-900 -rotate-3" />
              </div>
            ))}
              </Fragment>
            ))}
            
          </div>
        </div>
      </div>
    </motion.div>
  );
};
