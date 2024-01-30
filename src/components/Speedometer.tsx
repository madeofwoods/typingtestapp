import { useEffect, useState } from "react";
import { getNetWPM } from "./LiveResults/utils";
import SpeedometerCircleSVG from "./SVGComponents/SpeedometerCircleSVG";

type SpeedometerProps = {
  typedChars: string;
  elapsedTime: number;
  errors: number;
};

const Speedometer = ({ typedChars, elapsedTime, errors }: SpeedometerProps) => {
  const [percentage, setPercentage] = useState<number>(942.47);
  const radius = 200;
  const circumference = 2 * Math.PI * radius;
  const arc = (circumference * 270) / 360;
  const dashArray = `${arc} ${circumference}`;

  //update WPM speedometer
  useEffect(() => {
    if (typedChars) {
      const speed = getNetWPM(typedChars.length, elapsedTime, errors);
      const percentNormalized = Math.min(Math.max(speed, 0), 100);
      const offset = arc - (percentNormalized / 100) * arc;

      setPercentage(offset);
    } else setPercentage(arc);
  }, [typedChars, elapsedTime, errors, arc]);

  return (
    <g>
      <SpeedometerCircleSVG stroke={"rgba(35, 35, 35, 0.468)"} dashArray={dashArray} />
      <SpeedometerCircleSVG stroke={"url(#grad)"} dashArray={dashArray} percentage={percentage} />
      <g filter="url(#f1)">
        <SpeedometerCircleSVG stroke={"url(#grad)"} dashArray={dashArray} percentage={percentage} />
      </g>
    </g>
  );
};

export default Speedometer;
