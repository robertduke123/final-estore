import React, { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import Footer from "./routes/footer/footer.component";
import Checkout from "./routes/checkout/checkout.component";
import Authentication from "./routes/authentication/authentication.component";
import SHOP_DATA from "./shop-data";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, setPastOrders } from "./store/user/user.reducer";
import UserInfo from "./routes/user-info/user-info.component";
import { selectCurrentUser } from "./store/user/user.selector";
import Message from "./components/message/message.component";
import { selectMessageDisplay } from "./store/message/message.selector";
import { setItemList } from "./store/itemList/item-list.reducer";
import { setCart } from "./store/cart/cart.reducer";
import Orders from "./routes/orders/orders.components";
import { selectOrder } from "./store/checkout/checkout.selector";
import { selectItemList } from "./store/itemList/item-list.selector";

const App = () => {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
	const order = useSelector(selectOrder);
	const itemList = useSelector(selectItemList);
	const messageDisplay = useSelector(selectMessageDisplay);

	useEffect(() => {
		dispatch(setItemList(SHOP_DATA));
		if (localStorage.getItem("refreshToken")) {
			const refresh = localStorage.getItem("refreshToken");
			const cart = JSON.parse(localStorage.getItem("cart"));
			if (cart) {
				dispatch(setCart(cart));
			}

			fetch("https://e-store-api-z8jl.onrender.com/token", {
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
						fetch("https://e-store-api-z8jl.onrender.com/post", {
							headers: {
								Authorization: `Bearer ${data}`,
								"Content-Type": "application/json",
							},
						})
							.then((response) => response.json())
							.then((data) => {
								dispatch(setCurrentUser(data[0]));
							});
					}
				});
		}
	}, []);

	useEffect(() => {
		if (currentUser) {
			fetch("https://e-store-api-z8jl.onrender.com/past-orders", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					id: currentUser.id,
				}),
			})
				.then((response) => response.json())
				.then((data) => {
					// const detailedPastOrders = [];
					// detailedPastOrders.push(data.forEach((order) => order.order_ids.forEach((id) => itemList.forEach((item) => item.id === id))))

					dispatch(setPastOrders(data));
				});
		}
	}, [currentUser, order]);

	return (
		<Fragment>
			{messageDisplay && <Message />}
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route path="/" element={<Footer />}>
						<Route index element={<Home />} />
						<Route path="shop/*" element={<Shop />} />
						<Route path="checkout" element={<Checkout />} />
						<Route path="auth" element={<Authentication />} />
						<Route path="orders" element={<Orders />} />
						<Route path="user" element={<UserInfo />} />
					</Route>
				</Route>
			</Routes>
		</Fragment>
	);
};

export default App;
