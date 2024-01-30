import React from "react";

type LeftPositions = 370 | 1300 | 1320 | 292;
type TopPositions = 270 | 410 | 550 | 300 | 555;
type tailwindLeftPositions = Record<LeftPositions, string>;
type tailwindTopPositions = Record<TopPositions, string>;
type LabelsSVGProps = {
  labelsActive: boolean;
  left: LeftPositions;
  top: TopPositions;
  label: string;
};

const LabelsSVG = ({ labelsActive, left, top, label }: LabelsSVGProps) => {
  const tailwindLeftPosition: tailwindLeftPositions = {
    370: "left-[370px]",
    292: "left-[292px]",
    1300: "left-[1300px]",
    1320: "left-[1320px]",
  };
  const tailwindTopPosition: tailwindTopPositions = {
    270: "top-[270px]",
    410: "top-[410px]",
    550: "top-[550px]",
    300: "top-[300px]",
    555: "top-[555px]",
  };
  return (
    <div
      className={`absolute text-xl max-w-40 ${tailwindLeftPosition[left]} ${
        tailwindTopPosition[top]
      }  translate-y-[-50%] px-4 py-2 rounded-lg bg-indigo-800/30 border border-indigo-400 text-gray-300 transition-opacity ${
        labelsActive ? "opacity-75" : "opacity-0"
      }`}
    >
      {label}
    </div>
  );
};

export default LabelsSVG;
