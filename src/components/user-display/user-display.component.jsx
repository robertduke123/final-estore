import React from "react";
import "./user-display.styles.scss";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

const UserDisplay = ({ handleEdit }) => {
	const currentUser = useSelector(selectCurrentUser);

	return (
		<div className="user-display-container">
			<div className="user-display">
				<h3>Name: </h3>
				<span>{currentUser ? currentUser.name : ""}</span>
			</div>
			<div className="user-display">
				<h3>Email: </h3>
				<span>{currentUser ? currentUser.email : ""}</span>
			</div>
			<div className="user-display">
				<h3>Phone: </h3>
				<span>{currentUser ? currentUser.phone : ""}</span>
			</div>
			<div className="user-display">
				<h3>Address: </h3>
				<span>{currentUser ? currentUser?.address : ""}</span>
			</div>
			<div style={{ display: "flex" }}>
				<span className="user-display-edit" onClick={() => handleEdit("form")}>
					Edit Profile
				</span>
				<span
					style={{ marginLeft: "50px" }}
					className="user-display-edit"
					onClick={() => handleEdit("password")}>
					Edit Password
				</span>
			</div>
		</div>
	);
};

export default UserDisplay;
