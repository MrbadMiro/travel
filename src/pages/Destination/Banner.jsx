import React from "react";
import { Banner_img } from "../../assets";

const Banner = () => {
   
    const sectionStyle = {
		backgroundImage: `url(${Banner_img})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	};
	return (
		<div className="flex w-full h-[80vh] items-center justify-center  " style={sectionStyle}>
			<p className="text-center text-white font-bold text-[48px]">Destinations</p>
		</div>
	);
};

export default Banner;
