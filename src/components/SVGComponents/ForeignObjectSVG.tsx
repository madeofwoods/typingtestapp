import { useContext, useState } from "react";
import ButtonsSVG from "./ButtonsSVG";
import LabelsSVG from "./LabelsSVG";
import { GlobalContext, GlobalContextType } from "../../context/GlobalContextProvider";
import SmallCircleText from "./SmallCircleText";

type ForeignObjectSVGProps = {
  wpm: number;
  timeRemaining: number;
  accuracy: number;
  errors: number;
};
const ForeignObjectSVG = ({ wpm, timeRemaining, accuracy, errors }: ForeignObjectSVGProps) => {
  const [labelsActive, setLabelsActive] = useState<boolean>(false);
  const { typedChars } = useContext(GlobalContext) as GlobalContextType;
  return (
    <foreignObject x={0} y={0} width={"100%"} height={"100%"} className=" relative select-none ">
      <body className="fixed w-full h-full">
        <ButtonsSVG setLabelsActive={setLabelsActive} />
        <div className=" text-gray-100/80 text-7xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[40px] text-left tracking-widest ">
          {wpm.toFixed(0).padStart(3, "0")}
        </div>
        <div className="absolute text-6xl left-[1200px] top-[300px] translate-x-[-50%] translate-y-[-50%] text-white/70  ">
          {timeRemaining.toFixed(0)}
        </div>
        <LabelsSVG label={"Accuracy"} labelsActive={labelsActive} left={370} top={270} />
        <LabelsSVG label={"Chars."} labelsActive={labelsActive} left={370} top={410} />
        <LabelsSVG label={"Errors"} labelsActive={labelsActive} left={370} top={550} />
        <LabelsSVG label={"Time"} labelsActive={labelsActive} left={1320} top={300} />
        <LabelsSVG label={"Speed"} labelsActive={labelsActive} left={1300} top={555} />
        <SmallCircleText text={`${accuracy}%`} top={270} color="white" />
        <SmallCircleText text={typedChars.length} top={410} color="violet" />
        <SmallCircleText text={errors} top={550} color="pink" />
        <div className=" absolute text-gray-400 text-3xl tracking-widest left-1/2 translate-x-[-50%] top-[580px]">
          WPM
        </div>
      </body>
    </foreignObject>
  );
};

export default ForeignObjectSVG;
