import React, { useEffect, useState } from "react";
import "./checkout-form.styles.scss";
import FormInput from "../form-input/form-input.component";
import PaymentForm from "../payment-form/payment-form.component.jsx";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

const defaultFormFields = {
	email: "",
	phone: "",
	address: "",
	city: "",
	country: "",
};

const CheckoutForm = ({ handleToCheckout }) => {
	const currentUser = useSelector(selectCurrentUser);
	// const [toCheckout, setToCheckout] = useState(false);
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, phone, address, city, country } = formFields;

	// const resetFormFields = () => {
	// 	setFormFields(defaultFormFields);
	// };

	useEffect(() => {
		if (currentUser) {
			const { name, email, phone, address, city, country } = currentUser;
			setFormFields({
				name: name,
				email: email,
				phone: phone,
				address: address,
				city: city,
				country: country,
			});
			console.log(currentUser);
		}
	}, [currentUser]);

	const handleChange = (e) => {
		setFormFields({ ...formFields, [e.target.name]: e.target.value });
	};

	return (
		<div className="checkout-form-container">
			<div className="left" onClick={handleToCheckout}>
				&#x2190; BACK
			</div>
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
				<FormInput
					label="City"
					type="text"
					onChange={handleChange}
					name="city"
					value={city}
				/>
				<FormInput
					label="Country"
					type="text"
					onChange={handleChange}
					name="country"
					value={country}
				/>
			</form>
			<PaymentForm formFields={formFields} />
		</div>
	);
};

export default CheckoutForm;
