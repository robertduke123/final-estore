import React from "react";
import { useSelector } from "react-redux";
import { selectItemList } from "../../store/itemList/item-list.selector";
import ShoppingCategory from "../../components/shopping-category/shopping-category.component";

const ShoppingCategories = () => {
	const itemList = useSelector(selectItemList);

	return (
		<div style={{ padding: "80px 30px 30px" }}>
			{Object.keys(itemList).map((title, indx) => {
				const products = itemList[title];
				return (
					<ShoppingCategory key={"category " + indx} products={products} />
				);
			})}
		</div>
	);
};

export default ShoppingCategories;
