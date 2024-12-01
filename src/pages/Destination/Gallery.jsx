import React from "react";

const Gallery = () => {
	return (
		<div className="flex md:px-24 px-6 flex-col">
			<div className="max-w-screen-2xl mx-auto px-4 py-16 lg:py-12 relative items-center justify-center bg-gray-50 ">
				<div className="flex flex-col md:flex-row gap-2">
					<div className="flex flex-1 flex-col gap-2">
						<div
							className="flex flex-1 flex-col bg-cover bg-center h-full relative group overflow-hidden"
							style={{
								backgroundImage: `url('https://images.unsplash.com/photo-1665689285334-b0044b6d2dc7?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY0NjAxMTY&ixlib=rb-4.0.3&q=80')`,
							}}>
							<div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"></div>
							<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
								<p className="text-white text-lg font-bold">Europe</p>
							</div>
						</div>

						<div className="md:flex flex-1 flex-row gap-2">
							<div className="flex flex-1 flex-col">
								<img
									className="object-cover h-full"
									src="https://images.unsplash.com/photo-1666433723497-38d1d053185b?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDEwNDU&ixlib=rb-4.0.3&q=80"
									alt="Gallery Image 2"
								/>
							</div>
							<div className="md:flex flex-1 flex-col">
								<img
									className="object-cover h-full"
									src="https://images.unsplash.com/photo-1665048110211-91d0b74c421c?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY0NjAxMTY&ixlib=rb-4.0.3&q=80"
									alt="Gallery Image 3"
								/>
							</div>
						</div>
					</div>
					<div className="flex flex-1 flex-col gap-2">
						<div className="md:flex flex-1 flex-row gap-2">
							<div className="flex flex-1 flex-col">
								<img
									className="object-cover h-full"
									src="https://images.unsplash.com/photo-1666297599033-09b318f2c8b5?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDExMjk&ixlib=rb-4.0.3&q=80"
									alt="Gallery Image 4"
								/>
							</div>
							<div className="md:flex flex-1 flex-col">
								<img
									className="object-cover h-full"
									src="https://images.unsplash.com/photo-1664713815297-9ce06950c022?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDEzMDc&ixlib=rb-4.0.3&q=80"
									alt="Gallery Image 5"
								/>
							</div>
						</div>
						<div className="flex flex-1 flex-col">
							<img
								className="object-cover h-full"
								src="https://images.unsplash.com/photo-1666060519824-796d5638d809?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDExOTQ&ixlib=rb-4.0.3&q=80"
								alt="Gallery Image 6"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
