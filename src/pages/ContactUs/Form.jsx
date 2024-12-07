import React from "react";

const Form = () => {
	return (
		<div className="flex flex-col ">
			{/* Map Section */}
			<div className="w-full flex" style={{ height: "400px" }}>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4047213.2839410105!2d80.70625!3d7.857684999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2slk!4v1716777439814!5m2!1sen!2slk"
					width="100%"
					height="100%"
					style={{ border: "0" }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"></iframe>
			</div>

			{/* Form Section */}
			<div className="w-full grid md:grid-cols-2  p-6 md:px-24 px-6">
				<div className="bg-gray-50 p-8">
					<h3 className="text-lg font-bold mb-4">Contact Information</h3>
					<p>Enter your details below to get in touch.</p>
				</div>
				<div className=" shadow-custom-drop flex-col bg-gray-50 p-8 ">
					<form className="">
						<div className="mb-4">
							<label className="block text-sm font-medium text-gray-700">
								Name
							</label>
							<input
								type="text"
								className="w-full border border-gray-300 rounded-md p-2 mt-1"
								placeholder="Your Name"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-sm font-medium text-gray-700">
								Email
							</label>
							<input
								type="email"
								className="w-full border border-gray-300 rounded-md p-2 mt-1"
								placeholder="Your Email"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-sm font-medium text-gray-700">
								Message
							</label>
							<textarea
								className="w-full border border-gray-300 rounded-md p-2 mt-1"
								rows="4"
								placeholder="Your Message"
							></textarea>
						</div>
						<button
							type="submit"
							className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Form;
