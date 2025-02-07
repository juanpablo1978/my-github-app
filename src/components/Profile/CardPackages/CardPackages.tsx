import { FaDocker} from "react-icons/fa";

const CardPackages = () => {
  return (
    <article className="w-[160px] h-[322px] border-[1px] border-gray-500 rounded-md mb-12 lg:mb-0
    lg:w-[287px] lg:h-[188px]">
    <div className="flex flex-wrap items-center justify-center gap-x-2 mb-7 mt-5 lg:justify-start lg:mb-[8px]
    lg:ml-7">
        <FaDocker className="text-[17px] text-blue-600"/>
        <h3 className="text-white text-[22px] font-semibold">Docker</h3>
    </div>
    <div className="flex flex-col justify-center px-6">
    <p className="text-start text-[12px]">
    A software platform
     used for building
      applications based
       on containers —
        small and
         lightweight
          execution
           environments.
    </p>
    <button className="text-[12px] rounded-md border-[1px] border-gray-500 lg:mt-4
     text-white w-[91px] h-[30px] mt-[40px] font-semibold bg-white/15 background-blur-sm">
        Learn more
    </button>
    </div>
    </article>
  )
}

export default CardPackages