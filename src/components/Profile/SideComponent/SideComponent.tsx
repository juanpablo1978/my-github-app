
import Archievements from "../Archievements/Archievements"
import CardProfile from "../CardProfile/CardProfile"
import Organizations from "../Organizations/Organizations"

const SideComponent = () => {
  return (
    <main className="min-h-screen bg-[#0D1117] text-white">
     <article>
        <div className="pt-[50px] lg:pt-[47px] px-4 flex flex-col items-center 
        lg:items-start lg:ml-[181px] lg:mb-[25px]">
        <CardProfile/>
        <span className="block w-[320px] lg:w-[280px] h-[0.25px] bg-gray-500
        lg:absolute lg:top-[610px] lg:left-[233px]"></span>
        </div>
        <div className="lg:ml-[205px]">
          <Archievements/>
        </div>
        <span className="lg:block hidden w-[320px] lg:w-[280px] h-[0.25px] bg-gray-500
        lg:absolute lg:top-[757px] lg:left-[233px]"></span>
        <div className="hidden lg:flex ml-[205px] mt-10 w-60">
          <Organizations/>
        </div>
        </article>
        <article>
          
        </article>
        </main>
  )
}

export default SideComponent