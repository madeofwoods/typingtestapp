import React, { useEffect, useState } from "react";
import { getNetWPM } from "./LiveResults/utils";

const SpeedometerTwo = ({
  typedChars,
  elapsedTime,
  errors,
}: {
  typedChars: string;
  elapsedTime: number;
  errors: number;
}) => {
  const [percentage, setPercentage] = useState<number>(471.2);
  const radius: number = 100;
  const strokeWidth = radius * 0.34;
  const innerRadius = radius;
  const circumference = 2 * Math.PI * innerRadius;
  const arc = (circumference * 270) / 360;
  const dashArray = `${arc} ${circumference}`;
  //   const percent = 80;
  //   const percentNormalized = Math.min(Math.max(percent, 0), 100);
  //   const offset = arc - (percentNormalized / 100) * arc;

  useEffect(() => {
    if (typedChars) {
      const speed = getNetWPM(typedChars.length, elapsedTime, errors);
      const percentNormalized = Math.min(Math.max(speed, 0), 100);
      const offset = arc - (percentNormalized / 100) * arc;

      setPercentage(offset);
    }
  }, [typedChars, elapsedTime, errors]);

  return (
    <svg height={350} width={350}>
      ‍
      <circle
        cx={180}
        cy={170}
        fill="transparent"
        r={innerRadius}
        transform={`rotate(135 ${150} ${150}) translate(0 -60)`}
        stroke="black"
        strokeLinecap="butt"
        strokeWidth={strokeWidth}
        strokeDasharray={dashArray}
      />
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0.0408604" stopColor="#F06565" />
          <stop offset="0.436563" stopColor="#DD2FCD" />
          <stop offset="1" stopColor="#3827FF" />
        </linearGradient>
        <filter id="f1" x="0" y="0" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_10_2" />
        </filter>
      </defs>
      <circle
        cx={180}
        cy={170}
        fill="transparent"
        r={innerRadius}
        transform={`rotate(135 ${150} ${150}) translate(0 -60)`}
        stroke="url(#grad)"
        strokeLinecap="butt"
        style={{
          transition: "stroke-dashoffset 0.5s ease-in-out",
        }}
        // stroke="hotpink"
        strokeWidth={strokeWidth}
        strokeDasharray={dashArray}
        strokeDashoffset={percentage}
      />
      <g filter="url(#f1)">
        <circle
          cx={180}
          cy={170}
          fill="transparent"
          r={innerRadius}
          transform={`rotate(135 ${150} ${150}) translate(0 -60)`}
          stroke="url(#grad)"
          strokeLinecap="butt"
          style={{
            transition: "stroke-dashoffset 0.5s ease-in-out",
          }}
          // stroke="hotpink"
          strokeWidth={strokeWidth}
          strokeDasharray={dashArray}
          strokeDashoffset={percentage}
        />
      </g>
    </svg>
  );
};

export default SpeedometerTwo;
