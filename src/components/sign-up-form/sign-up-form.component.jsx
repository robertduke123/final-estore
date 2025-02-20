import React, { useState } from "react";
import "./sign-up-form.styles.scss";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/user/user.reducer";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
	displayName: "",
	email: "",
	phone: "",
	address: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, phone, address, password, confirmPassword } =
		formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			await fetch("https://e-store-api-5r16.onrender.com/register", {
				method: "POST",
				headers: { "Content-Type": "application/Json" },
				body: JSON.stringify({
					name: displayName,
					email: email,
					phone: phone,
					address: address,
					password: password,
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					dispatch(setCurrentUser(data));
					navigate("/");
					resetFormFields();
				});
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="sign-up-container">
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					type="text"
					required
					onChange={handleChange}
					name="displayName"
					value={displayName}
				/>

				<FormInput
					label="Email"
					type="email"
					required
					onChange={handleChange}
					name="email"
					value={email}
				/>

				<FormInput
					label="Password"
					type="password"
					required
					onChange={handleChange}
					name="password"
					value={password}
				/>

				<FormInput
					label="Confirm Password"
					type="password"
					required
					onChange={handleChange}
					name="confirmPassword"
					value={confirmPassword}
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
	);
};

export default SignUpForm;
