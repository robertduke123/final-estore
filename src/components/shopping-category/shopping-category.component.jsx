import React from "react";
import "./shopping-category.styles.scss";
import ProductCard from "../product-card/product-card.component";

const ShoppingCategory = ({ products }) => {
	console.log(products);

	return (
		<div className="shopping-category-container">
			<h2>{products.title}</h2>
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
