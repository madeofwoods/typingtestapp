type colorType = "white" | "violet" | "pink";
type topType = 270 | 410 | 550;
type tailwindDictionaryType = Record<colorType | topType, string>;

const SmallCircleText = ({ text, top, color }: { text: string | number; top: topType; color: colorType }) => {
  const tailwindDictionary: tailwindDictionaryType = {
    white: "text-white/70",
    violet: "text-violet-400/90",
    pink: "text-pink-600/80",
    270: "top-[270px]",
    410: "top-[410px]",
    550: "top-[550px]",
  };
  return (
    <div
      id="accuracy"
      className={`absolute text-3xl left-[292px] ${tailwindDictionary[top]} ${tailwindDictionary[color]} translate-x-[-50%] translate-y-[-50%]  `}
    >
      {text}
    </div>
  );
};

export default SmallCircleText;
