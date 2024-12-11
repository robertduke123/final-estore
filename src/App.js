import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import Footer from "./routes/footer/footer.component";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route path="/" element={<Footer />}>
					<Route index element={<Home />} />
					<Route path="shop" element={<Shop />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default App;
