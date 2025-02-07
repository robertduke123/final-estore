import React, { useState } from "react";
import "./password-form.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import {
	setMessage,
	setMessageDisplay,
} from "../../store/message/message.reducer";

const PasswordForm = ({ handleEdit }) => {
	const dispatch = useDispatch();
	const { email } = useSelector(selectCurrentUser);
	const [displayInfo, setDisplayInfo] = useState({
		prevPassword: "",
		newPassword: "",
		newPasswordConfirm: "",
	});

	const { prevPassword, newPassword, newPasswordConfirm } = displayInfo;
	const handleChange = (e) => {
		const { name, value } = e.target;
		setDisplayInfo({ ...displayInfo, [name]: value });
	};

	const handleSetPassword = async (e) => {
		e.preventDefault();
		if (newPassword === prevPassword) {
			dispatch(setMessageDisplay(true));
			return dispatch(setMessage("New password must be different"));
		}
		if (newPassword === newPasswordConfirm) {
			await fetch("http://localhost:4000/pass", {
				method: "POST",
				headers: { "Content-Type": "application/Json" },
				body: JSON.stringify({
					email: email,
					prevPassword: prevPassword,
					newPassword: newPassword,
				}),
			}).then((res) => {
				if (res.status === 400) {
					dispatch(setMessageDisplay(true));
					dispatch(setMessage(res.json()));
				} else {
					res.json().then((data) => {
						dispatch(setMessageDisplay(true));
						dispatch(setMessage(data));
						handleEdit("display");
					});
				}
			});
		} else {
			dispatch(setMessageDisplay(true));
			return dispatch(setMessage("New password does not match confirm"));
		}
	};

	return (
		<div className="password-form-container">
			<form onSubmit={handleSetPassword}>
				<FormInput
					label="Old Password"
					type="password"
					required
					onChange={handleChange}
					name="prevPassword"
					value={prevPassword}
				/>

				<FormInput
					label="New Password"
					type="password"
					required
					onChange={handleChange}
					name="newPassword"
					value={newPassword}
				/>
				<FormInput
					label="Confirm Password"
					type="password"
					required
					onChange={handleChange}
					name="newPasswordConfirm"
					value={newPasswordConfirm}
				/>

				<div
					style={{
						width: "350px",
						display: "flex",
						justifyContent: "space-between",
					}}>
					<Button
						type="text"
						buttonType="inverted"
						onClick={() => handleEdit("display")}>
						Back
					</Button>
					<Button type="submit" buttonType="inverted">
						Edit
					</Button>
				</div>
			</form>
		</div>
	);
};

export default PasswordForm;
