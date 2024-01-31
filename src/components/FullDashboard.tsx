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
    <div className={` relative flex justify-center items-center z-0`}>
      <svg
        viewBox="0 0 1492 717"
        className="w-[80vw] sm:w-[500px] h-[250px] md:w-[600px] md:h-[300px] lg:w-[700px] lg:h-[350px] xl:w-[800px] xl:h-[400px]"
      >
        {dashboard === 1 ? <SkinOneSVG /> : <SkinTwoSVG />}
        <ClockSVG timeRemaining={timeRemaining} gameLength={gameLength} />
        <SmallCirclesSVG />
        <SpeedBarsSVG speedArray={speedArray} />
        <Speedometer elapsedTime={elapsedTime} typedChars={typedChars} errors={errors} />
        <ForeignObjectSVG accuracy={accuracy} errors={errors} timeRemaining={timeRemaining} wpm={wpm} />
        <foreignObject>
          <div className="">test</div>
        </foreignObject>
        <FiltersSVG />
      </svg>
    </div>
  );
};

export default FullDashboard;
