import { Route, Routes } from "react-router";
import Elaqeler from "../pages/Elaqeler";
import Header from "../pages/Header";
import NotFound from "../pages/NotFound";
import UstaSifarisi from "../pages/UstaSifarisi";



const Routing = () => {
 return(
    <Routes>
    <Route path="/notfound" element={<NotFound/>}/>
    <Route path="/ustasifarisi" element={<UstaSifarisi/>}/>
    <Route path="/elaqeler" element={<Elaqeler/>}/>
    <Route path="/header" element={<Header/>}/>
    </Routes>
 )
}
export default Routing;