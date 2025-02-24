import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./stripe";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	<Provider store={store}>
		<BrowserRouter>
			<Elements stripe={stripePromise}>
				<App />
			</Elements>
		</BrowserRouter>
	</Provider>
	// </React.StrictMode>
);
