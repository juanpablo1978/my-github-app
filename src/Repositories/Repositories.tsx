import CardRepos from "../components/CardRepos";
import SideComponent from "../components/Profile/SideComponent/SideComponent";
import { useFetchRepositories } from "../hooks/useRepos"; //funcion q me permite guardar datos en chache y realizar peticiones
import { useFavoritesReposStore } from "../store/favoriteRepos";


const Repositories = () => {
 
  const {data, isLoading} = useFetchRepositories(); //ejecuto la funcion que importe del hook, con destructuracion, utilizo 2 parametro: datos y valor si esta cargando
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

      <section className="lg:mt-7 mt-5">
      <div className="mb-5">
            <input className="w-[350px] lg:w-[500px] h-[33px] rounded-md border-[0.2px] border-gray-500 
             placeholder-gray-400 bg-[#0D1117] text-[15px] pl-4"
            type="text" placeholder="Find a repository..." />
      </div>

      {data?.map(repository => (
      <div key={repository.id} >
       <CardRepos repository={repository}  /*CON LA PROP repository ESTOY PASANDO descripcion, lenguaje, titulo, ETC*/
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