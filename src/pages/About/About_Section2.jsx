import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { About_img1, About_img2, About_img3, About_img4 } from "../../assets";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const About_Section2 = () => {
  const sliderRef = useRef(null); // Reference for the slider

  const destinations = [
    { id: 1, imgSrc: About_img1, name: "Destination 1" },
    { id: 2, imgSrc: About_img2, name: "Destination 2" },
    { id: 3, imgSrc: About_img3, name: "Destination 3" },
    { id: 4, imgSrc: About_img4, name: "Destination 4" },
    { id: 5, imgSrc: About_img1, name: "Destination 5" },
    { id: 6, imgSrc: About_img2, name: "Destination 6" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="md:px-24 px-6 py-24 flex flex-col bg-[#F2F2F2]">
      {/* Heading Section */}
      <div className="flex w-full items-center">
        <div className="flex flex-col w-full">
          <p className="font-nunito text-[#111B19] font-bold text-[34px] mt-2">
            Popular Destinations
          </p>
          <p className="text-gray-600">Discover amazing places</p>
        </div>
        {/* Navigation Buttons */}
        <div className="flex gap-2 items-center justify-center">
          <button
            onClick={() => sliderRef.current && sliderRef.current.slickPrev()} // Go to previous slide
            className="border-red-700 p-2 border-2 rounded-full"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => sliderRef.current && sliderRef.current.slickNext()} // Go to next slide
            className="border-red-700 p-2 border-2 rounded-full"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="w-full h-fit pb-6">
        <Slider {...settings} ref={sliderRef} className="custom-slider">
          {destinations.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl h-[250px] w-full flex flex-col relative z-12 cursor-pointer group bg-white shadow-lg"
              style={{
                backgroundImage: `url(${item.imgSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <p className="font-nunito text-neutral-600 font-bold text-[14px] p-2 bg-white bg-opacity-75 rounded-md">
                {item.name}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default About_Section2;
