import CardRepos from "../components/CardRepos";
import SideComponent from "../components/Profile/SideComponent/SideComponent";
import { useFetchRepositories } from "../hooks/useRepos";
import { useFavoritesReposStore } from "../store/favoriteRepos";



const Repositories = () => {

  const {data, isLoading} = useFetchRepositories();
const favoritesRepos =  useFavoritesReposStore(
  (state)=> state.favoritesReposIds
);

  if (isLoading) return <div className="min-h-screen bg-[#0D1117] text-white">
    Loading...
    </div>  

  return (
    <main className="min-h-screen bg-[#0D1117] text-white lg:flex  px-4">
      <section className="">
        <SideComponent/>
      </section>
      <section className="lg:mt-20">
      {data?.map(repository => (
      <div key={repository.id} >
       <CardRepos repository={repository}
       isFavorite={favoritesRepos.includes(repository.id)} />
      </div>
    ))}
    <span className="block w-[333px] lg:w-[860px] h-[2px] lg:h-[1px] bg-gray-500
        "></span>
      </section>

    </main>
  )
}

export default Repositories