import { Home_Section4_1, Home_Section4_2 } from "../../assets";

const Home_Section4 = () => {
	return (
		<div className="flex md:px-24 px-6 py-24">
			<div className="flex flex-cols-2 w-full">
				<div className="flex flex-cols-2 w-full relative gap-2">
					<div className="flex gap-1 relative ">
						<div className="bg-[#FD4C5C] w-[200px] h-[150px] absolute -right-14 flex flex-col  bottom-8 rounded-xl p-4">
							<p className="text-white text-[32px]">84K+</p>
							<p className="text-white text-[14px] ">Global Trusted Clients</p>
							<img src="" alt="" />
						</div>
						<img src={Home_Section4_2} alt="" className="w-[250px]" />
					</div>
					<div>
						<img src={Home_Section4_1} alt="" className="w-[300px]" />
					</div>
				</div>
				<div className="flex flex-col">
					<p className="font-nunito text-[#111B19]  font-bold  text-[46px]">
						Global Trusted Travel and Advanture Partners
					</p>
					<p className="font- text-[#444444] text-[18px] font-medium">
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered simply free text available
					</p>
					<div className="flex flex-col mt-4">
						<div className="bg-white flex p-4 box mt-4 border-l-2 rounded-xl border-red-600">
							<img src="" alt="" className="w-[15px] h-[15px]" />
							<div className="flex flex-col">
								<p className="font-nunito text-[#111B19]  font-bold  text-[18px]">723+ Destinations</p>
								<p className="font-nunito text-[#111B19]  font-normal  text-[14px]">Available, but the majority have suffered simply</p>
							</div>
						</div>
						<div className="bg-white flex p-4 box mt-4 border-l-2 rounded-xl border-red-600">
							<img src="" alt="" className="w-[15px] h-[15px]" />
							<div className="flex flex-col">
								<p className="font-nunito text-[#111B19]  font-bold  text-[18px]">Best Price Gurantee</p>
								<p className="font-nunito text-[#111B19]  font-normal  text-[14px]">Available, but the majority have suffered simply</p>
							</div>
						</div>
						<div className="bg-white flex p-4 box mt-4 border-l-2 rounded-xl border-red-600">
							<img src="" alt="" className="w-[15px] h-[15px]" />
							<div className="flex flex-col">
								<p className="font-nunito text-[#111B19]  font-bold  text-[18px]">Top Notch Support</p>
								<p className="font-nunito text-[#111B19]  font-normal  text-[14px]">Available, but the majority have suffered simply</p>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home_Section4;
