import { Route, Routes } from "react-router-dom";
import Home from "./maincomponents/home";
import Education from "./maincomponents/education";
import Projects from "./maincomponents/projects";
import Certificates from "./maincomponents/certificates";
import Contact from "./maincomponents/contact";



const RoutesTo = () => {
    return(
        <div className="all">
        <Routes>
            <Route index path="/" element={<Home/>}></Route>
            <Route path="education" element={<Education/>}></Route>
            <Route path="projects" element={<Projects/>}></Route>
            <Route path="certificates" element={<Certificates/>}></Route>
            <Route path="contact" element={<Contact/>}></Route>
        </Routes>
        </div>
    )
};
export default RoutesTo;








