import SideComponent from "../../components/Profile/SideComponent/SideComponent"
import CardPackages from "../../components/Profile/CardPackages/CardPackages"


const Packages = () => {
  return (
    <main  className="min-h-screen bg-[#0D1117] text-gray-500 lg:flex text-center">
      <section className="mb-14">
        <SideComponent/>
        </section>
        <section className="lg:mt-[128px] lg:mr-[160px]">
        <h2 className="text-white font-semibold text-[34px] px-7 mb-3 lg:mb-[5px]">
        Get started with
        GitHub Packages
        </h2>
        <p className="text-[18px] font-normal px-3 mb-11">
        Safely publish packages, store your packages
         alongside your code, and share your packages
          privately with your team.
        </p>
        <h4 className="text-[19px] mb-5">Choose a registry</h4>
        <article className=" flex flex-wrap gap-x-[16px] gap-y-6 justify-center">
          <CardPackages/>
          <CardPackages/>
          <CardPackages/>
          <CardPackages/>
          <CardPackages/>
          <CardPackages/>
        </article>
        </section>

        </main>
  )
}

export default Packages