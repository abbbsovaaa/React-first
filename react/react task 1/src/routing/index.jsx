import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const Routing = () => {
 return(
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/notfound" element={<NotFound/>}/>
    </Routes>
 )
}
export default Routing;