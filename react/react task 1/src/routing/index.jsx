import { Route, Routes } from "react-router";
import Elaqe from "../pages/Elaqe";
import NotFound from "../pages/NotFound";
import UstaSifarisi from "../pages/UstaSifarisi";



const Routing = () => {
   return (
      <Routes>
         <Route path="/notfound" element={<NotFound />} />
         <Route path="/ustasifarisi" element={<UstaSifarisi />} />
  <Route path="/elaqe" element={<Elaqe/>}/>

      </Routes>
   )
}
export default Routing;