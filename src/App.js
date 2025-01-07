import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import Footer from "./routes/footer/footer.component";
import Checkout from "./routes/checkout/checkout.component";
import Authentication from "./routes/authentication/authentication.component";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.reducer";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const refresh = localStorage.getItem("refreshToken");
		fetch("http://localhost:4000/token", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				token: refresh,
			}),
		})
			.then((response) => {
				if (response.status !== 403) {
					return response.json();
				}
			})
			.then((data) => {
				if (data?.length > 15) {
					fetch("http://localhost:4000/post", {
						headers: {
							Authorization: `Bearer ${data}`,
							"Content-Type": "application/json",
						},
					})
						.then((response) => response.json())
						.then((data) => {
							dispatch(setCurrentUser(data));
						});
				}
			});
	}, []);

	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route path="/" element={<Footer />}>
					<Route index element={<Home />} />
					<Route path="shop/*" element={<Shop />} />
					<Route path="checkout" element={<Checkout />} />
					<Route path="auth" element={<Authentication />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default App;
