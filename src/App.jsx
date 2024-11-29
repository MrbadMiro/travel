import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Hero from "./pages/Home/Hero";
import TopSection from "./components/TopSection";
import Destnation from "./pages/Home/Destnation";
import Search from "./pages/Home/Search";
import Home_Section4 from "./pages/Home/Home_Section4";
import Home_Section5 from "./pages/Home/Home_Section5";
import Home_Section6 from "./pages/Home/Home_Section6";
import Home_Section7 from "./pages/Home/Home_Section7";



function App() {
  useEffect(() => {
		AOS.init({
			offset: 100,
			duration: 800,
			easing: "ease-in-sine",
			delay: 100,
		});
		AOS.refresh();
	}, []);

// pages import


  return (
    <div className="text-">
	 {/* <TopSection/> */}
     <Hero/>
	 <Destnation/>
	 <Search/>
	 <Home_Section4/>
	 <Home_Section5/>
	 <Home_Section6/>
	 <Home_Section7/>
      
     </div> 

       
      
      
  )
}

export default App
