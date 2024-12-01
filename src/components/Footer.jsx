import React from "react";
import { Footer_img, Footer_Tree, logo } from "../assets";

const Footer = () => {
	const sectionStyle = {
		backgroundImage: `url(${Footer_img})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	};
	return (
		<div
			className="md:px-24 px-6 pt-24 relative flex flex-col "
			style={sectionStyle}>
			<img
				src={Footer_Tree}
				alt=""
				className="absolute bottom-0 left-4  h-[180px]"
			/>
			<div className="grid md:grid-cols-5 gap-4">
				<div class="col-span-2 ">
					<div>
						<img src={logo} alt="" />
					</div>
					<p className="font-Poppins font-normal text-[#6E6E6E] text-[20px] leading-[#24px] tracking-[#16] mt-4">
						Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do
						eiusmod tempororem ipsum dolor sit am econsect ametconsectetetur
						adipiscing.
					</p>
				</div>

				<div className="flex-col flex text-[#2B2945] font-Jost font-bold text-[24px]">
					<span class="block">Quick Links</span>
					<ul class="flex  mt-4 flex-col space-y-4 text-[#2B2945] font-Jost font-normal text-[16px]">
						<li>Home</li>
						<li>Services</li>
						<li>About Us</li>
						<li>Latest News</li>
						<li>Home</li>
					</ul>
				</div>

				<div className="flex-col flex text-[#2B2945] font-Jost font-bold text-[24px]">
					<span class="block">Support</span>
                    <ul class="flex  mt-4 flex-col space-y-4 text-[#2B2945] font-Jost font-normal text-[16px]">
						<li>Home</li>
						<li>Services</li>
						
					</ul>
				</div>
				<div className="flex-col flex text-[#2B2945] font-Jost font-bold text-[24px]">
					<span class="block">Get in Touch</span>
                    <ul class="flex  mt-4 flex-col space-y-4 text-[#2B2945] font-Jost font-normal text-[16px]">
						<li>Home</li>
						<li>Services</li>
						
					</ul>
				</div>
			</div>
			
			<div className="mt-2 py-8">
				<p className="text-center text-[#2B2945] font-Jost font-normal text-[16px]">
					Copyright ©2022 TravelTrek.com All Rights Reserved
				</p>
			</div>
		</div>
	);
};

export default Footer;
