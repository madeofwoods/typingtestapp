export type ClockSVGProps = {
  gameLength: number;
  counter: number;
};

const ClockSVG = ({ gameLength, counter }: ClockSVGProps) => {
  const remaining: number = Number((gameLength - counter / 5).toFixed(2));
  return (
    <g id="clock">
      {/* Background Clock */}
      <circle cx={1200} cy={300} stroke={"rgb(149, 149, 149)"} opacity={0.35} r={100} strokeWidth={6}></circle>
      {/* Reactive Clock */}
      <circle
        style={{
          transition: "stroke-dashoffset 0.2s linear",
        }}
        cx={1200}
        cy={300}
        stroke={"url(#grad)"}
        opacity={0.5}
        r={100}
        strokeWidth={6}
        strokeDasharray={628}
        strokeDashoffset={628 - (628 * remaining) / gameLength}
        transform="rotate(270 1200 300)"
      ></circle>
    </g>
  );
};

export default ClockSVG;
