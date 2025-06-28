import { IconType } from "react-icons";

interface CardPackagesProps {
 
  icon: IconType;
   iconClassName?: string;
  title: string;
  description: string;
  link: string
}


const CardPackages: React.FC<CardPackagesProps> = ({icon: Icon, title, description, link, iconClassName}) => {
  return (
    <article className="w-[160px] h-[322px] border-[1px] border-gray-500 rounded-md mb-6 lg:mb-0
    lg:w-[287px] lg:h-[188px]">
    <div className="flex flex-wrap items-center justify-center gap-x-2 mb-7 mt-5 lg:justify-start lg:mb-[8px]
    lg:ml-7">
        <Icon className={iconClassName || "w-6 h-6 text-gray-500"} />
        <h3 className="text-white text-[22px] font-semibold">{title}</h3>
    </div>
    <div className="flex flex-col justify-center px-6">
    <p className="text-start text-[12px]">
    {description}
    </p>
    <button className="text-[12px] rounded-md border-[1px] border-gray-500 lg:mt-4
     text-white w-[91px] h-[30px] mt-[40px] font-semibold bg-white/15 background-blur-sm">
      <a href={link}>
        Learn more</a>
    </button>
    </div>
    </article>
  )
}

export default CardPackages