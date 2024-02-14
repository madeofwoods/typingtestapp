const SpeedometerCircleSVG = ({
  stroke,
  dashArray,
  offset,
}: {
  stroke: string;
  dashArray?: string;
  offset?: number;
}) => {
  const cx = 1492 / 2;
  const cy = 450;
  const radius: number = 200;
  const strokeWidth = radius * 0.34;
  const innerRadius = radius;
  return (
    <circle
      cx={cx}
      cy={cy}
      fill="transparent"
      r={innerRadius}
      transform={"rotate(135 746 450)"}
      stroke={stroke}
      strokeLinecap="butt"
      style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
      strokeWidth={strokeWidth}
      strokeDasharray={dashArray}
      strokeDashoffset={offset ? offset : dashArray}
    />
  );
};

export default SpeedometerCircleSVG;
