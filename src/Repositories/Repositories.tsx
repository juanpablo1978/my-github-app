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
    <main className="min-h-screen bg-[#0D1117] text-white">
    {data?.map(repository => (
      <div key={repository.id} >
       <CardRepos repository={repository}
       isFavorite={favoritesRepos.includes(repository.id)} />
      </div>
    ))}
    </main>
  )
}

export default Repositories