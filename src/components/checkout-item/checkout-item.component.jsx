import React from "react";
import "./checkout-item.styles.scss";
import { useDispatch } from "react-redux";
import {
	addItemToCart,
	clearItemFromCart,
	removeItemFromCart,
} from "../../store/cart/cart.reducer";

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	const dispatch = useDispatch();

	const handleAddToCart = () => dispatch(addItemToCart(cartItem));
	const handleRemoveFromCart = () => dispatch(removeItemFromCart(cartItem));
	const handleClearItem = () => dispatch(clearItemFromCart(cartItem));

	// comment

	return (
		<div className="checkout-item-container">
			<div className="checkout-item-image-container">
				<img src={imageUrl} alt={`${name}`} />
			</div>
			<span style={{ width: "23%" }}>{name}</span>
			<div style={{ width: "23%", display: "flex" }}>
				<div style={{ cursor: "pointer" }} onClick={handleRemoveFromCart}>
					&#10094;
				</div>
				<div style={{ margin: "0 10px" }}>{quantity}</div>
				<div style={{ cursor: "pointer" }} onClick={handleAddToCart}>
					&#10095;
				</div>
			</div>
			<span style={{ width: "23%" }}>{price}</span>
			<div className="checkout-remove" onClick={handleClearItem}>
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;
