import React from "react";
import "./shopping-category.styles.scss";
import ProductCard from "../product-card/product-card.component";
import { useNavigate } from "react-router-dom";

const ShoppingCategory = ({ products }) => {
	const navigate = useNavigate();
	return (
		<div className="shopping-category-container">
			<h2 onClick={() => navigate(products.title.toLowerCase())}>
				{products.title}
			</h2>
			<div className="shopping-category">
				{products.items
					.filter((_, idx) => idx < 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</div>
		</div>
	);
};

export default ShoppingCategory;
