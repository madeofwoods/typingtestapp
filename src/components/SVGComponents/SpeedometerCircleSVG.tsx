const SpeedometerCircleSVG = ({
  stroke,
  dashArray,
  percentage,
}: {
  stroke: string;
  dashArray?: string;
  percentage?: number;
}) => {
  const cx = -70;
  const cy = -380;
  const radius: number = 200;
  const strokeWidth = radius * 0.34;
  const innerRadius = radius;
  return (
    <circle
      cx={cx}
      cy={cy}
      fill="transparent"
      r={innerRadius}
      transform={"rotate(135 150 150) translate(5 -95)"}
      stroke={stroke}
      strokeLinecap="butt"
      style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
      strokeWidth={strokeWidth}
      strokeDasharray={dashArray}
      strokeDashoffset={percentage ? percentage : dashArray}
    />
  );
};

export default SpeedometerCircleSVG;
