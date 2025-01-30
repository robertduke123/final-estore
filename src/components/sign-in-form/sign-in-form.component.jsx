import React, { useState } from "react";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/user/user.reducer";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
	name: "",
	email: "",
	password: "",
};

const SignInForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFromFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await fetch("http://localhost:4000/signin", {
			method: "POST",
			headers: { "Content-Type": "application/Json" },
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				localStorage.setItem("refreshToken", data.refreshToken);
				fetch("http://localhost:4000/post", {
					headers: {
						Authorization: `Bearer ${data.accessToken}`,
						"Content-Type": "application/json",
					},
				})
					.then((res) => res.json())
					.then((data) => {
						dispatch(setCurrentUser(data[0]));
						navigate("/");
						resetFromFields();
					});
			});
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="sign-in-container">
			<h2>Already Have an Account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
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
				<Button type="submit">Submit</Button>
			</form>
		</div>
	);
};

export default SignInForm;
