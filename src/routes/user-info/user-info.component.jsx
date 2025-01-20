import React from "react";
import "./user-info.styles.scss";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";

const UserInfo = () => {
	return (
		<div className="user-info-container">
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form>
				<FormInput
					label="Display Name"
					type="text"
					required
					// onChange={}
					name="displayName"
					// value={displayName}
				/>

				<FormInput
					label="Email"
					type="text"
					required
					// onChange={}
					name="email"
					// value={email}
				/>

				<FormInput
					label="Password"
					type="password"
					required
					// onChange={}
					name="password"
					// value={password}
				/>

				<FormInput
					label="Confirm Password"
					type="password"
					required
					// onChange={}
					name="confirmPassword"
					// value={confirmPassword}
				/>
				<Button type="submit">Sign Up</Button>
			</form>
		</div>
	);
};

export default UserInfo;
