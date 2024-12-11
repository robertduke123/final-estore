import React from "react";
import "./product-card.styles.scss";
import Button from "../button/button.component";

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	return (
		<div className="product-container">
			<img src={imageUrl} alt={`${name}`} />
			<div className="product-footer">
				<h2>{name}</h2>
				<p>{price}</p>
			</div>
			<Button buttonType="inverted">ADD TO CART</Button>
		</div>
	);
};

export default ProductCard;
