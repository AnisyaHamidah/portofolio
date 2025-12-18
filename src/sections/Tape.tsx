import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Fresh Graduate",
  "Fast Learner",
  "Problem Solver",
  "UI/UX Aware",
  "Quality Oriented",
  "Growth Mindset",
  "Driven",
  "Committed",
  "Positive Attitude",
  "Reliable",
  "Focused",
  "Creative Approach",
  "Efficient",
  "Motivated",
];


export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip bg-[#D69AA8]">
      <div className="bg-white overflow-x-clip -rotate-3 -mx-1">
        <div
          className="flex 
            [mask-image:linear-gradient(to_right,transparent,#ff80b5_10%,#ff80b5_90%,transparent)]
          "
        >
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">

            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span
                      className="
                        text-pink-600
                        uppercase 
                        font-extrabold 
                        text-sm 
                        tracking-wider
                      "
                    >
                      {word}
                    </span>

                    <StarIcon className="size-6 text-pink-600 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};
