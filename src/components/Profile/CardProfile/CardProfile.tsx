import { RiGroupLine } from "react-icons/ri";
import fotoPerfil from "../../../assets/perfil.png"

const CardProfile = () => {
  return (
    <section className=" w-full h-[130px] lg:w-[350px] lg:h-[450px]">
        <article className="flex items-center lg:flex-col text-white bg-[#0D1117] gap-x-4">
            <div className="rounded-full w-[60px] h-[60px] lg:w-[300px] lg:h-[300px] object-cover 
             border-[3px] border-gray-700 lg:mb-4">
                <img className="w-full h-full rounded-full object-cover" 
                 src={fotoPerfil} alt="foto perfil" />
            </div>
            <div className="lg:text-start">
            <h2 className="font-bold text-[20px] lg:text-[25px] text-gray-300">
              Juan Pablo Andrujovich
              </h2>
            <h3 className="text-[19px] text-gray-400 font-thin">juanpablo1978</h3>
            </div>
        </article>
        <article className="flex text-gray-400 items-center gap-x-[6px] font-thin mt-5 lg:mt-[9px] lg:justify-center">
          <div>
          <RiGroupLine/>
          </div>
          <div className="flex gap-x-2 lg:pr-[101px]">
            <div className="flex gap-x-1"><span className="font-semibold text-white">6</span>followers</div>
            <div className="flex gap-x-1"><span className="font-semibold text-white">9</span>following</div>
          </div>
        </article>
    </section>
  )
}

export default CardProfile