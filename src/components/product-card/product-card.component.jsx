import React from "react";
import "./product-card.styles.scss";
import Button from "../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.reducer";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	const handleAddToCart = () => {
		dispatch(addItemToCart(product));
		console.log(cartItems, product);
	};

	return (
		<div className="product-container">
			<img src={imageUrl} alt={`${name}`} />
			<div className="product-footer">
				<h2>{name}</h2>
				<p>{price}</p>
			</div>
			<Button buttonType="inverted" onClick={handleAddToCart}>
				ADD TO CART
			</Button>
		</div>
	);
};

export default ProductCard;
