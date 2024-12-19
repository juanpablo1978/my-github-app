import { Repository } from "../hooks/types"
import { FaStar,FaRegStar } from "react-icons/fa";
import { useFavoritesReposStore } from "../store/favoriteRepos";



interface CardProps{
    repository: Repository,
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
    <>
    <h1>{repository.name}</h1>
    <button
    onClick={toggleFavorite} >
      {
        isFavorite? <FaRegStar />  : <FaStar className="text-yellow-500" />
      }
    </button>
    </>
  )
}

export default CardRepos