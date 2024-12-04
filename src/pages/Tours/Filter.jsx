import React, { useState } from "react";
import { FaChevronDown, FaRegListAlt } from "react-icons/fa";
import { MdOutlineGridOn } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { TourCard } from "./TourCard";


export const toursData = [
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
	{
		id: 6,
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
		id: 7,
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
		id: 8,
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
		id: 9,
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
		id: 10,
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
		id: 11,
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
		id: 12,
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
		id: 13,
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
	

	const itemsPerPage = 3;
	const [currentPage, setCurrentPage] = useState(1);

	// Calculate the data for the current page
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentData = toursData.slice(startIndex, endIndex);

	// Calculate total pages
	const totalPages = Math.ceil(toursData.length / itemsPerPage);

	// Handler for pagination
	const handlePageChange = (page) => {
		if (page > 0 && page <= totalPages) {
			setCurrentPage(page);
		}
	};

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
						{currentData.map((tour) => (
							<TourCard key={tour.id} tour={tour} />
						))}
					</div>

					{/* Pagination */}
					<div className="flex justify-center gap-2 mt-8">
						{currentPage > 1 && ( // Conditionally render the "Previous" button
							<button
								onClick={() => handlePageChange(currentPage - 1)}
								className="py-2 px-4 bg-[#F5F5F5]   rounded-lg text-[#111B19] font-inter text-[14px]">
								Prev
							</button>
						)}
						{[...Array(totalPages)].map((_, index) => (
							<button
								key={index}
								onClick={() => handlePageChange(index + 1)}
								className={`py-2 px-4 rounded-lg text-[#111B19] font-inter text-[14px] ${
									currentPage === index + 1
										? "bg-[#FD4C5C] text-white font-inter text-[14px]"
										: "bg-[#F5F5F5]"
								}`}>
								{index + 1}
							</button>
						))}
						{currentPage < totalPages && ( // Conditionally render the "Next" button
							<button
								onClick={() => handlePageChange(currentPage + 1)}
								className="py-2 px-4 bg-[#F5F5F5]   rounded-lg text-[#111B19] font-inter text-[14px]">
								Next
							</button>
						)}
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
									<p className="font-inter text-left text-[#111B19] text-[17px] font-normal ">
										Tower
									</p>
								</div>
								<div className="flex justify-start gap-2 mt-4">
									<input type="checkbox" />
									<p className="font-inter text-left text-[#111B19] text-[17px] font-normal ">
										Tower
									</p>
								</div>
								<div className="flex justify-start gap-2 mt-4">
									<input type="checkbox" />
									<p className="font-inter text-left text-[#111B19] text-[17px] font-normal ">
										Tower
									</p>
								</div>
								<div className="flex justify-start gap-2 mt-4">
									<input type="checkbox" />
									<p className="font-inter text-left text-[#111B19] text-[17px] font-normal ">
										Tower
									</p>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-center px-4 mb-4">
							<button className="font-inter w-full text-[#FFFFFF] items-center flex justify-center gap-2 py-2 rounded-[4px] text-[17px] font-bold  bg-[#FD4C5C]">
								{" "}
								<FaSearch className="text-white text-[14px]" />
								<p>Search</p>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Filter;
