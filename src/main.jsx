import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./ErrorPage";

//pages
import About from "./pages/About/About";
import ContactUs from "./pages/ContactUs/ContactUs";
import Destination from "./pages/Destination/Destination";



const router = createBrowserRouter([
	{
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/travel",
				element: <App />,
			},
			{
				path: "/travel/about",
				element: <About />,
			},
			{
				path: "/travel/contact",
				element: <ContactUs/>,
			},
			{
				path: "/travel/destination",
				element: <Destination/>,
			},
			
			
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
