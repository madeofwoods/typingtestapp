import { useEffect, useState } from "react";
import { getNetWPM } from "../LiveResults/utils";
import RectSVG from "../RectSVG";

const FullDashboard = ({
  typedChars,
  elapsedTime,
  errors,
  timeRemaining,
  accuracy,
  speedArray,
}: {
  typedChars: string;
  elapsedTime: number;
  errors: number;
  timeRemaining: number;
  accuracy: number;
  speedArray: number[];
}) => {
  const width: number = 800;
  const height: number = 500;
  const cx = -70;
  const cy = -380;
  const translation = "5 -95";
  const [percentage, setPercentage] = useState<number>(942.47);
  const radius: number = 200;
  const strokeWidth = radius * 0.34;
  const innerRadius = radius;
  const circumference = 2 * Math.PI * innerRadius;
  const arc = (circumference * 270) / 360;
  const dashArray = `${arc} ${circumference}`;
  const speedBarX = 1110;
  const speedBarY = -600;
  const speedBarHeight = 90;

  const getSpeed = (speedArray: number[], index: number): number => {
    const speed: number = speedArray[speedArray.length - index];
    const adjustedSpeed: number = (speed * speedBarHeight) / 140;
    return Math.min(Math.max(adjustedSpeed, 0), speedBarHeight);
  };

  useEffect(() => {
    if (typedChars) {
      const speed = getNetWPM(typedChars.length, elapsedTime, errors);
      const percentNormalized = Math.min(Math.max(speed, 0), 100);
      const offset = arc - (percentNormalized / 100) * arc;

      setPercentage(offset);
    }
  }, [typedChars, elapsedTime, errors, arc]);

  return (
    <div className={` relative w-[${width}px] h-[${height}px] flex items-center justify-center`}>
      <div>
        {" "}
        <svg width={width} height={height} viewBox="0 0 1492 717" className=" ">
          <path
            className=" animate-opactityLeft"
            opacity="0.45"
            d="M494.548 73.1794L264.96 26.8229C192.916 12.2765 121.889 55.917 102.31 126.759L19.5359 426.253C7.30047 470.523 17.558 517.979 46.985 553.244L128.928 651.444C162.519 691.7 215.789 709.813 266.957 698.376L493.181 647.814C503.206 645.574 513.446 644.443 523.718 644.443H956.002C966.154 644.443 976.277 645.548 986.19 647.737L1218.79 699.102C1268.77 710.137 1320.78 693.026 1354.44 654.478L1444.12 551.771C1474.13 517.4 1485.51 470.559 1474.61 426.25L1401.65 129.62C1383.9 57.4617 1312.87 11.741 1239.84 25.468L984.094 73.5393C975.567 75.1422 966.909 75.9488 958.232 75.9488H522.256C512.951 75.9488 503.669 75.0211 494.548 73.1794Z"
            fill="url(#paint0_linear_102_8)"
            stroke="url(#paint1_linear_102_8)"
            strokeWidth="7"
          />
          <g opacity="0.3" filter="url(#filter0_b_102_8)" className=" animate-opactityRight">
            <path
              d="M494.548 72.1794L264.96 25.8229C192.916 11.2765 121.889 54.917 102.31 125.759L19.5359 425.253C7.30048 469.523 17.558 516.979 46.985 552.244L128.928 650.444C162.519 690.7 215.789 708.813 266.957 697.376L493.181 646.814C503.206 644.574 513.446 643.443 523.718 643.443H956.002C966.154 643.443 976.277 644.548 986.19 646.737L1218.79 698.102C1268.77 709.137 1320.78 692.026 1354.44 653.478L1444.12 550.771C1474.13 516.4 1485.51 469.559 1474.61 425.25L1401.65 128.62C1383.9 56.4617 1312.87 10.741 1239.84 24.468L984.094 72.5393C975.567 74.1422 966.909 74.9488 958.232 74.9488H522.256C512.951 74.9488 503.669 74.0211 494.548 72.1794Z"
              fill="url(#paint2_linear_102_8)"
              fillOpacity="0.7"
            />
            <path
              d="M494.548 72.1794L264.96 25.8229C192.916 11.2765 121.889 54.917 102.31 125.759L19.5359 425.253C7.30048 469.523 17.558 516.979 46.985 552.244L128.928 650.444C162.519 690.7 215.789 708.813 266.957 697.376L493.181 646.814C503.206 644.574 513.446 643.443 523.718 643.443H956.002C966.154 643.443 976.277 644.548 986.19 646.737L1218.79 698.102C1268.77 709.137 1320.78 692.026 1354.44 653.478L1444.12 550.771C1474.13 516.4 1485.51 469.559 1474.61 425.25L1401.65 128.62C1383.9 56.4617 1312.87 10.741 1239.84 24.468L984.094 72.5393C975.567 74.1422 966.909 74.9488 958.232 74.9488H522.256C512.951 74.9488 503.669 74.0211 494.548 72.1794Z"
              stroke="url(#paint3_linear_102_8)"
              strokeWidth="6"
            />
            <path
              d="M1017.5 17L784.055 63.4048C751.953 69.7862 719.302 73 686.571 73L349.331 73C315.296 73 281.35 69.5249 248.021 62.6287L13 14"
              stroke="url(#paint0_linear_102_24)"
              transform="translate(230 0)"
              stroke-width="4"
            />
            <path
              d="M1017.5 17L784.055 63.4048C751.953 69.7862 719.302 73 686.571 73L349.331 73C315.296 73 281.35 69.5249 248.021 62.6287L13 14"
              stroke="url(#paint0_linear_102_24)"
              transform="translate(230 60)"
              stroke-width="4"
              opacity={0.4}
            />
          </g>
          <g id="clock">
            ‍<circle cx={1200} cy={300} stroke={"rgb(149, 149, 149)"} opacity={0.3} r={100} strokeWidth={6}></circle>‍
            <circle cx={1200} cy={300} stroke={"url(#grad)"} opacity={0.3} r={100} strokeWidth={6}></circle>
          </g>
          <g id="clock">
            ‍<circle cx={292} cy={300} stroke={"rgb(149, 149, 149)"} opacity={0.3} r={100} strokeWidth={6}></circle>‍
            <circle cx={292} cy={300} stroke={"url(#grad)"} opacity={0.3} r={100} strokeWidth={6}></circle>
          </g>
          <g id="speedBars">
            <RectSVG
              speedBarX={speedBarX}
              speedBarY={speedBarY}
              height={speedBarHeight}
              fill="rgb(200, 200, 200, 0.14)"
            />
            <RectSVG
              speedBarX={speedBarX + 30}
              speedBarY={speedBarY}
              height={speedBarHeight}
              fill="rgb(200, 200, 200, 0.14)"
            />
            <RectSVG
              speedBarX={speedBarX + 60}
              speedBarY={speedBarY}
              height={speedBarHeight}
              fill="rgb(200, 200, 200, 0.14)"
            />
            <RectSVG
              speedBarX={speedBarX + 90}
              speedBarY={speedBarY}
              height={speedBarHeight}
              fill="rgb(200, 200, 200, 0.14)"
            />
            <RectSVG
              speedBarX={speedBarX + 120}
              speedBarY={speedBarY}
              height={speedBarHeight}
              fill="rgb(200, 200, 200, 0.14)"
            />
            <RectSVG
              speedBarX={speedBarX}
              speedBarY={speedBarY}
              height={getSpeed(speedArray, 5)}
              fill="rgb(255,105,180, 0.45)"
            />
            <RectSVG
              speedBarX={speedBarX + 30}
              speedBarY={speedBarY}
              height={getSpeed(speedArray, 4)}
              fill="rgb(255,105,180, 0.45)"
            />
            <RectSVG
              speedBarX={speedBarX + 60}
              speedBarY={speedBarY}
              height={getSpeed(speedArray, 3)}
              fill="rgb(255,105,180, 0.45)"
            />
            <RectSVG
              speedBarX={speedBarX + 90}
              speedBarY={speedBarY}
              height={getSpeed(speedArray, 2)}
              fill="rgb(255,105,180, 0.45)"
            />
            <RectSVG
              speedBarX={speedBarX + 120}
              speedBarY={speedBarY}
              height={getSpeed(speedArray, 1)}
              fill="rgb(255,105,180, 0.45)"
            />
          </g>
          <circle
            cx={cx}
            cy={cy}
            fill="transparent"
            r={innerRadius}
            transform={`rotate(135 ${150} ${150}) translate(${translation})`}
            stroke="rgba(35, 35, 35, 0.468)"
            strokeLinecap="butt"
            strokeWidth={strokeWidth}
            strokeDasharray={dashArray}
          />
          <circle
            cx={cx}
            cy={cy}
            fill="transparent"
            r={innerRadius}
            transform={`rotate(135 ${150} ${150}) translate(${translation})`}
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
              cx={cx}
              cy={cy}
              fill="transparent"
              r={innerRadius}
              transform={`rotate(135 ${150} ${150}) translate(${translation})`}
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
          <foreignObject x={0} y={0} width={"100%"} height={"100%"} className=" relative">
            <div
              id="speed"
              className=" text-gray-100/80 text-7xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[40px] text-left tracking-widest "
            >
              {getNetWPM(typedChars.length, elapsedTime, errors).toFixed(0).padStart(3, "0")}
            </div>

            <div
              id="clock"
              className="absolute text-5xl left-[1200px] top-[300px] translate-x-[-50%] translate-y-[-50%] text-white/70  "
            >
              {timeRemaining.toFixed(0)}
            </div>
            <div
              id="accuracy"
              className="absolute text-5xl left-[292px] top-[300px] translate-x-[-50%] translate-y-[-50%] text-white/70  "
            >
              {accuracy}
              <span>%</span>
            </div>
          </foreignObject>
          <defs>
            <linearGradient
              id="paint0_linear_102_24"
              x1="501.5"
              y1="141"
              x2="501.459"
              y2="37.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F31DEA" />
              <stop offset="0.468154" stop-color="#a74fff" stop-opacity="0.79" />
              <stop offset="1" stop-color="#df80ff" stop-opacity="0" />
            </linearGradient>
            <filter
              id="filter0_b_102_8"
              x="-988.025"
              y="-980.463"
              width="3469.19"
              height="2684.36"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="500" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_102_8" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_102_8" result="shape" />
            </filter>
            <linearGradient
              id="paint0_linear_102_8"
              x1="38.5"
              y1="402.154"
              x2="734.212"
              y2="526.969"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3E3D3D" />
              <stop offset="1" stopColor="#3E3D3D" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_102_8"
              x1="-356"
              y1="908.46"
              x2="698.209"
              y2="374.396"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.353463" stopColor="#FF01D6" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_102_8"
              x1="1453"
              y1="304.513"
              x2="631.497"
              y2="302.045"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3E3D3D" />
              <stop offset="1" stopColor="#3E3D3D" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_102_8"
              x1="1492"
              y1="635.161"
              x2="1210.52"
              y2="313.186"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.353463" stopColor="#8001FF" />
              <stop offset="0.841638" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0.0408604" stopColor="#F06565" />
              <stop offset="0.436563" stopColor="#DD2FCD" />
              <stop offset="1" stopColor="#3827FF" />
            </linearGradient>
            <filter id="f1" x="0" y="0" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_10_2" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default FullDashboard;
