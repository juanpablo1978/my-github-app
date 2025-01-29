
import CardProfile from "../components/Profile/CardProfile"
import ProfileNavbar from "../layout/ProfileNavbar"


const Overview = () => {
  return (
    <main className="min-h-screen bg-[#0D1117]">
        <div className="absolute top-0 w-full">
            <ProfileNavbar/>
        </div>
        <div className="pt-[160px] px-4 flex flex-col items-center lg:items-start lg:ml-[181px] lg:mb-[90px]">
        <CardProfile/>
        <span className="block w-[320px] lg:w-[310px] h-[1px] bg-gray-500 lg:absolute lg:top-[630px] lg:left-[214px]"></span>
        </div>
       

        </main>
  )
}

export default Overview 