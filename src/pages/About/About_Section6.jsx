import React from "react";
import { Hiking } from "../../assets";
const About_Section6 = () => {
	return (
		<div className="flex flex-col py-24">
			<div className="flex  md:px-24 px-6 text-center flex-col">
				<p className="font-Reenie text-[#00BB98] font-bold  text-[36px] ">
					Personalised Trips
				</p>
				<p className="font-nunito text-[#111B19] font-bold text-[28px] mt-2">Contact us for a Quote</p>
			</div>
			<div className="flex md:flex-cols-2 mt-8  w-full ">
				<div className="flex w-full  ">
					<img src={Hiking} alt="" className="w-full h-full object-cover" />
				</div>
				<div className="w-full   flex flex-col items-center justify-center p-8 bg-[#F2F2F2]">
					<p className="font-nunito text-[#111B19] font-bold text-[24px] mt-2">
						Plan your Next Trip
					</p>
					<p className="font-Poppins font-normal text-[#6E6E6E] text-[14px]  text-center mt-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos commodi
						dolore mollitia, atque maiores sed veniam quibusdam enim omnis
						explicabo?
					</p>
					<div className="flex flex-col w-full h-full mt-4">
						<input
							type="text"
							placeholder="Type your name"
							className="mt-2 bg-[#F0F0F0] border-[#E6E6E6] border-2 p-2 font-Poppins font-normal text-[#6E6E6E] text-[16px] outline-none "
						/>
						<input
							type="email"
							placeholder="Type your email"
							className="mt-2 bg-[#F0F0F0] border-[#E6E6E6] border-2 p-2 font-Poppins font-normal text-[#6E6E6E] text-[16px] outline-none "
						/>
						<textarea
							name=""
							id=""
							className="mt-2 bg-[#F0F0F0] border-[#E6E6E6] border-2 p-2 font-Poppins font-normal text-[#6E6E6E] text-[16px] outline-none "
							placeholder="Your Message ">
							
						</textarea>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About_Section6;
