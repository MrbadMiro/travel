import React from "react";
import { Client } from "../../Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; 


import { star ,Avathar } from "../../assets";

const Home_Section7 = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		initialSlide: 0,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="w-full py-24 md:px-24 px-6 flex flex-col">
			<p className=" font-LaBelle text-[#00BB98] font-normal text-[36px] text-center ">
				Testimonials
			</p>
			<p className=" font-nunito text-[#111B19]  font-bold  text-[46px] text-center ">
				What our happy clients say{" "}
			</p>

			<div className="w-full h-fit pb-6 ">
				<Slider {...settings} className="custom-slider">
					{Client.map((item, index) => (
						<div
							id="Slider-Boxes"
							key={index}
							className="p-10 rounded-2xl h-[250px] shadow-custom-drop flex flex-col relative  z-12 cursor-pointer group bg-white shadow-custom1 ">
							

							<p className="font-nunito text-neutral-600  font-bold  text-[14px]">
								{item.category}
							</p>

							<div className="flex mt-4 justify-between ">
								<div className="flex  justify-between">
									<div className="flex">
										<img src={Avathar} alt="" className="w-[60px] h-[60px] rounded-full"/>
									</div>
									<div className="flex flex-col">
										<p>Jenny Wilson</p>
										<p>UI/UX Designer</p>
									</div>

                                 
								</div>
								<div className="flex">
                                   <img src={star} alt="" />
								</div>
								
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Home_Section7;
