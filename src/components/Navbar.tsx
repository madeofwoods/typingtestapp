import LogoSVG from "./LogoSVG";
import OptionsMenu from "./OptionsMenu";

const Navbar = () => {
  return (
    <div className="w-full h-[120px] flex items-center justify-center tracking-widest text-gray-300 relative">
      <div className="flex items-center justify-center gap-4 text-3xl  ml-auto mr-auto select-none">
        <div className="">type</div>
        <LogoSVG w={40} h={40} />
        <div className="">test</div>
      </div>
      <OptionsMenu />
    </div>
  );
};

export default Navbar;
