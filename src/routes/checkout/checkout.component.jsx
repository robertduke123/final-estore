import React from "react";
import "./checkout.styles.scss";
import { useSelector } from "react-redux";
import {
	selectCartItems,
	selectCartTotal,
} from "../../store/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import useWindowWidth from "../../hooks/window-hook";

const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);
	const width = useWindowWidth();

	return (
		<div
			className="checkout-container"
			style={{ width: `${width >= 850 ? "55%" : "100%"}` }}>
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
			<PaymentForm />
		</div>
	);
};

export default Checkout;
