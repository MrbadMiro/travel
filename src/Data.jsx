// Data.js
import {
	Hero_Section2_bg,
	HomeSection_2_1,
	HomeSection_2_2,
	HomeSection_2_3,
	
} from "./assets";

export const navLinks = [
	{ title: "Home", to: "/travel/" },
	{ title: "About Us", to: "/travel/about" },
	{ title: "Destination", to: "/travel/destination" },
	{ title: "Contact", to: "/travel/contact" },
];

export const createSectionStyle = (image) => ({
	backgroundImage: `url(${image})`,
	backgroundSize: "cover",
	backgroundPosition: "center",
});

export const cardsData = [
	{
		style: createSectionStyle(HomeSection_2_1),
		image: "",
		text: "City Walks Tour",
	},
	{
		style: createSectionStyle(HomeSection_2_2),
		image: "",
		text: "Electric Bikes",
	},
	{
		style: createSectionStyle(HomeSection_2_3),
		image: "",
		text: "Skyscrapers View",
	},
];

export const cardsData2 = [
	{
		id: 1,
		title: "Chiang Mai",
		location: "Thailand",
		description:
			"Visit the temples and the Chiang Mai Night Bazaar, a huge market located on Chiang Klan Road.",
		price: "$490",
		sectionStyle: createSectionStyle(HomeSection_2_1),
	},
	{
		id: 2,
		title: "Chiang Mai",
		location: "Thailand",
		description:
			"Visit the temples and the Chiang Mai Night Bazaar, a huge market located on Chiang Klan Road.",
		price: "$490",
		sectionStyle: createSectionStyle(HomeSection_2_2),
	},
	{
		id: 3,
		title: "Chiang Mai",
		location: "Thailand",
		description:
			"Visit the temples and the Chiang Mai Night Bazaar, a huge market located on Chiang Klan Road.",
		price: "$490",
		sectionStyle: createSectionStyle(HomeSection_2_3),
	},
];

export const Client = [
	{
		id: 1,

		category: " Bacon ipsum dolor amet porchetta hamburger swine, ball tip bresaola short ribs fatback strip steak ground round rump. Alcatra shankle ham hock frankfurter, bacon pork loin cow salami meatball hamburgerBeauty & Hair dressing ",
		title:
			"Look like those professional beauticians and hairdressers. Get full beauty treatment here from hair cutting to facial.",
	},
	{
		id: 2,

		category: "Bacon ipsum dolor amet porchetta hamburger swine, ball tip bresaola short ribs fatback strip steak ground round rump. Alcatra shankle ham hock frankfurter, bacon pork loin cow salami meatball hamburger",
		title:
			"Learn the art of making delicious cakes. This course is perfect for bakers and cake enthusiasts who love creating sweet confections that amaze people.",
	},
	{
		id: 3,

		category: "Bacon ipsum dolor amet porchetta hamburger swine, ball tip bresaola short ribs fatback strip steak ground round rump. Alcatra shankle ham hock frankfurter, bacon pork loin cow salami meatball hamburger",
		title:
			"Become a professional tailor. Learn everything in our full-fledged course, from basic stitching to the design of advanced outfits.",
	},
	{
		id: 4,

		category: "Bacon ipsum dolor amet porchetta hamburger swine, ball tip bresaola short ribs fatback strip steak ground round rump. Alcatra shankle ham hock frankfurter, bacon pork loin cow salami meatball hamburger",
		title:
			"The Aari embroidery, rich in its details, is meant for those who wish to bestow their fabric creation with exquisite embellishments.",
	},
	{
		id: 5,

		category: "Bacon ipsum dolor amet porchetta hamburger swine, ball tip bresaola short ribs fatback strip steak ground round rump. Alcatra shankle ham hock frankfurter, bacon pork loin cow salami meatball hamburger",
		title:
			"Learn this traditional art of Mehendi. Various styles and techniques to create beautiful Henna design.",
	},
	
];
