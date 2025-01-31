
import Archievements from "../components/Profile/Archievements"
import CardProfile from "../components/Profile/CardProfile"



const Overview = () => {
  return (
    <main className="min-h-screen bg-[#0D1117]">
        <div className="pt-[50px] lg:pt-[47px] px-4 flex flex-col items-center 
        lg:items-start lg:ml-[181px] lg:mb-[25px]">
        <CardProfile/>
        <span className="block w-[320px] lg:w-[300px] h-[0.25px] bg-gray-500
        lg:absolute lg:top-[610px] lg:left-[218px]"></span>
        </div>
        <div className="lg:ml-[205px]">
          <Archievements/>
        </div>
       

        </main>
  )
}

export default Overview 