import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import UstaSifarisi from "../pages/UstaSifarisi";

const Routing = () => {
 return(
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/notfound" element={<NotFound/>}/>
    <Route path="/ustasifarisi" element={<UstaSifarisi/>}/>
    </Routes>
 )
}
export default Routing;