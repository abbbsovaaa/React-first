import { Route, Routes } from "react-router";
import About from "../pages/About";
import Elaqe from "../pages/Elaqe";
import NotFound from "../pages/NotFound";
import UstaSifarisi from "../pages/UstaSifarisi";



const Routing = () => {
   return (
      <Routes>
         <Route path="/notfound" element={<NotFound />} />
         <Route path="/ustasifarisi" element={<UstaSifarisi />} />
         <Route path="/elaqe" element={<Elaqe />} />
         <Route path="/about" element={<About />} />
      </Routes>
   )
}
export default Routing;