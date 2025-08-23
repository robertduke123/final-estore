import React, { useEffect, useState } from "react";
import "./checkout.styles.scss";
import { useSelector } from "react-redux";
import {
	selectCartItems,
	selectCartTotal,
} from "../../store/cart/cart.selector";
import useWindowWidth from "../../hooks/window-hook";
import { selectCurrentUser } from "../../store/user/user.selector";
import CheckoutCart from "../../components/checkout-cart/checkout-cart.component";
import CheckoutForm from "../../components/checkout-form/checkout-form";

const defaultFormFields = {
	email: "",
	phone: "",
	address: "",
};

const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);
	const currentUser = useSelector(selectCurrentUser);
	const width = useWindowWidth();
	const [toCheckout, setToCheckout] = useState(false);
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, phone, address } = formFields;

	// const resetFormFields = () => {
	// 	setFormFields(defaultFormFields);
	// };

	useEffect(() => {
		if (currentUser) {
			const { email, phone, address } = currentUser;
			setFormFields({ email: email, phone: phone, address: address });
			console.log(currentUser);
		}
	}, [currentUser]);

	const handleChange = (e) => {
		setFormFields({ ...formFields, [e.target.name]: e.target.value });
	};

	const handleToCheckout = () => setToCheckout(!toCheckout);

	return (
		<div style={{ width: "100%" }}>
			{toCheckout ? (
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
