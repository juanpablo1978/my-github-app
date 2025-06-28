import { BrowserRouter, Routes, Route } from "react-router-dom"
import LayoutMain from "./layout/LayoutMain/LayoutMain"
import LayoutEmpty from "./layout/LayoutEmpty/LayoutEmpty"
import Home from "./pages/Home/Home"
import Overview from "./pages/Overview/Overview"
import Repositories from "./Repositories/Repositories"
import Projects from "./pages/Projects/Projects"
import Packages from "./pages/Packages/Packages"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas SIN navbar y footer */}
        <Route element={<LayoutEmpty />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Rutas CON navbar y footer */}
        <Route element={<LayoutMain />}>
          
          <Route path="/overview" element={<Overview />} />
          <Route path="/repositories" element={<Repositories />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/packages" element={<Packages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
