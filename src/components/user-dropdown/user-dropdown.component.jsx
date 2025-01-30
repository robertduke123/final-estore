import React from "react";
import "./user-dropdown.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import {
	setCurrentUser,
	setUserDropdownIsOpen,
} from "../../store/user/user.reducer";
import { useNavigate } from "react-router-dom";

const UserDropdown = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const currentUser = useSelector(selectCurrentUser);

	const handleUserNav = () => {
		window.scrollTo(0, 0);
		navigate("user");
		dispatch(setUserDropdownIsOpen(false));
	};

	const handleSignOut = async () => {
		await fetch("http://localhost:4000/token", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email: currentUser.email,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				window.scrollTo(0, 0);
				dispatch(setCurrentUser(null));
				localStorage.removeItem("refreshToken");
				dispatch(setUserDropdownIsOpen(false));
				navigate("/");
			});
	};
	return (
		<div className="user-dropdown-container">
			<div className="user-dropdown-item" onClick={handleUserNav}>
				<span>USER INFO</span>
			</div>
			<div className="user-dropdown-item" onClick={handleSignOut}>
				<span>SIGN OUT</span>
			</div>
		</div>
	);
};

export default UserDropdown;
