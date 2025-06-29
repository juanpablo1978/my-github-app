import { TfiCup } from "react-icons/tfi";
import { FaCircle } from "react-icons/fa6";
import yolo from "../../assets/yolo.png"

const YoloCard = () => {
  return (
    <section className="w-[350px] h-[384px] rounded-lg
        border-[1px] border-gray-500 flex flex-col justify-center items-center ">
           <article className="w-[347px] h-[182px]  rounded-t-lg flex justify-center items-center bg-red-200 ">
           <div  className="rounded-full w-[135px] h-[135px] object-cover cursor-pointer">
         <img className="w-full h-full rounded-full object-cover"
          src={yolo} alt="yolo" />
       </div>
           </article>
           <article className="w-[347px] h-[278px] bg-[#101620] rounded-b-lg px-3">
             <div className="flex items-center gap-x-2">
             <h3 className="my-3 text-[20px] font-semibold">Yolo</h3>
       </div>
       <p className="text-[14px] font-normal">You want it? You merge it.</p>
   
          <span className=" w-[320px] h-[1px] bg-gray-500 inline-block"></span>
   
          <h4 className="text-[14px] font-medium text-gray-500 mb-4 mt-2">History</h4>
   
          <div className="flex gap-x-2">
           <div className="flex flex-col justify-center items-center text-gray-500 mb-9">
           <TfiCup className="text-[16px]" />
           <div className="w-px h-[15px] bg-gray-500"></div>
           <FaCircle className="text-[9px]" />
           </div>
   
           <div className="text-[12px] text-gray-500 flex flex-col gap-y-2">
            <p><span className="text-green-500">100% unlocked </span> ·Unlocked on Aug 28, 2023 </p>
            <p><span className="text-blue-500">No-Country/c13-26-m-node-react#6</span> · Merged without
            <br />
             a review</p>
           </div>
          </div>
           </article>
           </section>
  )
}

export default YoloCard