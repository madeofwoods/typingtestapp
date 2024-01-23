import { useContext, useEffect, useState } from "react";
import { getNetWPM, getSpeed } from "./LiveResults/utils";
import RectSVG from "./RectSVG";
import { GlobalContext, GlobalContextType } from "../context/GlobalContextProvider";

export type DashboardProps = {
  typedChars: string;
  elapsedTime: number;
  errors: number;
  timeRemaining: number;
  accuracy: number;
  speedArray: number[];
  wpm: number;
};

const FullDashboard = ({
  typedChars,
  elapsedTime,
  errors,
  timeRemaining,
  accuracy,
  speedArray,
  wpm,
}: DashboardProps) => {
  const { setGameState } = useContext(GlobalContext) as GlobalContextType;
  const [percentage, setPercentage] = useState<number>(942.47);
  const width: number = 800;
  const height: number = 500;
  const cx = -70;
  const cy = -380;
  const translation = "5 -95";
  const radius: number = 200;
  const strokeWidth = radius * 0.34;
  const innerRadius = radius;
  const circumference = 2 * Math.PI * innerRadius;
  const arc = (circumference * 270) / 360;
  const dashArray = `${arc} ${circumference}`;
  const speedBarX = 1110;
  const speedBarY = -600;
  const speedBarHeight = 90;
  const speedBarColor = "rgb(255,145,210, 0.55)";

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
          {/* BG2 */}
          <g>
            <rect
              x="50"
              y="40"
              width="1389"
              height="698"
              rx="169.5"
              fill="url(#paint0_linear_107_6)"
              fillOpacity="0.7"
              stroke="url(#paint1_linear_107_6)"
              strokeWidth="4"
            />
            <rect
              x="50"
              y="40"
              width="1389"
              height="698"
              rx="169.5"
              fill="url(#paint2_linear_107_6)"
              fillOpacity="0.5"
              stroke="url(#paint3_linear_107_6)"
              strokeWidth="4"
            />
          </g>
          {/* <path
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
          </g> */}
          <g id="clock">
            ‍<circle cx={1200} cy={300} stroke={"rgb(149, 149, 149)"} opacity={0.3} r={100} strokeWidth={6}></circle>‍
            <circle cx={1200} cy={300} stroke={"url(#grad)"} opacity={0.5} r={100} strokeWidth={6}></circle>
          </g>
          <g id="percent">
            ‍<circle cx={322} cy={270} stroke={"url(#grad)"} opacity={0.5} r={60} strokeWidth={6}></circle>‍
            <circle cx={262} cy={410} stroke={"url(#grad)"} opacity={0.5} r={60} strokeWidth={6}></circle>‍
            <circle cx={322} cy={550} stroke={"url(#grad)"} opacity={0.5} r={60} strokeWidth={6}></circle>
          </g>
          {/* <path
            x={100}
            y={100}
            transform="scale(3) translate(250, 20)"
            fill="white"
            d="M15.88 13.84c-1.68-3.48-5.44-5.24-9.040-4.6l0.96-1.8c0.24-0.4 0.080-0.92-0.32-1.12-0.4-0.24-0.92-0.080-1.12 0.32l-1.96 3.64c0 0-0.44 0.72 0.24 1.040l3.64 1.96c0.12 0.080 0.28 0.12 0.4 0.12 0.28 0 0.6-0.16 0.72-0.44 0.24-0.4 0.080-0.92-0.32-1.12l-1.88-1.040c2.84-0.48 5.8 0.96 7.12 3.68 1.6 3.32 0.2 7.32-3.12 8.88-1.6 0.76-3.4 0.88-5.080 0.28s-3.040-1.8-3.8-3.4c-0.76-1.6-0.88-3.4-0.28-5.080 0.16-0.44-0.080-0.92-0.52-1.080-0.4-0.080-0.88 0.16-1.040 0.6-0.72 2.12-0.6 4.36 0.36 6.36s2.64 3.52 4.76 4.28c0.92 0.32 1.84 0.48 2.76 0.48 1.24 0 2.48-0.28 3.6-0.84 4.16-2 5.92-7 3.92-11.12z"
          ></path> */}
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
              height={getSpeed(speedArray, 5, speedBarHeight)}
              fill={speedBarColor}
            />
            <RectSVG
              speedBarX={speedBarX + 30}
              speedBarY={speedBarY}
              height={getSpeed(speedArray, 4, speedBarHeight)}
              fill={speedBarColor}
            />
            <RectSVG
              speedBarX={speedBarX + 60}
              speedBarY={speedBarY}
              height={getSpeed(speedArray, 3, speedBarHeight)}
              fill={speedBarColor}
            />
            <RectSVG
              speedBarX={speedBarX + 90}
              speedBarY={speedBarY}
              height={getSpeed(speedArray, 2, speedBarHeight)}
              fill={speedBarColor}
            />
            <RectSVG
              speedBarX={speedBarX + 120}
              speedBarY={speedBarY}
              height={getSpeed(speedArray, 1, speedBarHeight)}
              fill={speedBarColor}
            />
          </g>
          {/* <rect x={1492 / 2 - 100} y={80} width={200} height={60} fill="rgb(30,30,30)" /> */}
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
              strokeWidth={strokeWidth}
              strokeDasharray={dashArray}
              strokeDashoffset={percentage}
            />
          </g>
          <foreignObject x={0} y={0} width={"100%"} height={"100%"} className=" relative select-none ">
            <div
              onClick={() => setGameState("reset")}
              className=" cursor-pointer text-gray-100/80 text-2xl top-[95px] translate-x-[-50%]  left-1/2 absolute w-34  bg-indigo-800/30 px-6 py-3 rounded-2xl flex items-center justify-center border-indigo-700 border-2 hover:border-indigo-400 hover:bg-indigo-700/30"
            >
              <div className="">Restart</div>
            </div>
            <div
              id="speed"
              className=" text-gray-100/80 text-7xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[40px] text-left tracking-widest "
            >
              {wpm.toFixed(0).padStart(3, "0")}
            </div>

            <div
              id="clock"
              className="absolute text-6xl left-[1200px] top-[300px] translate-x-[-50%] translate-y-[-50%] text-white/70  "
            >
              {timeRemaining.toFixed(0)}
            </div>
            <div
              id="accuracy"
              className="absolute text-3xl left-[322px] top-[270px] translate-x-[-50%] translate-y-[-50%] text-white/70  "
            >
              {accuracy}
              <span>%</span>
            </div>
            <div
              id="accuracy"
              className="absolute text-3xl left-[262px] top-[410px] translate-x-[-50%] translate-y-[-50%] text-white/70  "
            >
              {typedChars.length}
            </div>
            <div
              id="accuracy"
              className="absolute text-3xl left-[322px] top-[550px] translate-x-[-50%] translate-y-[-50%] text-white/70  "
            >
              {errors}
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
            {/* New Background */}
            <linearGradient
              id="paint0_linear_107_6"
              x1="1555"
              y1="379.5"
              x2="790"
              y2="476"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0289673" stop-color="#1F1F1F" />
              <stop offset="1" stop-color="#242424" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_107_6"
              x1="1492"
              y1="121"
              x2="777.5"
              y2="592"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0829187" stop-color="#CC00FF" />
              <stop offset="1" stop-color="#EB00FF" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_107_6"
              x1="-260.5"
              y1="531"
              x2="332"
              y2="295.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7C36B3" />
              <stop offset="1" stop-color="#242424" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_107_6"
              x1="-96.5"
              y1="375.5"
              x2="718.5"
              y2="350"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0829187" stop-color="#743DB9" />
              <stop offset="1" stop-color="#EB00FF" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default FullDashboard;
