import { FaGithub } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const HomeNavbar = () => {
  return (
    <section className=" text-white sm:hidden bg-[#000041] gap-x-[100px] lg:block mt-4">

         <article className="flex items-center gap-x-[530px] justify-evenly">
        
         <article className="flex gap-x-3 font-normal justify-between">
         <FaGithub className="cursor-pointer text-[36px] mr-3" />
            <div className="flex items-center gap-x-1">
                Product
                <IoChevronDown />
            </div >
            <div className="flex items-center gap-x-1">
                Solutions
                <IoChevronDown />
            </div >
            <div className="flex items-center gap-x-1">
                Resources
                <IoChevronDown />
            </div >
            <div className="flex items-center gap-x-1">
                Open Sources
            <IoChevronDown />
            </div>
            <div className="flex items-center gap-x-1">
                Enterprice
                <IoChevronDown />
                </div>
            <div className="flex items-center gap-x-1">
                Pricing
                <IoChevronDown />
            </div>
         </article>

         <article className="flex items-center gap-x-5">
            <div className="flex">
                < CiSearch className="absolute right-[435px] bottom-[9px] text-gray-100 text-[20px] "/>
                <input className="w-[295px] h-[30px] rounded-md text-white pl-[34px] bg-transparent
                border-[2px] border-white" 
                type="text" placeholder="Search or jump to ..." />
            </div>
            <button className="text-[15px]">
        Sign in
      </button>
            <button className="text-[15px] rounded-md border-[2px] border-white w-20 h-9">
        Sign up
      </button>
         </article>

         </article>
    </section>
  )
}

export default HomeNavbar