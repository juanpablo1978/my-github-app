
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Overview from "./pages/Overview"
import AppNavbar from "./layout/AppNavbar"
import Footer from "./layout/Footer"


const App = () => {
  return (
    <BrowserRouter>
    <AppNavbar/>
    <Routes>
    <Route path="/overview" Component={Overview} />
    </Routes>
    <Footer/>

    </BrowserRouter>

  )
}

export default App