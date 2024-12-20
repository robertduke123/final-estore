import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setItemList } from "../../store/itemList/item-list.reducer";
import SHOP_DATA from "../../shop-data";
import ShoppingCategories from "../shopping-categories/shopping-categories.component";
import Category from "../category/category.component";

const Shop = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setItemList(SHOP_DATA));
	}, []);

	return (
		<Routes>
			<Route index element={<ShoppingCategories />} />
			<Route path=":category" element={<Category />} />
		</Routes>
	);
};

export default Shop;
