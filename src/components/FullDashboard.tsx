import { useContext } from "react";
import { GlobalContext, GlobalContextType } from "../context/GlobalContextProvider";
import { DashboardProps } from "../lib/types";
import SkinOneSVG from "./SVGComponents/SkinOneSVG";
import SkinTwoSVG from "./SVGComponents/SkinTwoSVG";
import ClockSVG from "./SVGComponents/ClockSVG";
import SpeedBarsSVG from "./SVGComponents/SpeedBarsSVG";
import SmallCirclesSVG from "./SVGComponents/SmallCirclesSVG";
import Speedometer from "./Speedometer";
import FiltersSVG from "./SVGComponents/FiltersSVG";
import ForeignObjectSVG from "./SVGComponents/ForeignObjectSVG";

const FullDashboard = ({
  typedChars,
  elapsedTime,
  errors,
  timeRemaining,
  accuracy,
  speedArray,
  wpm,
}: DashboardProps) => {
  const { gameLength, dashboard } = useContext(GlobalContext) as GlobalContextType;

  return (
    <div className={` relative flex justify-center items-center `}>
      <svg width={800} height={400} viewBox="0 0 1492 717" className=" ">
        {dashboard === 1 ? <SkinOneSVG /> : <SkinTwoSVG />}
        <ClockSVG timeRemaining={timeRemaining} gameLength={gameLength} />
        <SmallCirclesSVG />
        <SpeedBarsSVG speedArray={speedArray} />
        <Speedometer elapsedTime={elapsedTime} typedChars={typedChars} errors={errors} />
        <ForeignObjectSVG accuracy={accuracy} errors={errors} timeRemaining={timeRemaining} wpm={wpm} />
        <FiltersSVG />
      </svg>
    </div>
  );
};

export default FullDashboard;
