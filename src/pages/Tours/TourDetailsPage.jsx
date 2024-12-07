import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { toursData } from "./Filter";
import { IoLocationOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaRegClock } from "react-icons/fa";
import { star, Banner_img, Avathar, Home_Section6_1 } from "../../assets";
import { CiVideoOn } from "react-icons/ci";
import { BiPhotoAlbum } from "react-icons/bi";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

//slider
import { Client } from "../../Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TourDetailsPage = () => {
	const sliderRef = useRef(null);

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
				<div className="w-full h-fit  mt-8 relative group">
					<Slider {...settings} className="slider-two" ref={sliderRef}>
						{Client.map((item, index) => (
							<div
								id="Slider-Boxes2"
								key={index}
								className="pl-2 h-[250px] flex flex-col relative z-12 cursor-pointer bg-white">
								<img src={Home_Section6_1} alt="" className="w-full h-full object-cover" />
							</div>
						))}
					</Slider>

					{/* Navigation Arrows */}
					<div className="flex absolute z-10 justify-between w-full md:px-24 px-6 top-1/2 -translate-y-1/2 hidden group-hover:flex">
						<button
							onClick={() => sliderRef.current && sliderRef.current.slickPrev()} // Go to previous slide
							className="border-red-700 p-2 border-2 rounded-full">
							<FaChevronLeft />
						</button>
						<button
							onClick={() => sliderRef.current && sliderRef.current.slickNext()} // Go to next slide
							className="border-red-700 p-2 border-2 rounded-full">
							<FaChevronRight />
						</button>
					</div>
				</div>
			</div>

			<div className="grid md:grid-cols-10 md:px-24 px-6 my-24">
				<div className="flex col-span-6 flex-col gap-2 ">
					<p className="text-black text-[24px] font-bold font-inter  ">
						Overview
					</p>
					<p className="text-[#444444] text-[13px] font-inter  ">
						The secret journey of Tonkin is designed for travelers who want to
						touch, taste and feel the souls of Northern Vietnam through their
						unique highlights and experiences. More than simple whirlwind tours,
						the secret journey of Tonkin of Tonkin marry iconic destinations and
						must-see spots with the hidden corners and below-the-skin
						experiences to discover some of the famous and unique places around
						the Halong region.
					</p>
					<p className="text-[#444444] text-[13px] font-inter ">
						The secret journey of Tonkin is designed for travelers who want to
						touch, taste and feel the souls of Northern Vietnam through their
						unique highlights and experiences. More than simple whirlwind tours,
						the secret journey of Tonkin of Tonkin marry iconic destinations and
						must-see spots with the hidden corners and below-the-skin
						experiences to discover some of the famous and unique places around
						the Halong region.
					</p>
					<p className="text-[#444444] text-[13px] font-inter ">
						The secret journey of Tonkin is designed for travelers who want to
						touch, taste and feel the souls of Northern Vietnam through their
						unique highlights and experiences. More than simple whirlwind tours,
						the secret journey of Tonkin of Tonkin marry iconic destinations and
						must-see spots with the hidden corners and below-the-skin
						experiences to discover some of the famous and unique places around
						the Halong region.
					</p>
				</div>
				<div className="flex col-span-4">
					<div className="flex flex-col shadow-custom-drop bg-white p-4 w-full">
						<form action="" className="flex flex-col gap-4 py-4">
							<div className="flex flex-col">
								<label
									htmlFor=""
									className="text-[#111B19] text-[15px] font-inter font-normal  ">
									Check in
								</label>
								<input
									type="date"
									name=""
									id=""
									className="text-[14px] outline-none border-[#E6E6E6] border p-2 text-[#444444] font-inter"
								/>
							</div>
							<div className="flex flex-col">
								<label
									htmlFor=""
									className="text-[#111B19] text-[15px] font-inter font-normal  ">
									Check out
								</label>
								<input
									type="date"
									name=""
									id=""
									className="text-[14px] outline-none  border-[#E6E6E6] border p-2 text-[#444444] font-inter"
								/>
							</div>
							<div className="flex flex-col">
								<label
									htmlFor=""
									className="text-[#111B19] text-[15px] font-inter font-normal  ">
									Guests
								</label>
								<input
									type="text"
									name=""
									id=""
									className="text-[14px] outline-none  border-[#E6E6E6] border p-2 text-[#444444] font-inter"
								/>
							</div>
							<button className="bg-[#FD4C5C] flex w-full items-center justify-center py-2 rounded-[4px]">
								<p className="text-[#FFFFFF] text-[15px] font-inter font-normal    ">
									Booking Now
								</p>
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TourDetailsPage;
