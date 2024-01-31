import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Options from "./Options";

const OptionsMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="absolute top-[35px] left-full translate-x-[-100px] md:translate-x-[-120px] ">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer text-white  w-[100px] flex items-center justify-center pb-4 overflow-hidden"
      >
        {isOpen ? <IoMdClose size={"2rem"} color="white" /> : <RxHamburgerMenu size={"2rem"} color="white" />}
      </div>
      {isOpen ? <Options /> : null}
    </div>
  );
};

export default OptionsMenu;
