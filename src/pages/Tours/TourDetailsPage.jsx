import React from "react";
import { useParams } from "react-router-dom";
import { toursData } from "./Filter";
import { IoLocationOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaRegClock } from "react-icons/fa";
import { star, Banner_img, Avathar } from "../../assets";
import { CiVideoOn } from "react-icons/ci";
import { BiPhotoAlbum } from "react-icons/bi";
import { IoShareSocialSharp } from "react-icons/io5";

//slider
import { Client } from "../../Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TourDetailsPage = () => {
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	// Get the tour ID from the URL
	const { id } = useParams();

	// Find the specific tour based on the ID
	const tour = toursData.find((tour) => tour.id === parseInt(id));

	// If no tour is found, show an error message
	if (!tour) {
		return (
			<div className="flex justify-center items-center h-screen">
				<p className="text-2xl text-red-500">Tour not found</p>
			</div>
		);
	}

	// Details sections with mock data
	const tourDetails = [
		{
			title: "Tour Description",
			content:
				tour.description || "Detailed description of the tour experience.",
		},
		{
			title: "What's Included",
			content: "• Professional guide\n• Transportation\n• Lunch\n• Entry fees",
		},
		{
			title: "Itinerary",
			content:
				"• Morning: Pick-up and initial tour\n• Afternoon: Sightseeing\n• Evening: Return to starting point",
		},
	];

	return (
		<div className="flex   flex-col">
			<div className="flex flex-col bg-[#F2FBFA] py-24 mt-12  ">
				<div className="grid grid-cols-10 items-center md:px-24 px-6  ">
					<div className="flex col-span-7">
						<p className="font-nunito text-[#111B19]  font-bold  text-[36px]  w-full">
							{tour.title}{" "}
						</p>
					</div>
					<div className="flex col-span-3 justify-end gap-2">
						<div className="flex bg-white py-2 border border-[#E6E6E6] items-center rounded-[10px] gap-1 px-2 text-[#444444] font-inter text-[12px] ">
							{" "}
							<CiVideoOn className="text-[#FD4C5C] text-[14px] font-bold" />{" "}
							<p>View Video</p>
						</div>
						<div className="flex bg-white py-2 border border-[#E6E6E6] items-center rounded-[10px] gap-1 px-2   text-[#444444] font-inter text-[12px]">
							{" "}
							<BiPhotoAlbum className="text-[#FD4C5C] text-[14px] font-bold" />{" "}
							4 photos
						</div>
						<div className="flex bg-white py-2 border border-[#E6E6E6] items-center rounded-[10px] gap-1 px-2">
							{" "}
							<IoShareSocialSharp className="text-[#FD4C5C] text-[14px] font-bold" />
						</div>
					</div>
				</div>
				<div className="flex mt-2 md:px-24 px-6">
					<div className="flex items-center gap-2 ">
						<IoLocationOutline className="text-[14.5px] text-[#00BB98] " />
						<p className="text-[14.5px] font-bold text-[#444444] ">
							{" "}
							{tour.location}
						</p>
						<img src={star} alt="" />
						<p className="text-[14.5px] font-bold text-[#444444] ">
							({tour.reviews} review)
						</p>
					</div>
					<div className="flex"></div>
				</div>
				<div className="w-full h-fit pb-6 mt-8 ">
					<Slider {...settings} className="slider-two">
             
						{Client.map((item, index) => (
							<div
               id="Slider-Boxes2"
								key={index}
								className="p-6  h-[250px] boxShadow1 flex flex-col relative  z-12 cursor-pointer group bg-white shadow-custom1 ">
								<p className="font-nunito text-neutral-600  font-bold  text-[14px]">
									{item.category}
								</p>

								<div className="flex mt-4 justify-between ">
									<div className="flex  justify-between">
										<div className="flex">
											<img
												src={Avathar}
												alt=""
												className="w-[60px] h-[60px] rounded-full"
											/>
										</div>
										<div className="flex flex-col">
											<p>Jenny Wilson</p>
											<p>UI/UX Designer</p>
										</div>
									</div>
									<div className="flex">
										<img src={star} alt="" />
									</div>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>

			{/* Tour Header */}
			<div className="grid md:grid-cols-2 gap-8">
				{/* Image Section */}
				<div>
					<img
						src={Banner_img}
						alt={tour.title}
						className="w-full h-[400px] object-cover rounded-xl"
					/>
				</div>

				{/* Tour Info Section */}
				<div className="bg-white p-6 rounded-xl shadow-md">
					<h1 className="text-3xl font-bold text-[#5ec9b3] mb-4">
						{tour.title}
					</h1>

					<div className="flex items-center mb-2">
						<IoLocationOutline className="mr-2" />
						<span className="text-[#444444]">{tour.location}</span>
					</div>

					<div className="flex items-center mb-4">
						<img src={star} alt="Star" className="w-5 h-5 mr-2" />
						<span className="text-[#444444]">
							{tour.reviews} review{tour.reviews > 1 ? "s" : ""}
						</span>
					</div>

					<div className="flex gap-4 mb-4">
						<div className="flex items-center gap-2 border border-[#00BB98] p-2 rounded-[5px]">
							<CgProfile className="text-[#00BB98]" />
							<span className="text-[#00BB98]">
								{tour.profileCount} Participants
							</span>
						</div>
						<div className="flex items-center gap-2 border border-[#00BB98] p-2 rounded-[5px]">
							<FaRegClock className="text-[#00BB98]" />
							<span className="text-[#00BB98]">{tour.duration}</span>
						</div>
					</div>

					<div className="mb-4">
						<span className="text-2xl font-bold text-[#111B19]">
							{tour.price}
						</span>
						<span className="text-[#444444] ml-2">per person</span>
					</div>

					<button className="bg-[#FD4C5C] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#FF6B7B] transition-colors">
						Book Now
					</button>
				</div>
			</div>

			{/* Tour Details Sections */}

			{/* Tour Details Sections */}
			<div className="mt-8">
				{tourDetails.map((section, index) => (
					<div key={index} className="mb-6">
						<h2 className="text-2xl font-bold text-[#5ec9b3] mb-4">
							{section.title}
						</h2>
						<div className="bg-white p-6 rounded-xl shadow-md whitespace-pre-line">
							{section.content}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TourDetailsPage;
