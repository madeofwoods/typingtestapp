import React from "react";

export type ClockSVGProps = {
  timeRemaining: number;
  gameLength: number;
};

const ClockSVG = ({ timeRemaining, gameLength }: ClockSVGProps) => {
  return (
    <g id="clock">
      {/* Background Clock */}
      <circle cx={1200} cy={300} stroke={"rgb(149, 149, 149)"} opacity={0.35} r={100} strokeWidth={6}></circle>
      {/* Reactive Clock */}
      <circle
        style={{
          transition: "stroke-dashoffset 1s linear",
        }}
        cx={1200}
        cy={300}
        stroke={"url(#grad)"}
        opacity={0.5}
        r={100}
        strokeWidth={6}
        strokeDasharray={628}
        strokeDashoffset={628 - (628 * timeRemaining) / gameLength}
        transform="rotate(270 1200 300)"
      ></circle>
    </g>
  );
};

export default ClockSVG;
