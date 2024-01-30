import React from "react";
import RectSVG from "./RectSVG";
import { getSpeed } from "../LiveResults/utils";

const SpeedBarsSVG = ({ speedArray }: { speedArray: number[] }) => {
  const speedBarX = 1100;
  const speedBarY = -600;
  const speedBarHeight = 90;
  const speedBarArray = [0, 30, 60, 90, 120];
  return (
    <g id="speedBars">
      {speedBarArray.map((el) => (
        <RectSVG
          key={el}
          speedBarX={speedBarX + el}
          speedBarY={speedBarY}
          height={speedBarHeight}
          fill="rgb(200, 200, 200, 0.14)"
        />
      ))}
      {speedBarArray.map((el, index) => (
        <RectSVG
          key={el}
          speedBarX={speedBarX + el}
          speedBarY={speedBarY}
          height={getSpeed(speedArray, 5 - index, speedBarHeight)}
          fill="rgb(255,145,210, 0.70)"
        />
      ))}
    </g>
  );
};

export default SpeedBarsSVG;
