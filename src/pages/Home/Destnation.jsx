import {
	Hero_Section2_bg,
	HomeSection_2_1,
	HomeSection_2_2,
	HomeSection_2_3,
} from "../../assets";
import { Card } from "./Card";
import { cardsData,cardsData2 } from "../../Data";

import { IoLocationOutline } from "react-icons/io5";
const Destnation = () => {
	const createSectionStyle = (image) => ({
		backgroundImage: `url(${image})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	});

	// Usage
	const sectionStyle = createSectionStyle(Hero_Section2_bg);
	const sectionStyle2 = createSectionStyle(HomeSection_2_1);

	return (
		<div className="flex flex-col md:px-24 px-6 py-24 w-full  " style={sectionStyle}>
			{/* 1 text part */}
			<div className="flex flex-cols-2" >
				<div className="flex flex-col">
					<p className="font-Reenie text-[#00BB98] font-bold  text-[36px] ">
						Dream Vacation Destination
					</p>
					<p className="font-nunito text-[#111B19]  font-bold  text-[48px]">
						Plan the Trip of a Lifetime <br />with Ease
					</p>
					<p className="font-nunito text-[#111B19]  font-bold  text-[60px]">
						
					</p>
					<p className="font-Poppins font-normal text-[#6E6E6E] text-[16px] leading-[#24px] tracking-[#16] mt-2">
						Whether you're looking for a romantic getaway, a family-friendly
						adventure, or a solo journey to explore the world, a travel agency
						can provide you with a custom-tailored itinerary that exceeds your
						expectations.
					</p>
					<div className="mt-4 ">
						<button className="px-4 py-2 rounded-xl bg-[#1BBC9B] text-white">
							More info
						</button>
					</div>
				</div>
				<div className="flex w-full " ></div>
			</div>
			{/* 2 image part  Cards Section */}
			<div className="flex mt-12">
				<div className="flex flex-cols-3 w-full mt-4 gap-2">
					{cardsData.map((card, index) => (
						<Card
							key={index}
							style={card.style}
							image={card.image}
							text={card.text}
						/>
					))}
				</div>
			</div>
			{/* 3 box part */}
			<div className="flex mt-8">
				<div className=" flex  flex-cols-3 w-full gap-3">
					{/* 1st */}
					{cardsData2.map((card) => (
						<div
							key={card.id}
							className="flex flex-col w-full bg-white box rounded-b-xl shadow-md">
							<div className="w-full h-[200px]" style={card.sectionStyle}></div>
							<div className="flex flex-col w-full p-4">
								<p className="font-Poppins text-[20px] font-bold text-black">
									{card.title}
								</p>
								<div className="flex flex-row w-full items-center my-2 gap-1">
									<IoLocationOutline className="text-[#1BBC9B]" />
									<p className="text-center text-[#2B2945] font-Jost font-normal text-[20px]">
										{card.location}
									</p>
								</div>
								<hr />
								<p className="py-6 text-[14px]">{card.description}</p>
								<hr />
								<div className="flex flex-cols-2 mt-6 justify-between">
									<button className="bg-[#1BBC9B] px-4 py-2 rounded-xl text-white">
										Details
									</button>
									<div className="flex flex-col text-right">
										<p>From</p>
										<p>{card.price}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Destnation;
