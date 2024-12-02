import React from "react";
import { FaChevronDown, FaRegListAlt } from "react-icons/fa";
import { MdOutlineGridOn } from "react-icons/md";
import { Banner_img } from "../../assets";
import { IoLocationOutline } from "react-icons/io5";
import { star } from "../../assets";
import { CgProfile } from "react-icons/cg";
import { FaRegClock } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const toursData = [
	{
		id: 1,
		title: "Ecotourism Sabah sightseeing tours – 2 hours",
		location: "Sri Lanka",
		reviews: 1,
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam repudiandae hic repellat ipsa. Possimus, consequatur.",
		profileCount: 5,
		duration: "2 hours",
		price: "$10.00",
	},
	{
		id: 2,
		title: "Beachfront luxury tour – 3 hours",
		location: "Maldives",
		reviews: 3,
		description:
			"Enjoy an exclusive beachfront luxury tour in the Maldives with amazing views and top-notch facilities.",
		profileCount: 8,
		duration: "3 hours",
		price: "$20.00",
	},
	{
		id: 3,
		title: "Beachfront luxury tour – 3 hours",
		location: "Maldives",
		reviews: 3,
		description:
			"Enjoy an exclusive beachfront luxury tour in the Maldives with amazing views and top-notch facilities.",
		profileCount: 8,
		duration: "3 hours",
		price: "$20.00",
	},
	{
		id: 4,
		title: "Beachfront luxury tour – 3 hours",
		location: "Maldives",
		reviews: 3,
		description:
			"Enjoy an exclusive beachfront luxury tour in the Maldives with amazing views and top-notch facilities.",
		profileCount: 8,
		duration: "3 hours",
		price: "$20.00",
	},
	{
		id: 5,
		title: "Beachfront luxury tour – 3 hours",
		location: "Maldives",
		reviews: 3,
		description:
			"Enjoy an exclusive beachfront luxury tour in the Maldives with amazing views and top-notch facilities.",
		profileCount: 8,
		duration: "3 hours",
		price: "$20.00",
	},
	// Add more tour objects as needed
];
const Filter = () => {
	return (
		<div className="flex flex-col py-24 w-full md:px-24 px-6">
			<div className="grid md: grid-cols-10 w-full gap-2 ">
				{/* left side */}
				<div className="flex flex-col w-full col-span-8 ">
					{/* Top Section */}
					<div className="flex items-center py-2  w-full justify-between border-b border-[#E6E6E6]">
						<div className="flex items-center ">
							<span className="font-inter font-bold text-[29px]">13</span>
							<p className="font-inter font-bold text-[29px] w-full px-1">
								{" "}
								ToursFound
							</p>
							<p className="font-inter text-[#008DD0] text-[14px] font-bold px-2 ">
								clearfilter
							</p>
						</div>
						<div className="flex gap-4 ">
							<p className="font-inter text-[#444444] text-[14px] font-bold   ">
								Sort by latest
							</p>
							<div>
								<FaChevronDown />
							</div>
							<div className="flex gap-2">
								<FaRegListAlt />
								<MdOutlineGridOn />
							</div>
						</div>
					</div>

					{/* Bottom Section */}

					<div className="flex flex-col bg-[#F6F8FF] py-4 w-full pr-2">
						{toursData.map((tour) => (
							<div
								key={tour.id}
								className="grid md:grid-cols-10 bg-white w-full mb-4">
								<div className="flex col-span-3 rounded-xl">
									<img
										src={Banner_img}
										alt=""
										className="object-cover rounded-xl h-[240px]"
									/>
								</div>
								<div className="w-full flex col-span-7 p-2">
									<div className="grid grid-cols-6 w-full">
										<div className="flex flex-col col-span-4 p-4 border-r border-[#E6E6E6]">
											<p className="font-inter text-[#5ec9b3] text-[18px] font-bold">
												{tour.title}
											</p>
											<div className="flex items-center mt-2">
												<IoLocationOutline />
												<p className="text-[#444444] text-[13px] font-inter">
													{tour.location}
												</p>
											</div>
											<div className="flex mt-2 gap-2">
												<img src={star} alt="Star" />
												<p className="text-[#444444] text-[13px] font-inter">
													{tour.reviews} review{tour.reviews > 1 && "s"}
												</p>
											</div>
											<div className="mt-2">
												<p className="text-[#444444] text-[15px] font-inter">
													{tour.description}
												</p>
											</div>
										</div>
										<div className="flex flex-col col-span-2 justify-center">
											<div className="flex justify-end px-1 gap-1">
												<div className="flex border gap-1 border-[#00BB98] p-2 rounded-[5px] items-center">
													<CgProfile className="w-[16px] h-[16px] text-[#00BB98]" />
													<span className="text-[#00BB98] text-[13px] font-inter">
														{tour.profileCount}
													</span>
												</div>
												<div className="flex border gap-1 border-[#00BB98] p-2 rounded-[5px] items-center">
													<FaRegClock className="w-[16px] h-[16px] text-[#00BB98]" />
													<span className="text-[#00BB98] text-[13px] font-inter">
														{tour.duration}
													</span>
												</div>
											</div>
											<div className="flex justify-end mt-2">
												<p>
													<span className="text-[#111B19] text-[18px] font-bold font-inter">
														{tour.price}
													</span>
												</p>
											</div>
											<div className="flex justify-end mt-2">
                                                
												<button className="bg-[#FD4C5C] rounded-[8px] text-[14px] text-white py-2 px-4 font-semibold font-inter">
                                                Explore
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Right side */}
				<div className="w-full flex flex-col  col-span-2 ">
					<div className="flex flex-col border-[#E6E6E6] border w-full rounded-xl text-left">
						<div className="flex p-4 border-[#E6E6E6] border-b items-center justify-between text-left">
							
							<p className="font-inter text-[#111B19] text-[17px] font-bold px-2 ">
								Search Tours
							</p>
							<FaChevronDown className="text-[12px]" />
						</div>
						<div className="flex p-4 border-[#E6E6E6] border-b items-center justify-between">
							 
							<p className="font-inter text-[#111B19] text-[17px] font-bold px-2 ">
								Filter Price
							</p>
							<FaChevronDown className="text-[12px]" />
						</div>
						<div className="flex p-4 border-[#E6E6E6] border-b items-center justify-between">
							 
							<p className="font-inter text-[#111B19] text-[17px] font-bold px-2 ">
								Review Score
							</p>
							<FaChevronDown className="text-[12px]" />
						</div>
						<div className="flex flex-col  p-4 border-[#E6E6E6] items-center justify-start">
							 
							<p className="font-inter text-left text-[#111B19] text-[17px] font-bold px-2 w-full">

								Categories
							</p>
                            <div className="flex flex-col w-full px-2">
                                <div className="flex justify-start gap-2 mt-4">
                                  <input type="checkbox" /> 
                                  <p className="font-inter text-left text-[#111B19] text-[17px] font-normal ">Tower</p>

                                </div>
                                <div className="flex justify-start gap-2 mt-4">
                                  <input type="checkbox" /> 
                                  <p className="font-inter text-left text-[#111B19] text-[17px] font-normal ">Tower</p>

                                </div>
                                <div className="flex justify-start gap-2 mt-4">
                                  <input type="checkbox" /> 
                                  <p className="font-inter text-left text-[#111B19] text-[17px] font-normal ">Tower</p>

                                </div>
                                <div className="flex justify-start gap-2 mt-4">
                                  <input type="checkbox" /> 
                                  <p className="font-inter text-left text-[#111B19] text-[17px] font-normal ">Tower</p>

                                </div>

                            </div>
							
						</div>
                        <div className="flex items-center justify-center px-4 mb-4">
                            <button className="font-inter w-full text-[#FFFFFF] items-center flex justify-center gap-2 py-2 rounded-[4px] text-[17px] font-bold  bg-[#FD4C5C]"> <FaSearch className="text-white text-[14px]" /><p>Search</p></button>
                        </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Filter;
