
import { useState} from "react";
import CardPopularRepos from "../../components/CardPopularRepos/CardPopularRepos"
import SideComponent from "../../components/Profile/SideComponent/SideComponent"
import Contributions from "../../components/Contributions/Contributions"
import ContributionsNavbar from "../../components/ContributionsNavbar/ContributionsNavbar"
import ContributionsNavbarMobile from "../../api/ContributionsNavbarMobile/ContributionsNavbarMobile"
import ContributionsMenuMobile from "../../components/ContributionsMenuMobile/ContributionsMenuMobile";

//https://api.github.com/users/juanpablo1978
//https://api.github.com/users/juanpablo1978/repos
//https://www.youtube.com/watch?v=1Ytp_M3P6Xc&list=PL3qN4zkM8F8kyGJYKCQXPHQmtBaNzYIex&index=22 


interface OverviewProps {
  toggleClose?: () => void;
  
}


const Overview: React.FC<OverviewProps> = () => {

  const [isClose, setIsClose] = useState(true);

  const toggleClose = () => {
    setIsClose(!isClose);
 
  };



  return (
    <main className="min-h-screen bg-[#0D1117] text-gray-500 lg:flex">
      <section>
      <SideComponent/>
      </section>

      <section className="lg:flex lg:flex-col lg:justify-center">
      <article className="px-4 mt-8 lg:px-0 lg:mt-0">
        <h2 className="text-white font-normal text-[18px] mb-2">Popular repositories</h2>
        <article className="flex flex-col gap-y-4 lg:gap-x-4 justify-center lg:justify-start lg:flex-row lg:flex-wrap">
      
          <CardPopularRepos/>
          <CardPopularRepos/>
          <CardPopularRepos/>
          <CardPopularRepos/>
          <CardPopularRepos/>
          <CardPopularRepos/>
        </article>
      </article>
      <article className="px-4 mt-10 lg:px-0 lg:flex lg:gap-x-9 lg:items-center">
        <div>
      <h3 className="text-white mb-2 text-[16px] font-medium">74 contributions in the last year</h3>
        <Contributions/>
        </div>
        <div className="hidden lg:flex">
        <ContributionsNavbar/>
        </div>
      </article>
      <div className="lg:hidden flex justify-end pr-4 mt-6 cursor-pointer "
      onClick={toggleClose}>
        <ContributionsNavbarMobile/>
      </div>
     
      <div className="z-10 flex justify-end me-4 mt-1">
      {!isClose && <span className="absolute "><ContributionsMenuMobile/></span> }
      </div>
      
      </section>
        </main>
  )
}

export default Overview 