import { useContext } from "react";
import { GlobalContext, GlobalContextType } from "../../context/GlobalContextProvider";
import image from "../../assets/undo-arrow.png";

const ButtonsSVG = ({ setLabelsActive }: { setLabelsActive: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { setGameState } = useContext(GlobalContext) as GlobalContextType;
  return (
    <>
      <div
        onClick={() => setGameState("reset")}
        className=" cursor-pointer text-gray-100/80 text-2xl top-[95px] translate-x-[-50%]  left-[780px] absolute bg-indigo-800/30 w-14 h-14 rounded-lg flex items-center justify-center border-violet-700 border-2 hover:border-violet-500 hover:bg-indigo-700/30"
      >
        <img src={image} width={30} height={30} className=" invert-[60%]" />
      </div>
      <div
        onMouseEnter={() => setLabelsActive(true)}
        onMouseLeave={() => setLabelsActive(false)}
        className=" absolute left-[680px] top-[95px] w-14 h-14 bg-indigo-900/30  border-violet-700 border-2 hover:border-violet-500 hover:bg-indigo-700/30 rounded-lg text-3xl flex items-center justify-center font-light text-gray-300/80 hover:text-gray-300 cursor-pointer"
      >
        ?
      </div>
    </>
  );
};

export default ButtonsSVG;
