import { useEffect, useState } from "react";
import { getNetWPM } from "./LiveResults/utils";
import SpeedometerCircleSVG from "./SVGComponents/SpeedometerCircleSVG";

type SpeedometerProps = {
  typedChars: string;
  elapsedTime: number;
  errors: number;
};
const radius = 200;
const circumference = 2 * Math.PI * radius;
const arc = (circumference * 270) / 360;
const dashArray = `${arc} ${circumference}`;

const Speedometer = ({ typedChars, elapsedTime, errors }: SpeedometerProps) => {
  const [offset, setOffset] = useState<number>(arc);
  //update WPM speedometer
  useEffect(() => {
    if (typedChars) {
      const speed = getNetWPM(typedChars.length, elapsedTime, errors);
      // percentNormalized -- make 100% of the speedometer be at 100+ wpm
      const percentNormalized = Math.min(Math.max(speed, 0), 100);
      const currentOffset = arc - (percentNormalized / 100) * arc;

      setOffset(currentOffset);
    } else setOffset(arc);
  }, [typedChars, elapsedTime, errors]);

  return (
    <g>
      <SpeedometerCircleSVG stroke={"rgba(35, 35, 35, 0.468)"} dashArray={dashArray} />
      <SpeedometerCircleSVG stroke={"url(#grad)"} dashArray={dashArray} offset={offset} />
      <g filter="url(#f1)">
        <SpeedometerCircleSVG stroke={"url(#grad)"} dashArray={dashArray} offset={offset} />
      </g>
    </g>
  );
};

export default Speedometer;
