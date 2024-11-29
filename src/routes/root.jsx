import { Outlet } from "react-router-dom";


import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer";
export default function Root() {
  return (
    <div>
      <Navbar/>
      <div className="content">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}