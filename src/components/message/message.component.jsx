import React from "react";
import "./message.styles.scss";
import Button from "../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import {
	selectMessage,
	selectMessageDisplay,
} from "../../store/message/message.selector";
import { setMessageDisplay } from "../../store/message/message.reducer";

const Message = () => {
	const dispatch = useDispatch();
	const messageDisplay = useSelector(selectMessageDisplay);
	const message = useSelector(selectMessage);
	const handleDone = () => dispatch(setMessageDisplay(!messageDisplay));

	return (
		<div className="message-container">
			<div className="message">
				<span>{message}</span>
				<Button onClick={handleDone}>Done</Button>
			</div>
		</div>
	);
};

export default Message;
