import React, { useState } from "react";
import "./user-info.styles.scss";
import UserForm from "../../components/user-form/user-form.component";
import UserDisplay from "../../components/user-display/user-display.component";

const UserInfo = () => {
	const [edit, setEdit] = useState(true);
	const handleEdit = () => setEdit(!edit);

	return (
		<div className="user-info-container">
			<h2>User Info</h2>
			{edit ? <UserDisplay handleEdit={handleEdit} /> : <UserForm />}
		</div>
	);
};

export default UserInfo;
