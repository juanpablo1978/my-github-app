import { IoMenu } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const HomeNavbarMobile = () => {
  return (
    <div className="flex items-center justify-between text-white
     lg:hidden bg-[#000041] gap-x-[100px] text-[33px]
    mt-11">
      <IoMenu className="cursor-pointer" />
      <FaGithub className="cursor-pointer" />
      <button className="text-[18px] rounded-md border-[2px] border-white w-20 h-9">
        Sign in
      </button>
    </div>
  )
}

export default HomeNavbarMobile