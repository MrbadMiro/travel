import React from "react";
import { useNavigate } from "react-router-dom";

// Gallery images data with different widths
const galleryData = [
	{
		id: 1,
		image: "https://images.unsplash.com/photo-1665689285334-b0044b6d2dc7?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY0NjAxMTY&ixlib=rb-4.0.3&q=80",
		title: "Europe",
		width: "col-span-2", // Spans 2 columns
	},
	{
		id: 2,
		image: "https://images.unsplash.com/photo-1666433723497-38d1d053185b?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDEwNDU&ixlib=rb-4.0.3&q=80",
		width: "col-span-1", // Spans 1 column
	},
	{
		id: 3,
		image: "https://images.unsplash.com/photo-1665048110211-91d0b74c421c?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY0NjAxMTY&ixlib=rb-4.0.3&q=80",
		width: "col-span-1", // Spans 1 column
	},
	{
		id: 4,
		image: "https://images.unsplash.com/photo-1666297599033-09b318f2c8b5?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDExMjk&ixlib=rb-4.0.3&q=80",
		width: "col-span-2", // Spans 2 columns
	},
	{
		id: 5,
		image: "https://images.unsplash.com/photo-1664713815297-9ce06950c022?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDEzMDc&ixlib=rb-4.0.3&q=80",
		width: "col-span-2", // Spans 1 column
	},
	{
		id: 6,
		image: "https://images.unsplash.com/photo-1666060519824-796d5638d809?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDExOTQ&ixlib=rb-4.0.3&q=80",
		width: "col-span-1", // Spans full width
	},
];

const Gallery = () => {
	const navigate = useNavigate();

	const handleClick = (id) => {
		// Navigate to the detail page with the item's ID
		navigate(`/travel/details/${id}`);
	};


	return (
		<div className="flex flex-col md:px-24 px-6">
			<div className="max-w-screen-2xl mx-auto py-16 lg:py-12 bg-gray-50">
				<div className="grid grid-cols-3 gap-4">
					{galleryData.map((item) => (
						<div
							key={item.id}
							className={`relative group overflow-hidden rounded-lg shadow-md h-64 ${item.width}`}
							onClick={() => handleClick(item.id)}>
							<img
								src={item.image}
								alt={`Gallery Image ${item.id}`}
								className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
							/>
							{item.title && (
								<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
									<p className="text-white text-lg font-bold">{item.title}</p>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Gallery;
