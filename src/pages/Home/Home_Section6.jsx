import { HomeSection_2_1, Container, Home_Section6_1 } from "../../assets";

const Home_Section6 = () => {
	const createSectionStyle = (image) => ({
		backgroundImage: `url(${image})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	});
	const sectionStyle = createSectionStyle(Container);
	const sectionStyle1 = createSectionStyle(Home_Section6_1);
	return (
		<div className="flex flex-col h-[250px]">
			<div className="grid   md:grid-cols-5 h-[250px]">
				<div className="w-full h-[250px]">
					<div className=" h-full">
						<img src={Home_Section6_1} alt="" className="h-full object-cover" />
					</div>
				</div>
				<div className="col-span-4 flex flex-col items-center bg-center justify-center h-[250px]">
					<div className=" w-full h-full bg-cover overflow-hidden relative " style={{
								backgroundImage: `url(${Home_Section6_1})`,
							}}>
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center ">
								<p className="text-white text-lg font-bold text-left px-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quos?</p>
							</div>
					
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home_Section6;
