import React from "react";
import { IoIosCall } from "react-icons/io";
import { CgMail } from "react-icons/cg";

const TopSection = () => {
	return (
		<div className="lg:block hidden bg-[#B0F1DD] font-Jost font-medium text-[#2B2945]">
			<div className="flex bg-navy w-full items-center justify-between lg:px-24 px-6 top-0 ">
				<div className="flex flex-row px-4 py-2  items-center">
					<IoIosCall className="text-[16px]" />
					<p className="">+94 771404069</p>
				</div>
				<div className="flex flex-row px-4 py-2 gap-1 items-center">
					<CgMail className="text-[16px]" />
					<p>123@gmail.com</p>
				</div>
			</div>
		</div>
	);
};

export default TopSection;
