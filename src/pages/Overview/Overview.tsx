
import CardPopularRepos from "../../components/CardPopularRepos/CardPopularRepos";
import SideComponent from "../../components/Profile/SideComponent/SideComponent";

import { popularRepositories } from "../../Data/Data";
import ContributorsSection from "../../components/ContributorsSection/ContributorsSection";

//https://api.github.com/users/juanpablo1978
//https://api.github.com/users/juanpablo1978/repos
//https://www.youtube.com/watch?v=1Ytp_M3P6Xc&list=PL3qN4zkM8F8kyGJYKCQXPHQmtBaNzYIex&index=22
//https://chatgpt.com/c/685d2e22-a404-800e-b478-54b22ed82528



const Overview: React.FC = () => {
 

  return (
    <main className="min-h-screen bg-[#0D1117] text-gray-500 lg:flex">
      <section>
        <SideComponent />
      </section>

      <section className="lg:flex lg:flex-col lg:justify-center">
        <article className="px-4 mt-8 lg:px-0 lg:mt-0">
          <h2 className="text-white font-normal text-[18px] mb-2">
            Popular repositories
          </h2>
          <article className="flex flex-col gap-y-4 lg:gap-x-4 justify-center lg:justify-start lg:flex-row lg:flex-wrap">
            {popularRepositories.map((cpr) => (
              <CardPopularRepos
                key={cpr.id}
                icon={cpr.icon}
                title={cpr.title}
                description={cpr.description}
                language={cpr.language}
                visibility={cpr.visibility}
              />
            ))}
          </article>
        </article>
        <article className="px-4 mt-10 lg:px-0 lg:gap-x-9 lg:items-center">
          <ContributorsSection />
        </article>
     
      </section>
    </main>
  );
};

export default Overview;
