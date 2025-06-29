import { useState } from "react";
import PullSharkCard from "../../PullSharkCard/PullSharkCard";
import YoloCard from "../../YoloCard/YoloCard";
import insignia from "../../../../assets/INSIGNIA.png"
import yoloInsignia from "../../../../assets/yolo.png"




interface OverviewProps {
  toggleClose?: () => void;
  
}

const Archievements: React.FC<OverviewProps> = () => {

   const [isPullSharkOpen, setIsPullSharkOpen] = useState(false);
  const [isYoloOpen, setIsYoloOpen] = useState(false);

  return (
    <div className="text-white text-[16px] font-semibold py-4 lg:py-0 pl-3 lg:pl-7 lg:w-56">
    <h3 className="mb-3">Achievements</h3>
    <div className="flex gap-x-[1px]">

 {/* PullShark Badge */}
        <div>
          <div
            className="rounded-full w-[62px] h-[62px] lg:w-[68px] lg:h-[68px] object-cover cursor-pointer
              border-[3px] border-gray-700 lg:mb-4"
            onMouseEnter={() => setIsPullSharkOpen(true)}
            onMouseLeave={() => setIsPullSharkOpen(false)}
          >
            <img className="w-full h-full rounded-full object-cover"
              src={insignia} alt="insignia" />
          </div>

          {isPullSharkOpen && (
            <span
              className="absolute top-[418px] lg:top-[750px] z-10"
              onMouseEnter={() => setIsPullSharkOpen(true)}
              onMouseLeave={() => setIsPullSharkOpen(false)}
            >
              <PullSharkCard />
            </span>
          )}
        </div>

        {/* Yolo Badge */}
        <div>
          <div
            className="rounded-full w-[62px] h-[62px] lg:w-[68px] lg:h-[68px] object-cover cursor-pointer
              border-[3px] border-gray-700 lg:mb-4"
            onMouseEnter={() => setIsYoloOpen(true)}
            onMouseLeave={() => setIsYoloOpen(false)}
          >
            <img className="w-full h-full rounded-full object-cover"
              src={yoloInsignia} alt="yolo" />
          </div>

          {isYoloOpen && (
            <span
              className="absolute top-[418px] lg:top-[750px] z-10"
              onMouseEnter={() => setIsYoloOpen(true)}
              onMouseLeave={() => setIsYoloOpen(false)}
            >
              <YoloCard />
            </span>
          )}
        </div>
      </div>

      <div className="w-[33px] h-[22px] text-black bg-red-200 rounded-[12px] cursor-pointer
        flex justify-center items-center text-[11px] absolute left-[50px] top-96 lg:left-[264px] lg:top-[712px]">
        <p>x2</p>
      </div>
    </div>
  );
}

export default Archievements