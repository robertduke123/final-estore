import React, { useEffect, useState } from "react";
import "./checkout.styles.scss";
import CheckoutCart from "../../components/checkout-cart/checkout-cart.component";
import CheckoutForm from "../../components/checkout-form/checkout-form";
import { selectConfirmation } from "../../store/checkout/checkout.selector";
import { useDispatch, useSelector } from "react-redux";
import OrderConfirmation from "../../components/order-confirmation/order-confirmation.component";
import { setConfirmation } from "../../store/checkout/checkout.reducer";

const Checkout = () => {
	const [toCheckout, setToCheckout] = useState(false);
	const confirmation = useSelector(selectConfirmation);
	const dispatch = useDispatch();

	const handleToCheckout = () => {
		window.scrollTo(0, 0);
		setToCheckout(!toCheckout);
	};

	useEffect(() => {
		dispatch(setConfirmation(false));
		setToCheckout(false);
	}, []);

	return (
		<div style={{ width: "100%" }}>
			{confirmation ? (
				<OrderConfirmation />
			) : toCheckout ? (
				<div className="checkout-container">
					<CheckoutForm handleToCheckout={handleToCheckout} />
				</div>
			) : (
				<CheckoutCart handleToCheckout={handleToCheckout} />
			)}
		</div>
	);
};

export default Checkout;
