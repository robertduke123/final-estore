import React, { useState } from "react";
import "./user-info.styles.scss";
import UserForm from "../../components/user-form/user-form.component";
import UserDisplay from "../../components/user-display/user-display.component";
import PasswordForm from "../../components/password-form/password-form.component";

const UserInfo = () => {
	const [edit, setEdit] = useState("display");
	const handleEdit = (value) => setEdit(value);

	return (
		<div className="user-info-container">
			<h2>User Info</h2>
			{edit === "display" ? (
				<UserDisplay handleEdit={handleEdit} />
			) : edit === "form" ? (
				<UserForm handleEdit={handleEdit} />
			) : (
				<PasswordForm />
			)}
		</div>
	);
};

export default UserInfo;
