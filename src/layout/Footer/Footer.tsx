import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
   <section className="text-center text-[12px] h-[195px] lg:h-[345px] text-gray-400 pt-9 lg:pt-0
   px-[17px] bg-[#0D1117] w-full">

  <article className="flex justify-center items-center gap-x-5">
    <div className=" hidden lg:flex justify-center items-center gap-x-2 lg:mt-[250px]">
  <div className="text-[25px]"><FaGithub/></div>  
  <p>© 2025 GitHub, Inc</p>
    </div>
<div>
<ul className="flex flex-wrap gap-x-[15px] justify-center lg:mt-[250px] cursor-pointer">
<a href="https://docs.github.com/es/site-policy/github-terms/github-terms-of-service">
<li className="hover:underline hover:text-blue-500">Terms </li></a> 
<a href="https://docs.github.com/es/site-policy/privacy-policies/github-general-privacy-statement">
 <li className="hover:underline hover:text-blue-500">Privacy</li></a> 
<a href="https://github.com/security">
<li className="hover:underline hover:text-blue-500">Security</li></a>  
<a href="https://www.githubstatus.com/">
<li className="hover:underline hover:text-blue-500">Status</li></a>  
<a href="https://docs.github.com/es">
<li className="hover:underline hover:text-blue-500">Docs</li></a>  
<a href="https://support.github.com/?tags=dotcom-footer">
<li className="hover:underline hover:text-blue-500">Contact</li></a>  
<a href="https://github.com/juanpablo1978">
<li className="hover:underline hover:text-blue-500">Manage cookies</li></a>  
<a href="https://github.com/">
<li className="hover:underline hover:text-blue-500">Do not share my personal information</li></a>  
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