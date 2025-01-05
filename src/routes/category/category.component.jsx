import React, { useEffect, useState } from "react";
import "./category.styles.scss";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
	selectItemList,
	selectItemListMap,
} from "../../store/itemList/item-list.selector";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
	const { category } = useParams();
	const itemList = useSelector(selectItemList);
	const selectCategory = itemList.filter(
		(list) => list.title.toLowerCase() === category
	);
	const [products, setProducts] = useState(selectCategory[0]);

	useEffect(() => {
		setProducts(selectCategory[0]);
		console.log(products);
	}, [category, itemList]);

	return (
		<div className="category-container">
			<h3 className="category-title">{category.toUpperCase()}</h3>
			<div className="category-items-container">
				{products &&
					products.items.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</div>
		</div>
	);
};

export default Category;
