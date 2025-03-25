import { useState, useEffect } from "react";


type ComponentType = "A" | "B" | "C"| "D";

const Contributions = () => {

      const [activeComponent, setActiveComponent] = useState<ComponentType>(() => {
      return (localStorage.getItem("activeComponent") as ComponentType) || "A";
    });
  
    useEffect(() => {
      localStorage.setItem("activeComponent", activeComponent);
    }, [activeComponent]);


  return (
    <article className="w-[335px] h-[210px] lg:w-[725px] lg:h-[175px] border-[1px] border-gray-500 rounded-md p-4
     flex flex-col">
      <div className="overflow-x-auto 
       flex h-[140px] items-center text-[12px] font-semibold"
       style={{  scrollbarColor: "#707070 #404040"}}>
      <div className="text-white flex flex-col gap-y-2 mr-1">
        <span>Mon</span>
        <span>Wen</span>
        <span>Fri</span>
      </div>
      <div>
        <div className="flex text-white gap-x-[29px] mb-[1px] lg:gap-x-[35px]">
          <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
        </div>
        <div className="object-cover h-24 w-[575px] lg:w-[645px] ">
          <img className="object-cover w-full h-full" src="src/assets/contributors23.png" alt="contributions" />
        </div>
      </div>
    
      </div>
      <div className="flex text-[11px] gap-x-[3px] items-center mt-2 font-medium lg:justify-between lg:px-4">
        <div>
     <a href="https://docs.github.com/es/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile">
     <p className="mr-[6px] hover:text-blue-500">Learn how we count contributions</p></a> 
      </div>
      <div className="flex gap-x-[3px] items-center">
      <p>Less</p>
      <span className="w-[11px] h-[11px] bg-white/15 background-blur-sm  rounded-sm inline-block"></span>
      <span className="w-[11px] h-[11px] bg-green-950 rounded-sm inline-block"></span>
      <span className="w-[11px] h-[11px] bg-green-800 rounded-sm inline-block"></span>
      <span className="w-[11px] h-[11px] bg-green-600 rounded-sm inline-block"></span>
      <span className="w-[11px] h-[11px] bg-green-400 rounded-sm inline-block"></span>
      <p>More</p>
      </div>
      </div>
      </article>
  )
}

export default Contributions