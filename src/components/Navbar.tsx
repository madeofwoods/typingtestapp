import LogoSVG from "./SVGComponents/LogoSVG";
import OptionsMenu from "./OptionsMenu";

const Navbar = () => {
  return (
    <div className="w-full h-[80px] md:h-[120px] flex items-center justify-center tracking-widest text-gray-300 relative z-40">
      <div className="flex items-center justify-center gap-4 text-xl md:text-3xl  ml-auto mr-auto select-none">
        <div className="">type</div>
        <LogoSVG />
        <div className="">test</div>
      </div>
      <OptionsMenu />
    </div>
  );
};

export default Navbar;
