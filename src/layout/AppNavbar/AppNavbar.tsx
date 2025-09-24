import { FaGithub, FaSearch } from "react-icons/fa";
import { RiGitRepositoryLine } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";
import { GoPackage } from "react-icons/go";
import { BsWindowSidebar } from "react-icons/bs";
import {  NavLink, useLocation } from "react-router-dom";



//FALTA EL HOVER DEL MENU

const AppNavbar = () => {

    const pages = [
        { name: "Overview", path: "/Overview", icon: <IoBookOutline/> },
        { name: "Repositories", path: "/Repositories", icon: <RiGitRepositoryLine/> },
        { name: "Projects", path: "/Projects", icon: <BsWindowSidebar/>},
        { name: "Packages", path: "/Packages", icon: <GoPackage/> },
      ];

      
    const pagesMobile = [
        { name: "Overview", path: "/Overview", icon: <IoBookOutline/> },
        { name: "Repositories", path: "/Repositories", icon: <RiGitRepositoryLine/> },
      ];

      const location = useLocation()

  return (
    <section className="bg-black text-white h-[107px] p-4 border-b-[1px] w-full
     border-gray-600">
    
        <article className="flex flex-col gap-y-5">
            <div className="flex items-center justify-between">
                <div className="flex  gap-x-4 ">
            <FaGithub className="text-[35px]"/>
            <p className="text-[15px]">juanpablo1978</p>
            </div>
            <div className="flex items-center gap-x-4">
            <div>
                < FaSearch className="absolute right-[71px] bottom-[803px] lg:right-[298px] lg:bottom-[709px]
                 text-gray-400 text-[15px] "/>
                <input className="w-[27px] h-[27px] lg:w-[255px] lg:h-[31px] rounded-md border-[1px] border-gray-300
                placeholder-transparent lg:placeholder-gray-400 bg-black text-[15px] lg:pl-8"
                 type="text" placeholder="Search repositorie" />
            </div>
            <div className="rounded-full w-[35px] h-[35px] object-cover">
                <img className="w-full h-full rounded-full object-cover" 
                 src="/images/perfil.png" alt="foto perfil" />
            </div>
            </div>
            </div>
            
            <nav>
                  <ul className="lg:flex text-[15px] gap-x-2 lg:gap-x-6 cursor-pointer hidden">
              {pages.map((page, index) => (
                <li className="flex items-center pb-3 gap-x-2 hover:bg-white/15 background-blur-sm rounded-sm" key={index}>
                  <NavLink
                    to={page.path}
                    className={({isActive}) => isActive && location.pathname === "/Overview" ? ("border-b-[2px] border-orange-400 px-2  cursor-pointer")
                    : isActive && location.pathname === "/Repositories" ? ("border-b-[2px] border-orange-400 px-2 cursor-pointer")
                    : isActive && location.pathname === "/Projects" ? ("border-b-[2px] border-orange-400 px-2 cursor-pointer")
                    : isActive && location.pathname === "/Packages" ? ("border-b-[2px] border-orange-400 px-2 cursor-pointer") : "cursor-pointer px-2"}
                    >
                 <div className="flex items-center gap-x-2 pb-3">{page.icon} {page.name}</div>

                  {/* En caso de agregarse mas rutas con distintos estilos de navbar, es acá donde hay que trabajar*/}
                  </NavLink>
                </li>
              
                ))}
            </ul>
                 <ul className="flex text-[15px] gap-x-2 lg:gap-x-6 cursor-pointer lg:hidden">
              {pagesMobile.map((page, index) => (
                <li className="flex items-center pb-3 gap-x-2 hover:bg-white/15 background-blur-sm rounded-sm" key={index}>
                  <NavLink
                    to={page.path}
                    className={({isActive}) => isActive && location.pathname === "/Overview" ? ("border-b-[2px] border-orange-400 px-2  cursor-pointer")
                    : isActive && location.pathname === "/Repositories" ? ("border-b-[2px] border-orange-400 px-2 cursor-pointer") : "cursor-pointer px-"}
                    >
                 <div className="flex items-center gap-x-2 pb-3">{page.icon} {page.name}</div>

                  {/* En caso de agregarse mas rutas con distintos estilos de navbar, es acá donde hay que trabajar*/}
                  </NavLink>
                </li>
              
                ))}
            </ul>
            </nav>
        </article>
        </section>
  )
}

export default AppNavbar