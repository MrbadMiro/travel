import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
const Search = () => {
	return (
		<div className="flex flex-col items-center justify-center  md:px-24 px-6 bg-[#F2F2F2] py-24">
			<div className="flex flex-col items-center justify-center text-center">
				<p className="text-[#1BBC9B] font-bold font-LaBelle text-[36px]">
					Choose your Trip
				</p>
				<p className="font-nunito text-[#111B19]  font-bold  text-[48px] mt-2 ">
					Start your Vacation Now
				</p>
				<p className="text-center text-[#2B2945] font-Jost font-normal text-[24px] mt-4">
					Looking for your dream vacation destination but don't know where to
					start? With the help of experienced and knowledgeable travel agents,
					you can plan the trip of a lifetime with ease.
				</p>
			</div>
			<div className="w-full p-8 bg-white rounded-[5px] mt-8 flex flex-cols-4">
				<div className="w-full flex flex-cols-2 items-center gap-2 ">
					<div><FaSearch  className="text-[60px] text-[#F3A46B]"/></div>
					<div className="flex flex-col ">
						<p className="font-nunito text-[#111B19]  font-bold  text-[24px] mt-2 ">Search</p>
						<input type="text" placeholder="insert keyword" className="outline-none" />
					</div>
				</div>
				<div className="w-full flex flex-cols-2 items-center gap-2 ">
					<div><IoLocationOutline  className="text-[60px] text-[#F3A46B]"/></div>
					<div className="flex flex-col ">
						<p className="font-nunito text-[#111B19]  font-bold  text-[24px] mt-2 ">Destinations</p>
						<input type="text" placeholder="insert keyword" className="outline-none" />
					</div>
				</div>
				<div className="w-full flex flex-cols-2 items-center gap-2 ">
					<div><GiHamburgerMenu  className="text-[60px] text-[#F3A46B]"/></div>
					<div className="flex flex-col ">
						<p className="font-nunito text-[#111B19]  font-bold  text-[24px] mt-2 ">Typologies</p>
						<input type="text" placeholder="insert keyword" className="outline-none" />
					</div>
				</div>
				<div className="w-full flex  items-center ">
                    <button className="bg-[#F76570] w-full py-2 text-white rounded-[5px]">Search</button>
					
				</div>
			</div>
		</div>
	);
};

export default Search;
