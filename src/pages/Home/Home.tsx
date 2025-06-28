import HomeNavbar from "../../layout/HomeNavbar/HomeNavbar"
import HomeNavbarMobile from "../../layout/HomeNavbarMovile/HomeNavbarMobile"
import { useNavigate } from "react-router-dom";


const Home = () => {

  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#000041] bg-opacity-100 flex justify-center
     items-center flex-col">
      <HomeNavbarMobile/>
      <div className="absolute top-0 hidden lg:block">
      <HomeNavbar />
      </div>
        <h1 className="text-white text-[45px] lg:text-[68px] font-bold mt-[110px] lg:mt-0
        leading-[50px] lg:leading-[80px] text-center  lg:max-w-[1400px]">
          Build and ship software on a
            <br />
             single, collaborative platform</h1>
             <h3 className="text-white text-[20px] my-7 font-medium text-center mt-12 lg:mt-6
             mb-4 max-w-[330px] lg:max-w-[1400px]">
                Join the world’s most widely adopted AI-powered developer platform.
             </h3>
              <article className=" flex flex-col lg:flex-row flex-wrap justify-center items-center
           ">
               
              <input type="text" className="bg-white text-[22px] lg:text-[18px] text-gray-900 w-[346px] h-[115px]
              lg:h-[55px] lg:w-[515px] rounded-md pl-3 relative pb-16 mt-4 lg:mr-[230px] lg:pb-2"
              placeholder="Enter your email"/>
              <button className="w-[336px] h-[57px] lg:w-[209px] lg:h-[48px] bg-green-700 hover:bg-green-800 text-white
              font-semibold text-[22px] lg:text-[18px] rounded-md absolute right-[26px] bottom-[105px] 
               lg:right-[718px] lg:bottom-[227px] "
                  onClick={() => navigate("/overview")}>
                Sign in for GitHub
                </button>
                
              <button className="w-[343px] lg:w-[209px] lg:h-[51px] h-[64px] bg-[#000038] text-white font-semibold
               text-[22px] lg:text-[18px] lg:absolute lg:left-[1018px] lg:top-[455px]
               rounded-md border-2 border-white mt-4">Try GitHub Copilot</button>
              </article>
              
        </main>
  )
}

export default Home