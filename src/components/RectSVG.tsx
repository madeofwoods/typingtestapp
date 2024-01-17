import React from "react";

const RectSVG = ({
  speedBarX,
  speedBarY,
  height,
  fill,
}: {
  speedBarX: number;
  speedBarY: number;
  height: number;
  fill: string;
}) => {
  return <rect x={speedBarX + 30} y={speedBarY} transform="scale(1, -1)" width={25} height={height} fill={fill} />;
};

export default RectSVG;
