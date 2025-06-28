import { Outlet } from "react-router-dom"
import AppNavbar from "../AppNavbar/AppNavbar"
import Footer from "../Footer/Footer"


const LayoutMain = () => {
  return (
    <section className="min-h-screen flex flex-col">
      <AppNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </section>
  )
}

export default LayoutMain