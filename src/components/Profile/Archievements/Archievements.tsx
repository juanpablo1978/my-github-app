import { useState } from "react";
import PullSharkCard from "../../PullSharkCard/PullSharkCard";
import YoloCard from "../../YoloCard/YoloCard";


//https://chatgpt.com/c/67ac9023-bc18-800e-a609-5e3824c7e9e4

interface OverviewProps {
  toggleClose?: () => void;
  
}

const Archievements: React.FC<OverviewProps> = () => {

  const [isClose, setIsClose] = useState(true);

  const toggleClose = (e) => {
    e.stopPropagation();
    setIsClose(!isClose);
  };

  return (
    <div className="text-white text-[16px] font-semibold py-4 lg:py-0 pl-3 lg:pl-7 lg:w-56">
    <h3 className="mb-3">Achievements</h3>
    <div className="flex gap-x-[1px]">

<div
><div>
    <div  className="rounded-full w-[62px] h-[62px] lg:w-[68px] lg:h-[68px] object-cover cursor-pointer
       border-[3px] border-gray-700 lg:mb-4"
       onMouseEnter={toggleClose}
       onMouseLeave={toggleClose}
      >
      <img className="w-full h-full rounded-full object-cover"
       src="src/assets/insignia.png" alt="insignia" />
    </div>
   
      {!isClose && <span className="absolute top-[418px] lg:top-[750px] z-10 "
       
       onMouseEnter={toggleClose}
       onMouseLeave={toggleClose}><PullSharkCard/></span> }
      </div>
      </div>
    <div
    >
    <div  className="rounded-full w-[62px] h-[62px] lg:w-[68px] lg:h-[68px] object-cover cursor-pointer
       border-[3px] border-gray-700 lg:mb-4"
       onMouseEnter={() =>  setIsClose(false)}
       onMouseLeave={() => setIsClose(true)}
      >
      <img className="w-full h-full rounded-full object-cover"
       src="src/assets/yolo.png" alt="yolo" />
    </div>
    
    {!isClose && <span className="absolute top-[418px] lg:top-[750px] z-10 "
       onMouseEnter={(e) => e.stopPropagation()}
       onMouseLeave={() => setIsClose(true)}><YoloCard/></span> }
</div>
    </div>
    <div className="w-[33px] h-[22px] text-black bg-red-200 rounded-[12px] cursor-pointer
     flex justify-center items-center text-[11px] absolute left-[50px] top-96 lg:left-[264px] lg:top-[712px]">
      <p>x2</p>
    </div>
  </div>
  )
}

export default Archievements