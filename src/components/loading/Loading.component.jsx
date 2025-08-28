import React from "react";
import "./Loading.styles.scss";

const Loading = () => {
	return (
		<div className="loading-container">
			<p>Loading...</p>
			<div className="loader"></div>
		</div>
	);
};

export default Loading;
