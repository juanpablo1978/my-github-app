import { IoMdArrowDropdown } from "react-icons/io";

const ContributionsNavbarMobile = () => {
  return (
    <button className="w-28 h-8 rounded-md border-[1px] border-gray-500
    bg-white/15 background-blur-sm flex justify-center items-center">
        <div>
        <p className="text-gray-400">Year: <span className="text-white text-[14px] font-medium">2025</span></p>
        </div>
        <div className="text-white pl-1"><IoMdArrowDropdown/></div>
    </button>
  )
}

export default ContributionsNavbarMobile