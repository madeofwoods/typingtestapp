import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Options from "./Options";

const OptionsMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="absolute top-[28px] md:top-[35px] left-full translate-x-[-80px] md:translate-x-[-120px] ">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer text-white  w-[100px] flex items-center justify-center pb-4"
      >
        {isOpen ? (
          <>
            <IoMdClose size={"1.4rem"} color="white" className=" block md:hidden" />
            <IoMdClose size={"2rem"} color="white" className=" hidden md:block" />
          </>
        ) : (
          <>
            <RxHamburgerMenu size={"1.4rem"} color="white" className=" block md:hidden" />
            <RxHamburgerMenu size={"2rem"} color="white" className=" hidden md:block" />
          </>
        )}
      </div>
      {isOpen ? <Options /> : null}
    </div>
  );
};

export default OptionsMenu;
