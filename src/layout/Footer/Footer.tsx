import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
   <section className="text-center text-[12px] h-[160px] text-gray-400 pt-9 lg:pt-0
   px-[17px] bg-[#0D1117] w-full">

  <article className="flex justify-center items-center gap-x-5">
    <div className=" hidden lg:flex justify-center items-center gap-x-2 lg:mt-[85px]">
  <div className="text-[25px]"><FaGithub/></div>  
  <p>© 2025 GitHub, Inc</p>
    </div>
<div>
<ul className="flex flex-wrap gap-x-[15px] justify-center lg:mt-[85px]">
  <li>Terms </li>
  <li>Privacy</li>
  <li>Docs</li>
  <li>Contact GitHub Support</li>
  <li>Manage cookies </li>
  <li> Do not share my personal information</li>
</ul>
</div>
</article>

<article className="flex items-center gap-x-2 justify-center pt-4 lg:hidden">
<div className="text-[25px]"><FaGithub/></div> 
 <p>© 2025 GitHub, Inc</p>
</article>
</section>
 
  )
}

export default Footer