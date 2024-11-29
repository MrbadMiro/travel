import { div } from "framer-motion/client";
import React from "react";
import { tree, clock, plane } from "../../assets";

const About_Section4 = () => {
	return (
		<div className="flex md:px-24 px-6 flex-col py-24 bg-[linear-gradient(90deg,_rgba(178,243,222,0.43)_0%,_rgba(255,255,255,1)_100%)] ">
			<div className="grid md:grid-cols-3  ">
				
				<div className="flex items-center py-8 justify-center gap-4">
					<div>
						<img src={plane} alt="" className="w-[100px] h-[100px]" />
					</div>

					<div className="flex flex-col">
						<p className="font-nunito text-[#111B19] font-bold text-[24px] mt-2">
							500+ Destinations
						</p>
						<p className="font-Poppins font-normal text-[#6E6E6E] text-[16px] text-justify mt-4">
							ssjdnfsjkdn
						</p>
					</div>
				</div>
				<div className="flex items-center py-8 justify-center gap-4">
					<div>
						<img src={clock} alt="" className="w-[100px] h-[100px]" />
					</div>

					<div className="flex flex-col">
						<p className="font-nunito text-[#111B19] font-bold text-[24px] mt-2">
							500+ Destinations
						</p>
						<p className="font-Poppins font-normal text-[#6E6E6E] text-[16px] text-justify mt-4">
							ssjdnfsjkdn
						</p>
					</div>
				</div>
				<div className="flex items-center py-8 justify-center gap-4">
					<div>
						<img src={tree} alt="" className="w-[100px] h-[100px]"/>
					</div>

					<div className="flex flex-col">
						<p className="font-nunito text-[#111B19] font-bold text-[24px] mt-2">
							500+ Destinations
						</p>
						<p className="font-Poppins font-normal text-[#6E6E6E] text-[16px] text-justify mt-4">
							ssjdnfsjkdn
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About_Section4;
