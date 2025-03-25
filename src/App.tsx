
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Overview from "./pages/Overview/Overview"
import AppNavbar from "./layout/AppNavbar/AppNavbar"
import Footer from "./layout/Footer/Footer"
import Repositories from "./Repositories/Repositories"
import Projects from "./pages/Projects/Projects"
import Packages from "./pages/Packages/Packages"
//import Home from "./pages/Home/Home"



const App = () => {
  return (
    <BrowserRouter>
    <AppNavbar/>
   {/* <Route path="/home" Component={Home} />*/}
    <Routes>
    <Route path="/overview" Component={Overview} />
    <Route path="/repositories" Component={Repositories} />
    <Route path="/projects" Component={Projects} />
    <Route path="/packages" Component={Packages} />
    </Routes>
    <Footer/>

    </BrowserRouter>

  )
}

export default App