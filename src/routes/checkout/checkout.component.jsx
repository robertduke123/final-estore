import React, { useState } from "react";
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

const defaultFormFields = {
	email: "",
	phone: "",
	address: "",
};

const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);
	const width = useWindowWidth();
	const [toCheckout, setToCheckout] = useState(false);
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, phone, address } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleChange = (e) => {
		setFormFields({ ...formFields, [e.target.name]: e.target.value });
		console.log(formFields);
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
						<Button type="submit">Sign Up</Button>
					</form>
				</div>
			) : (
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
					{/* <PaymentForm /> */}
					<Button onClick={handleToCheckout}>Checkout</Button>
				</div>
			)}
		</div>
	);
};

export default Checkout;
