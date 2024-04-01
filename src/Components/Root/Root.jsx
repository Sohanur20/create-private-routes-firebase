import { Outlet } from "react-router-dom";
import Nav from "../Navber/Nav";
import Footer from "../Footer/Footer";


const Root = () => {


    return (
        <>

            <div className=" bg-black">
                <Nav></Nav>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>

    );
};

export default Root;