import { Repository } from "../hooks/types" //IMPORTO LOS DATOS DE LA API PARA LA CARD
import { FaStar,FaRegStar } from "react-icons/fa";
import { useFavoritesReposStore } from "../store/favoriteRepos";

//como como darle color al circulo de languaje
//https://chatgpt.com/c/67a3e446-d358-800e-aa04-a8e1252a898a 

interface CardProps{
    repository: Repository, //EL TIPO DE DATO DE repository es Repository, porque ya tengo todo tipado desde types.ts
    isFavorite: boolean
}

const CardRepos = ({repository, isFavorite}: CardProps) => {

 const addFavoriteRepo =  useFavoritesReposStore(state=> state.addFavoriteRepo);
 const removeFavoriteRepo =  useFavoritesReposStore(state=> state.removeFavoriteRepo);

 const toggleFavorite = ()=> {
    if (isFavorite) {
      removeFavoriteRepo(repository.id);
      return;
    }
    addFavoriteRepo(repository.id)
 };

  return (
    
    <article className="border-t-[1px] border-gray-500 flex text-gray-500 lg:pl-0
     py-8 text-[15px] px-[8px] font-normal justify-between lg:w-[860px]">
      <div>
        <div className="flex gap-x-3 items-center mb-2">
    <h1 className="text-blue-500 text-[19px] font-bold">{repository.name}</h1>
    <h4 className="w-12 h-5 rounded-[8px] border-[1px] border-gray-500 pl-[5px] pb-[6px] text-[13px] font-bold">
      {repository.owner.user_view_type}
      </h4>
    </div>
    <p className="pr-[85px]">{repository.description}</p>
    <div className="flex gap-x-3 mt-3 text-[12px]">
    <h4>{repository.language}</h4>
    <h4>Updated {repository.updated_at}</h4>
    </div>
    </div>
    <div className="flex items-center">
    <button className="w-[85px] h-[28px] rounded-md border-[1px] border-gray-500 flex
     items-center gap-x-3 px-3 py-1 bg-white/15 background-blur-sm "
    onClick={toggleFavorite} >
      {
        isFavorite? <FaRegStar />  : <FaStar className="text-yellow-500 text-[18px]" />
      }
       <p className="text-white font-semibold">Star</p>
    </button>
   
    </div>
    </article>
    
  )
}

export default CardRepos