import React from "react";
import { Hero_image, Hero_image_bg,Home_Section4_1,Hero_img } from "../../assets";

import { IoLocationOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
const Hero = () => {
	const sectionStyle = {
		backgroundImage: `url(${Hero_image_bg})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	};

	return (
		<div
			className="flex flex-col h-full w-full  py-24 bg-[#00BB98] bg-opacity-5 "
			style={sectionStyle}>
			<div className=" grid md:grid-cols-2   w-full  ">
				{/* left section */}
				<div className="md:px-24 px-6 flex flex-col lg:mt-[80px] w-full lg:text-left text-center">
					<p className="font-LaBelle text-[#00BB98] font-normal text-[32] ">
						Natural beauty
					</p>
					<p className="font-nunito text-[#111B19]  font-bold  text-[40px] lg:text-[48px] w-full">
						Discover the most engaging places
					</p>
					
					<p className="font- text-[#444444] text-[16px] font-medium mt-5">
						Less planning 50,000 trips are ready for you.
					</p>
				</div>

				<div class="w-full flex relative z-10 ">
					
					<img src={Hero_img} alt="" className="hidden   top-0 bottom-0 w-full  h-[500px] object-cover" />
				</div>
			</div>
			<div className="mt-10  flex md:px-24 px-6  w-full">
				<div className="grid lg:grid-cols-5 grid-cols-2 gap-2  bg-white rounded-xl box  items-center justify-center w-full lg:mr-[200px]">
					<div className="flex flex-col   p-4 w-full  ">
						<div className="flex items-center">
							<div>
								<IoLocationOutline className=" text-[#FD4C5C] text-[24px]" />
							</div>
							<div>
								<p className="pl-1 font-inter text-[#444444]  font-bold  text-[14px]">
									Destinations
								</p>
							</div>
						</div>
						<div className="mt-2">
							<input
								type="text"
								placeholder="Where are you going?"
								className="outline-none"
							/>
						</div>
					</div>
					<div className="flex flex-col py-4  w-full ">
						<div className="flex items-center">
							<div>
								<IoLocationOutline className=" text-[#FD4C5C] text-[24px]" />
							</div>
							<div>
								<p className="pl-1 font-inter text-[#444444]  font-bold  text-[14px]">
									Activity
								</p>
							</div>
						</div>
						<div className="mt-2">
							<input
								type="text"
								placeholder="All activity"
								className="outline-none"
							/>
						</div>
					</div>
					<div className="flex flex-col py-4  w-full">
						<div className="flex items-center">
							<div>
								<IoLocationOutline className=" text-[#FD4C5C] text-[24px]" />
							</div>
							<div>
								<p className="pl-1 font-inter text-[#444444]  font-bold  text-[14px]">
									Dates
								</p>
							</div>
						</div>
						<div className="mt-2">
							<input
								type="text"
								placeholder="DD-MM-YYYY"
								className="outline-none"
							/>
						</div>
					</div>
					<div className="flex flex-col  py-4 w-full">
						<div className="flex items-center">
							<div>
								<IoLocationOutline className=" text-[#FD4C5C] text-[24px]" />
							</div>
							<div>
								<p className="pl-1 font-inter text-[#444444]  font-bold  text-[14px]">
									Guests
								</p>
							</div>
						</div>
						<div className="mt-2">
							<input
								type="text"
								placeholder="2 Person"
								className="outline-none"
							/>
						</div>
					</div>
					<div className="flex flex-col  py-4 px-2 items-center ">
						<div className="flex">
						<div className="bg-[#FD4C5C] p-5 ">
							<FaSearch className="text-white" />
						</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
