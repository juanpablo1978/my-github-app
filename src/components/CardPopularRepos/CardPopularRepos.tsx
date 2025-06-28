import { IconType } from "react-icons";



interface CardPopularProps {
 
    
    title: string;
    visibility: string;
    description: string;
    language: string;
    icon: IconType;
      iconClassName?: string;
  }
  

const CardPopularRepos: React.FC<CardPopularProps>  = ({title, visibility, description, language, icon: Icon, iconClassName}) => {
  return (
   <article className="w-[355px] h-[120px] lg:w-[435px] border-[1px] border-gray-500 rounded-md p-3">
    <div className="flex justify-between mb-3">
        <h3 className="text-blue-500 font-normal text-[15px]">
            {title}
        </h3>
        <h4 className="text-[11px] border-[1px] border-gray-500 rounded-[12px] font-semibold px-[6px] py-[1px]">
            {visibility}
        </h4>
    </div>
    <p className="mb-3 text-[13px]">{description}</p>

    <div className="flex items-center gap-x-1">
    <span><Icon className={ iconClassName ||"w-3 h-3 text-yellow-300" }/></span><p className="text-[13px]">{language}</p>
    </div>

   </article>
  )
}

export default CardPopularRepos