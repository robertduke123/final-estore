import React, { useEffect, useState } from "react";
import "./checkout.styles.scss";
import { useSelector } from "react-redux";
import {
	selectCartItems,
	selectCartTotal,
} from "../../store/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import useWindowWidth from "../../hooks/window-hook";
import Button from "../../components/button/button.component";
import FormInput from "../../components/form-input/form-input.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import CheckoutCart from "../../components/checkout-cart/checkout-cart.component";

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
					<form>
						<FormInput
							label="Email"
							type="email"
							required
							onChange={handleChange}
							name="email"
							value={email}
						/>
						<FormInput
							label="Phone"
							type="number"
							onChange={handleChange}
							name="phone"
							value={phone}
						/>

						<FormInput
							label="Address"
							type="text"
							onChange={handleChange}
							name="address"
							value={address}
						/>
						<PaymentForm />
					</form>
				</div>
			) : (
				<CheckoutCart handleToCheckout={handleToCheckout} />
			)}
		</div>
	);
};

export default Checkout;
