import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Faq = () => {
	const [activeIndex, setActiveIndex] = useState(null); // To track which item is active

	const faqs = [
		{
			question: "When will my order ship?",
			answer: "Your order will ship within 2-3 business days.",
		},
		// Add more FAQs as needed
		{
			question: "How can I track my order?",
			answer:
				"You can track your order using the tracking number provided in your email.",
		},
		{
			question: "How can I track my order?",
			answer:
				"You can track your order using the tracking number provided in your email.",
		},
		{
			question: "How can I track my order?",
			answer:
				"You can track your order using the tracking number provided in your email.",
		},
		{
			question: "How can I track my order?",
			answer:
				"You can track your order using the tracking number provided in your email.",
		},
		{
			question: "How can I track my order?",
			answer:
				"You can track your order using the tracking number provided in your email.",
		},
	];

	const handleToggle = (index) => {
		if (activeIndex === index) {
			setActiveIndex(null); // If clicked again, collapse
		} else {
			setActiveIndex(index); // Expand clicked item
		}
	};

	return (
		<div className="flex flex-col md:px-24 px-6 py-24">
			<div className="flex text-xl font-bold"> FAQ</div>
			<div className="grid md:grid-cols-3 mt-8 gap-x-4gap-4 items-center justify-center">
				{faqs.map((faq, index) => (
					<div
						key={index}
						className={`flex flex-col  p-4 ${
							activeIndex === index
								? "border border-gray-300 rounded-[12px]"
								: ""
						}`}>
						<div
							className="flex items-center cursor-pointer"
							onClick={() => handleToggle(index)}>
							{activeIndex === index ? <FaMinus /> : <FaPlus />}
							<p className="ml-3 font-semibold">{faq.question}</p>
						</div>
						{activeIndex === index && (
							<p className="text-gray-600 mt-2">{faq.answer}</p>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Faq;
