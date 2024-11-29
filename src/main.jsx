import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./ErrorPage";
import About from "./pages/About/About";



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
				path: "/about",
				element: <About />,
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
