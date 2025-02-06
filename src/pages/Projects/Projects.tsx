import SideComponent from "../../components/Profile/SideComponent/SideComponent"
import { BsWindowSidebar } from "react-icons/bs";


const Projects = () => {
  return (
    <main className="lg:min-h-screen bg-[#0D1117] text-white lg:flex">
      <section>
        <SideComponent/>
        </section>
        <section>
        <article className="px-4 py-10">
          <div className="w-[330px] h-[260px] lg:w-[870px] border-[1px] border-gray-500 rounded-md flex flex-col
          justify-center items-center text-gray-500 gap-y-3">
          <BsWindowSidebar className="text-[22px] " />
          <h3 className="text-white font-bold lg:text-[21px]">Create your first GitHub project</h3>
          <p className="px-7 text-[14px] lg:text-[16px] text-center font-medium">Projects are a customizable, flexible tool
             for planning and tracking your work.</p>
          </div>
        </article>
        </section>
        </main>
  )
}

export default Projects