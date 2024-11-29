import React from "react";
import { TiTick } from "react-icons/ti";
import {
	Hero_Section2_bg,
	HomeSection_2_1,
	HomeSection_2_2,
	HomeSection_2_3,
} from "../../assets";
const About_Hero = () => {
	return (
		<div className="flex md:px-24 px-6 flex-col mt-[50px] w-full py-24">
			<div className="w-full flex md:flex-cols-2">
				{/* Right Content Section */}
				<div className="flex flex-col w-full">
					<p className="font-Reenie text-[#00BB98] font-bold  text-[36px] ">
						Tourist Hotspots
					</p>
					<p className="font-nunito text-[#111B19]  font-bold  text-[48px] mt-2">
						Trip Planning for the Best Travel Experience Possible
					</p>
					<p className="font-Poppins font-normal text-[#6E6E6E] text-[16px] text-justify mt-4">
						Welcome to our travel agency, where we specialize in providing our
						clients with unforgettable travel experiences.Whether you're looking
						to relax on a tropical beach or embark on a cultural adventure, we
						can help you plan your dream vacation. From flights and
						accommodations to tours and activities, we'll handle all the
						details, so you can focus on making memories.
					</p>
					<div className="flex items-center">
						<TiTick className="text-[#6E6E6E]" />
						<p className="font-Poppins font-normal text-[#6E6E6E] text-[16px] text-justify mt-4">
							We offer a wide range of travel tours to destinations all over the
							world
						</p>
					</div>
					<div className="flex items-center">
						<TiTick className="text-[#6E6E6E]" />
						<p className="font-Poppins font-normal text-[#6E6E6E] text-[16px] text-justify mt-4">
							We offer a wide range of travel tours to destinations all over the
							world
						</p>
					</div>
					<div className="flex mt-2">
						<button className="px-4 py-2 rounded-[8px] bg-[#1BBC9B] text-white text-[14px]">
							Read More
						</button>
					</div>
				</div>

				{/* left Content Section */}
				<div className="flex w-full">
					<div className="flex flex-cols-3  px-4 gap-2 justify-evenly relative">
						<div className="w-full h-full  ">
							<img
								src={HomeSection_2_1}
								alt=""
								className="w-full h-[300px] rounded-xl object-cover"
							/>
						</div>
						<div className="w-full">
							<img
								src={HomeSection_2_1}
								alt=""
								className="w-full h-[300px] rounded-xl object-cover mt-16"
							/>
						</div>
						<div className="w-full">
							<img
								src={HomeSection_2_1}
								alt=""
								className="w-full   h-[300px] rounded-xl object-cover mt-32"
							/>
						</div>
                        <div className="w-full absolute    h-[200px] bottom-[100px] px-4">
							<img
								src={HomeSection_2_1}
								alt=""
								className="w-[300px]   h-[150px] rounded-xl object-cover bottom-0"
							/>
						</div>
                        
					</div>
				</div>
			</div>
		</div>
	);
};

export default About_Hero;
