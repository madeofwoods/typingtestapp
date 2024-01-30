import { useContext, useEffect, useState } from "react";
import { getNetWPM, getSpeed } from "./LiveResults/utils";
import RectSVG from "./SVGComponents/RectSVG";
import { GlobalContext, GlobalContextType } from "../context/GlobalContextProvider";
import image from "../assets/undo-arrow.png";
import { DashboardProps } from "../lib/types";
import SkinOneSVG from "./SVGComponents/SkinOneSVG";
import SkinTwoSVG from "./SVGComponents/SkinTwoSVG";
import ClockSVG from "./SVGComponents/ClockSVG";
import SpeedBarsSVG from "./SVGComponents/SpeedBarsSVG";

const FullDashboard = ({
  typedChars,
  elapsedTime,
  errors,
  timeRemaining,
  accuracy,
  speedArray,
  wpm,
}: DashboardProps) => {
  const { setGameState, gameLength, dashboard } = useContext(GlobalContext) as GlobalContextType;
  const [percentage, setPercentage] = useState<number>(942.47);
  const [labelsActive, setLabelsActive] = useState<boolean>(false);

  const width: number = 800;
  const height: number = 400;
  const cx = -70;
  const cy = -380;
  const translation = "5 -95";
  const radius: number = 200;
  const strokeWidth = radius * 0.34;
  const innerRadius = radius;
  const circumference = 2 * Math.PI * innerRadius;
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
    <div className={` relative flex justify-center items-center `}>
      <svg width={width} height={height} viewBox="0 0 1492 717" className=" ">
        {dashboard === 1 ? <SkinOneSVG /> : <SkinTwoSVG />}

        <ClockSVG timeRemaining={timeRemaining} gameLength={gameLength} />
        <g id="percent">
          ‍<circle cx={292} cy={270} stroke={"url(#accGrad)"} opacity={0.5} r={50} strokeWidth={6}></circle>‍
          <circle cx={292} cy={410} stroke={"url(#accGrad)"} opacity={0.5} r={50} strokeWidth={6}></circle>‍
          <circle cx={292} cy={550} stroke={"url(#accGrad)"} opacity={0.5} r={50} strokeWidth={6}></circle>
        </g>
        <SpeedBarsSVG speedArray={speedArray} />
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
            className=" cursor-pointer text-gray-100/80 text-2xl top-[95px] translate-x-[-50%]  left-[780px] absolute bg-indigo-800/30 w-14 h-14 rounded-lg flex items-center justify-center border-violet-700 border-2 hover:border-violet-500 hover:bg-indigo-700/30"
          >
            <img src={image} width={30} height={30} className=" invert-[60%]" />
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
            onMouseEnter={() => setLabelsActive(true)}
            onMouseLeave={() => setLabelsActive(false)}
            // onClick={() => setLabelsActive(!labelsActive)}
            className=" absolute left-[680px] top-[95px] w-14 h-14 bg-indigo-900/30  border-violet-700 border-2 hover:border-violet-500 hover:bg-indigo-700/30 rounded-lg text-3xl flex items-center justify-center font-light text-gray-300/80 hover:text-gray-300 cursor-pointer"
          >
            ?
          </div>
          {/* LABELS */}
          <div
            className={`absolute text-xl max-w-40 left-[370px] top-[270px]  translate-y-[-50%] px-4 py-2 rounded-lg bg-indigo-800/30 border border-indigo-400 text-gray-300 transition-opacity ${
              labelsActive ? "opacity-75" : "opacity-0"
            }`}
          >
            Accuracy
          </div>
          <div
            className={`absolute text-xl max-w-40 left-[370px] top-[410px]  translate-y-[-50%] px-4 py-2 rounded-lg bg-indigo-800/30 border border-indigo-400 text-gray-300 transition-opacity  ${
              labelsActive ? "opacity-75" : "opacity-0"
            }`}
          >
            Chars.
          </div>
          <div
            className={`absolute text-xl max-w-40 left-[370px] top-[550px]  translate-y-[-50%] px-4 py-2 rounded-lg bg-indigo-800/30 border border-indigo-400 text-gray-300 transition-opacity ${
              labelsActive ? "opacity-75" : "opacity-0"
            }`}
          >
            Errors
          </div>
          <div
            className={`absolute text-xl max-w-40 left-[1320px] top-[300px]  translate-y-[-50%] px-4 py-2 rounded-lg bg-indigo-800/30 border border-indigo-400 text-gray-300 transition-opacity  ${
              labelsActive ? "opacity-75" : "opacity-0"
            }`}
          >
            Time
          </div>
          <div
            className={`absolute text-xl max-w-40 left-[1300px] top-[555px]  translate-y-[-50%] px-4 py-2 rounded-lg bg-indigo-800/30 border border-indigo-400 text-gray-300 transition-opacity  ${
              labelsActive ? "opacity-75" : "opacity-0"
            }`}
          >
            Speed
          </div>
          <div
            id="accuracy"
            className="absolute text-3xl left-[292px] top-[270px] translate-x-[-50%] translate-y-[-50%] text-white/70  "
          >
            {accuracy}
            <span>%</span>
          </div>
          <div
            id="chars"
            className="absolute text-3xl left-[292px] top-[410px] translate-x-[-50%] translate-y-[-50%] text-violet-400/70  "
          >
            {typedChars.length}
          </div>
          <div
            id="errors"
            className="absolute text-3xl left-[292px] top-[550px] translate-x-[-50%] translate-y-[-50%] text-pink-600/70  "
          >
            {errors}
          </div>
          <div className=" absolute text-gray-400 text-3xl tracking-widest left-1/2 translate-x-[-50%] top-[580px]">
            WPM
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
            <stop offset="0.0408604" stopColor="#dc4eff" />
            <stop offset="0.436563" stopColor="#DD2FCD" />
            <stop offset="1" stopColor="#3827FF" />
          </linearGradient>
          <linearGradient id="accGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0.0408604" stopColor="#e6deff" />
            <stop offset="0.436563" stopColor="#a795cb" />
            <stop offset="1" stopColor="#dec5ff" />
          </linearGradient>
          <linearGradient id="errorGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0.0408604" stopColor="#e65151" />
            <stop offset="0.436563" stopColor="#dd402f" />
            <stop offset="1" stopColor="#ff0000" />
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
          {/* Dashboard Lights */}

          <linearGradient id="paint0_linear_16_23" x1="37" y1="39" x2="-6.5" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor="#110E1E" />
            <stop offset="1" stopColor="#73548B" stopOpacity="0.73" />
          </linearGradient>
          <radialGradient
            id="paint1_radial_16_23"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(17 3.5) rotate(60.9454) scale(20.5913 33.6324)"
          >
            <stop stopColor="#955FCB" />
            <stop offset="1" stopColor="#4E2189" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default FullDashboard;
