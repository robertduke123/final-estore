import React, { useState } from "react";
import "./user-form.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { setCurrentUser } from "../../store/user/user.reducer";
import {
	setMessage,
	setMessageDisplay,
} from "../../store/message/message.reducer";

const UserForm = ({ handleEdit }) => {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
	const [displayInfo, setDisplayInfo] = useState({
		displayName: currentUser ? currentUser.name : "",
		prevEmail: currentUser ? currentUser.email : "",
		newEmail: currentUser ? currentUser.email : "",
		phone: currentUser ? currentUser.phone : "",
		address: currentUser ? currentUser.address : "",
		city: currentUser ? currentUser.city : "",
		country: currentUser ? currentUser.country : "",
	});

	const { displayName, prevEmail, newEmail, phone, address, city, country } =
		displayInfo;
	const handleChange = (e) => {
		const { name, value } = e.target;
		setDisplayInfo({ ...displayInfo, [name]: value });
	};

	const handleSetChanges = async (e) => {
		e.preventDefault();
		const currentId = currentUser.id;
		await fetch(
			"https://e-store-api-z8jl.onrender.com/edit"
			{
				method: "POST",
				headers: { "Content-Type": "application/Json" },
				body: JSON.stringify({
					name: displayName,
					prevEmail: prevEmail,
					newEmail: newEmail,
					phone: phone,
					address: address,
					city: city,
					country: country,
				}),
			},
		)
			.then((res) => res.json())
			.then((data) => {
				dispatch(
					setCurrentUser({
						id: currentId,
						...data,
					}),
				);
				dispatch(setMessageDisplay(true));
				dispatch(setMessage("User info changed"));
				handleEdit("display");
			});
	};

	return (
		<div className="user-form-container">
			<form onSubmit={handleSetChanges}>
				<div
					style={{
						width: "75%",
						display: "flex",
						justifyContent: "space-around",
						flexWrap: "wrap",
					}}>
					<div className="inputs">
						<FormInput
							label="Name"
							type="text"
							required
							onChange={handleChange}
							name="displayName"
							value={displayName}
						/>

						<FormInput
							label="Email"
							type="text"
							required
							onChange={handleChange}
							name="newEmail"
							value={newEmail}
						/>
						<FormInput
							label="Phone"
							type="number"
							onChange={handleChange}
							name="phone"
							value={phone}
						/>
					</div>
					<div className="inputs">
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
					</div>
				</div>

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

export default UserForm;
