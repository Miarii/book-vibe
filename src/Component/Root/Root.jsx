import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div>
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <Outlet />
      </div>
      {/* <Footer></Footer> */}
    </div>
    );
};

export default Root;