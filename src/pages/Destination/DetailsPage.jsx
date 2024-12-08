import React from "react";
import { useParams } from "react-router-dom";

const galleryDetails = {
	1: {
		title: "Europe",
		description:
			"The secret journey of Tonkin is designed for travelers who want to touch, taste and feel the souls of Northern Vietnam through their unique highlights and experiences. More than simple whirlwind tours, the secret journey of Tonkin of Tonkin marry iconic destinations and must-see spots with the hidden corners and below-the-skin experiences to discover some of the famous and unique places around the Halong region.",
		image:
			"https://images.unsplash.com/photo-1665689285334-b0044b6d2dc7?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY0NjAxMTY&ixlib=rb-4.0.3&q=80",
	},
	2: {
		title: "Asia",
		description: "Discover the vibrant landscapes and traditions of Asia.",
		image:
			"https://images.unsplash.com/photo-1666433723497-38d1d053185b?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDEwNDU&ixlib=rb-4.0.3&q=80",
	},
	// Add more details for other items
};

const DetailsPage = () => {
	const { id } = useParams();
	const details = galleryDetails[id];

	if (!details) {
		return (
			<div className="flex flex-col items-center justify-center h-screen">
				<p className="text-2xl font-semibold text-gray-600">
					Details not found.
				</p>
			</div>
		);
	}

	return (
		<div className="flex flex-col">
			<div
				className="flex w-full h-[80vh] bg-cover bg-center items-center justify-center"
				style={{
					backgroundImage: `url(${details.image})`,
				}}>
				<p className="text-center text-white font-bold text-[48px]">
					{details.title}
				</p>
			</div>
			<div className="grid md:grid-cols-10 w-full md:px-24 px-6 py-24 ">
				<div className="md:col-span-6 flex flex-col text-left items-start">
					<p className="text-center text-black font-bold text-[48px]">
						Overview
					</p>
					<p className="text-[#444444] text-[15px] font-inter">
						{details.description}
					</p>
				</div>
				<div className="md:col-span-4 flex flex-col items-end ">
					<div className="bg-white flex flex-col rounded-[5px] shadow-custom-drop w-full p-4">
						<p className="block text-sm font-medium text-gray-700">
							Tour details
						</p>
						<div className="border-y border-gray-300 flex justify-between py-4 mt-4">
							<div>
								<p className="block text-sm font-medium text-gray-700">
									Tour details
								</p>
							</div>
							<div>
								<p className="block text-sm font-medium text-gray-700">
									Tour details
								</p>
							</div>
						</div>
						<div className="border-b border-gray-300 flex justify-between py-4 ">
							<div  >
								<p className="block text-sm font-medium text-gray-700 ">
                                Price
								</p>
							</div>
							<div  >
								<p className="block text-sm font-medium text-gray-700 ">
									Tour details
								</p>
							</div>
						</div>
						<div className="border-b border-gray-300 flex justify-between py-4 ">
							<div  >
								<p className="block text-sm font-medium text-gray-700 ">
                                Categories
								</p>
							</div>
							<div  >
								<p className="block text-sm font-medium text-gray-700 ">
									Tour details
								</p>
							</div>
						</div>
						<div className="border-b border-gray-300 flex justify-between py-4 ">
							<div  >
								<p className="block text-sm font-medium text-gray-700 ">
                                Capital
								</p>
							</div>
							<div  >
								<p className="block text-sm font-medium text-gray-700 ">
									Tour details
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailsPage;
