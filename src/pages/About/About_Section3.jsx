import React from "react";
import {
	Vector_1,
	Vector_2,
	Vector_3,
	Vector_4,
	Vector_5,
	Vector_6,
} from "../../assets";

const Data = [
	{ id: 1, image: Vector_1, text: "Culture" },
	{ id: 2, image: Vector_2, text: "Hiking" },
	{ id: 3, image: Vector_3, text: "Camping & Hiking" },
	{ id: 4, image: Vector_4, text: "Family" },
	{ id: 5, image: Vector_5, text: "Beaches" },
	{ id: 6, image: Vector_6, text: "Beaches 2" },
];

const About_Section3 = () => {
	return (
		<div className="flex md:px-24 px-6 py-24 w-full">
			<div className="grid grid-cols-5 gap-4 w-full">
				{/* Text Section */}
				<div className="flex flex-col w-full col-span-2">
					<p className="font-nunito text-[#111B19] font-bold text-[34px]">
						People Why Choose Our Travel Activity
					</p>
					<p className="font-Poppins font-normal text-[#6E6E6E] text-[16px] text-justify mt-4">
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered
					</p>
					<div className="flex mt-4">
						<button className="bg-[#1BBC9B] px-4 py-2 rounded-[5px] text-white text-[12px]">
							Details
						</button>
					</div>
				</div>

				{/* Grid Section */}
				<div className="col-span-3 grid md:grid-cols-3 px-4 gap-2">
					{Data.map((item) => (
						<div
							className="flex flex-col items-center justify-center border-2 border-gray-200 p-2 hover:bg-red-600"
							key={item.id}
						>
							<div className="rounded-full p-4 bg-[#FFF2F3]">
								<img src={item.image} alt={item.text} />
							</div>
							<p className="font-nunito text-[#111B19] font-bold text-[16px] mt-2">
								{item.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default About_Section3;
