import React from "react";
import "./checkout.styles.scss";
import { useSelector } from "react-redux";
import {
	selectCartItems,
	selectCartTotal,
} from "../../store/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);

	return (
		<div className="checkout-container">
			<div className="checkout-header">
				<div className="checkout-header-block">
					<span>Product</span>
				</div>
				<div className="checkout-header-block">
					<span>Description</span>
				</div>
				<div className="checkout-header-block">
					<span>Quantity</span>
				</div>
				<div className="checkout-header-block">
					<span>Price</span>
				</div>
				<div className="checkout-header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<div className="total">Total: ${cartTotal}</div>
		</div>
	);
};

export default Checkout;
