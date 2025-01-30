import React, { useState } from "react";
import "./user-form.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { setCurrentUser } from "../../store/user/user.reducer";

const UserForm = ({ handleEdit }) => {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
	const [displayInfo, setDisplayInfo] = useState({
		displayName: currentUser ? currentUser.name : "",
		email: currentUser ? currentUser.email : "",
		phone: currentUser ? currentUser.phone : "",
		address: currentUser ? currentUser.address : "",
	});

	const { displayName, email, phone, address } = displayInfo;
	const handleChange = (e) => {
		const { name, value } = e.target;
		setDisplayInfo({ ...displayInfo, [name]: value });
	};

	const handleSetChanges = (e) => {
		e.preventDefault();
		const newInfo = {
			id: currentUser.id,
			name: displayName,
			email: email,
			phone: phone,
			address: address,
		};
		dispatch(setCurrentUser(newInfo));
	};

	return (
		<div className="user-form-container">
			<form>
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
							name="email"
							value={email}
						/>
					</div>
					<div className="inputs">
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
					</div>
				</div>

				<div
					style={{
						width: "350px",
						display: "flex",
						justifyContent: "space-between",
					}}>
					<Button type="text" buttonType="inverted" onClick={handleEdit}>
						Back
					</Button>
					<Button
						type="submit"
						buttonType="inverted"
						onClick={handleSetChanges}>
						Edit
					</Button>
				</div>
			</form>
		</div>
	);
};

export default UserForm;
