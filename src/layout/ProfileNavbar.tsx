import { FaGithub } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { RiGitRepositoryLine } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";
import { GoPackage } from "react-icons/go";
import { BsWindowSidebar } from "react-icons/bs";

//FALTA EL HOVER DEL MENU

const ProfileNavbar = () => {
  return (
    <nav className="bg-black text-white h-[107px] p-4 border-b-[1px] w-full
     border-gray-600">
        <section className="flex flex-col gap-y-5">
            <article className="flex items-center justify-between">
                <div className="flex  gap-x-4 ">
            <FaGithub className="text-[35px]"/>
            <p className="text-[15px]">juanpablo1978</p>
            </div>
            <div className="flex items-center gap-x-4">
            <div>
                < FaSearch className="absolute right-[71px] bottom-[67px] lg:right-[296px] text-gray-400 text-[15px] "/>
                <input className="w-[27px] h-[27px] lg:w-[255px] lg:h-[31px] rounded-md border-[1px] border-gray-300
                placeholder-transparent lg:placeholder-gray-400 bg-black text-[15px] lg:pl-8"
                 type="text" placeholder="Search repositorie" />
            </div>
            <div className="rounded-full w-[35px] h-[35px] object-cover">
                <img className="w-full h-full rounded-full object-cover" 
                src="src/assets/perfil.png" alt="foto perfil" />
            </div>
            </div>
            </article>
            <article>
                <ul className="flex text-[15px] gap-x-2 lg:gap-x-6 cursor-pointer ">
                    <li className="flex items-center gap-x-2 hover:bg-white/15 background-blur-sm rounded-sm">
                    <IoBookOutline className="text-[18px]" /><p>Overview</p></li>
                <li className="flex items-center gap-x-2 hover:bg-white/15 background-blur-sm">
                    <RiGitRepositoryLine  className="text-[18px]" />
                 <p>Repositories</p> <span className="bg-white/15 background-blur-sm w-6 h-5 rounded-[8px] text-[12px] pl-1 ">12
                 </span></li>
             <li className="items-center gap-x-2 hidden lg:flex hover:bg-white/15 background-blur-sm">
                <BsWindowSidebar className="text-[18px]" /><p>Projets</p></li>
               <li className=" lg:flex hidden items-center  hover:bg-white/15 background-blur-sm gap-x-2">
                    <GoPackage  className="text-[18px] " /> <p>Packages</p></li>
                
                </ul>
            </article>
        </section>
        </nav>
  )
}

export default ProfileNavbar