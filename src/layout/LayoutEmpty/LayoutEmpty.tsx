import { Outlet } from "react-router-dom"

const LayoutEmpty = () => {
  return (
    <section className="">
        <Outlet/>
    </section>
  )
}

export default LayoutEmpty