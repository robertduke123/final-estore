import React from "react";
import { Route, Routes } from "react-router-dom";
import ShoppingCategories from "../shopping-categories/shopping-categories.component";
import Category from "../category/category.component";
import ProductPage from "../../components/product-page/product-page.component";

const Shop = () => {
	return (
		<Routes>
			<Route index element={<ShoppingCategories />} />
			<Route path=":category" element={<Category />} />
			<Route path="product/:id" element={<ProductPage />} />
		</Routes>
	);
};

export default Shop;
