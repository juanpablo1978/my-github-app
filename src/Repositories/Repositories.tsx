import CardRepos from "../components/CardRepos";
import { useFetchRepositories } from "../hooks/useRepos";
import { useFavoritesReposStore } from "../store/favoriteRepos";


const Repositories = () => {

  const {data, isLoading} = useFetchRepositories();
const favoritesRepos =  useFavoritesReposStore(
  (state)=> state.favoritesReposIds
);

  if (isLoading) return <div>Loading...</div>  

  return (
    <div>
    {data?.map(repository => (
      <div key={repository.id} >
       <CardRepos repository={repository}
       isFavorite={favoritesRepos.includes(repository.id)} />
      </div>
    ))}
    </div>
  )
}

export default Repositories