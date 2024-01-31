import { useContext } from "react";
import Speedometer from "./Speedometer";
import { GlobalContext, GlobalContextType } from "../context/GlobalContextProvider";

const MobileSVG = ({ elapsedTime, errors }: { elapsedTime: number; errors: number }) => {
  const { typedChars } = useContext(GlobalContext) as GlobalContextType;
  return (
    <svg viewBox="250 180 1000 350" className="w-[280px] h-[150px] ">
      <Speedometer typedChars={typedChars} elapsedTime={elapsedTime} errors={errors} />
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0.0408604" stopColor="#dc4eff" />
          <stop offset="0.436563" stopColor="#DD2FCD" />
          <stop offset="1" stopColor="#3827FF" />
        </linearGradient>
        <filter id="f1" x="0" y="0" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_10_2" />
        </filter>
      </defs>
    </svg>
  );
};

export default MobileSVG;