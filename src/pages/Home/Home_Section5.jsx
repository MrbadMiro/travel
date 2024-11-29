import { HomeSection_2_1,Hero_Section2_bg } from "../../assets";


const Home_Section5 = () => {
	const createSectionStyle = (image) => ({
		backgroundImage: `url(${image})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	});
	const sectionStyle = createSectionStyle(Hero_Section2_bg);
	return (
		<div className="flex md:px-24 px-6 bg-[#F2F2F2] py-24 flex-col" style={sectionStyle}>
			<div className="w-full flex flex-cols-2">
				<div className="w-full flex flex-col">
					<p className="font-LaBelle text-[#00BB98] font-normal text-[36px] ">
						Next Adventure
					</p>
					<p className="font-nunito text-[#111B19]  font-bold  text-[48px]">
						Travel Destinations Available Worldwide
					</p>
					<p className="mt-4  text-[#2B2945] font-Jost font-normal text-[16px] text-justify">
						We have compiled a list of top destinations across the globe,
						scoured the world for the most alluring and fascinating places to
						visit. From the beautiful beaches of the Caribbean to the majestic
						mountains of Europe and the vibrant cities of Asia, our destination
						list has something for everyone.
					</p>
				</div>
				<div className="w-full"></div>
			</div>

			<div className="flex flex-cols-4 w-full gap-2 mt-5 ">
				<div className="w-full h-[300px] "> 
                    <img src={HomeSection_2_1} alt=""  className="w-full object-cover h-full rounded-xl"/>
                </div>
				<div className="w-full h-[300px]  "> 
                    <img src={HomeSection_2_1} alt=""  className="w-full object-cover h-full rounded-xl"/>
                </div>
				<div className="w-full h-[300px] "> 
                    <img src={HomeSection_2_1} alt=""  className="w-full object-cover h-full rounded-xl"/>
                </div>
				<div className="w-full h-[300px]  "> 
                    <img src={HomeSection_2_1} alt=""  className="w-full object-cover h-full rounded-xl"/>
                </div>
			</div>
		</div>
	);
};

export default Home_Section5;
