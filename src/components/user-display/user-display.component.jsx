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
				<h3>Address: </h3>
				<span>{currentUser ? currentUser?.address : ""}</span>
			</div>
			<span className="user-display-edit" onClick={handleEdit}>
				Edit Profile
			</span>
		</div>
	);
};

export default UserDisplay;
