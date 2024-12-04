import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaRegClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { star, Banner_img } from "../../assets";

export const TourCard = ({ tour }) => {
  const navigate = useNavigate();

  const onExploreClick = (tourId) => {
    navigate(`/travel/explore/${tourId}`);
  };

  return (
    <div className="grid md:grid-cols-10 bg-white w-full mb-4 rounded-xl shadow-md">
      <div className="flex col-span-3">
        <img
          src={Banner_img}
          alt={tour.title}
          className="object-cover rounded-xl h-[240px] w-full"
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
              <p className="text-[#444444] text-[13px] font-inter pl-1">{tour.location}</p>
            </div>
            <div className="flex mt-2 gap-2">
              <img src={star} alt="Star" className="w-4 h-4" />
              <p className="text-[#444444] text-[13px] font-inter">
                {tour.reviews} review{tour.reviews > 1 ? "s" : ""}
              </p>
            </div>
            <div className="mt-2">
              <p className="text-[#444444] text-[15px] font-inter">{tour.description}</p>
            </div>
          </div>
          <div className="flex flex-col col-span-2 justify-center">
            <div className="flex justify-end px-1 gap-1">
              <div className="flex border gap-1 border-[#00BB98] p-2 rounded-[5px] items-center">
                <CgProfile className="w-[16px] h-[16px] text-[#00BB98]" />
                <span className="text-[#00BB98] text-[13px] font-inter">{tour.profileCount}</span>
              </div>
              <div className="flex border gap-1 border-[#00BB98] p-2 rounded-[5px] items-center">
                <FaRegClock className="w-[16px] h-[16px] text-[#00BB98]" />
                <span className="text-[#00BB98] text-[13px] font-inter">{tour.duration}</span>
              </div>
            </div>
            <div className="flex justify-end mt-2">
              <p>
                <span className="text-[#111B19] text-[18px] font-bold font-inter">{tour.price}</span>
              </p>
            </div>
            <div className="flex justify-end mt-2">
              <button
                className="bg-[#FD4C5C] rounded-[8px] text-[14px] text-white py-2 px-4 font-semibold font-inter"
                onClick={() => onExploreClick(tour.id)}
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};