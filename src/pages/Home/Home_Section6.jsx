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
			<div className="grid grid-cols-5 h-[250px]">
				<div className="w-full h-[250px]">
					<div className=" h-full">
						<img src={Home_Section6_1} alt="" className="h-full object-cover" />
					</div>
				</div>
				<div className="col-span-4 flex flex-col items-center justify-center h-[250px]">
					<div className=" w-full h-full">
						<img
							src={Home_Section6_1}
							alt=""
							className="object-cover w-full h-full"
							style={{
								backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							  }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home_Section6;
