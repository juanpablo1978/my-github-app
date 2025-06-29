import SideComponent from "../../components/Profile/SideComponent/SideComponent"
import CardPackages from "../../components/Profile/CardPackages/CardPackages"
import { itemsPackages } from "../../Data/Data"
import packagesLogo from "../../assets/packajes-img.png"




const Packages = () => {
  return (
    <main  className="min-h-screen bg-[#0D1117] text-gray-500 lg:flex text-center">
      <section className="mb-14">
        <SideComponent/>
        </section>
        <section className="lg:mt-[46px] lg:mr-[160px]">
          <article className="flex justify-center">
        <div  className="rounded-full w-[72px] h-[72px] lg:w-[74px] lg:h-[74px] object-cover
       lg:mb-4">
      <img className="w-full h-full rounded-full object-cover"
       src={packagesLogo} alt="icono" />
    </div>
    </article>
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
        <article className=" flex flex-wrap gap-x-[16px] justify-center pb-7 lg:pb-0 lg:gap-y-5">
        {itemsPackages.map((pkg) => (
        <CardPackages 
          key={pkg.id} 
          icon={pkg.icon} 
           iconClassName={pkg.iconClassName}
          title={pkg.title} 
          description={pkg.description} 
          link={pkg.link}
        />
      ))}
        </article>
        </section>

        </main>
  )
}

export default Packages