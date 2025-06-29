import { TfiCup } from "react-icons/tfi";
import { FaCircle } from "react-icons/fa6";
import pullShark from "../../assets/insignia.png"

const PullSharkCard = () => {
  return (
    <section className="w-[350px] h-[464px] rounded-lg bg-[#101620] bg-gradient-to-b
      from-blue-600 via-blue-900 to-white
     border-[1px] border-gray-500 flex flex-col justify-center items-center ">
        <article className="w-[347px] h-[182px]  rounded-t-lg flex justify-center items-center
">
        <div  className="rounded-full w-[135px] h-[135px] object-cover cursor-pointer
      lg:mb-4">
      <img className="w-full h-full rounded-full object-cover"
       src={pullShark} alt="pullshark" />
    </div>
        </article>
        <article className="w-[347px] h-[278px] bg-[#101620] rounded-b-lg px-2">
          <div className="flex items-center gap-x-2">
          <h3 className="my-3 text-[20px] font-semibold">Pull Shark</h3>
          <div className="w-[33px] h-[20px] text-black bg-red-200 rounded-[12px] 
     flex justify-center items-center text-[11px]">
      <p>x2</p>
    </div>
    </div>
    <p className="text-[14px] font-normal">@juanpablo1978 opened pull requests that have
      <br />
       been merged.</p>

       <span className=" w-[320px] h-[1px] bg-gray-500 inline-block"></span>

       <h4 className="text-[14px] font-medium text-gray-500 mb-3 mt-1">History</h4>

       <div className="flex gap-x-2">
        <div className="flex flex-col justify-center items-center text-gray-500 mb-9">
        <TfiCup className="text-[16px]" />
        <div className="w-px h-[15px] bg-gray-500"></div>
        <FaCircle className="text-[9px]" />
        <div className="w-px h-[32px] bg-gray-500"></div>
        <FaCircle className="text-[9px]" />
        </div>

        <div className="text-[12px] text-gray-500 flex flex-col gap-y-2">
         <p>Bronze unlocked · First unlocked on Jun 14, 2023</p>
         <p><span className="text-blue-500">Aikodev-labs/Ghibli-API-platform#16</span> · 2nd pull request
          <br />
           merged</p>
         <p><span className="text-blue-500">Aikodev-labs/Ghibli-API-platform#106</span> · 16th pull
          <br />
           request merged</p>
        </div>
       </div>
        </article>
        </section>
  )
}

export default PullSharkCard