import React from "react";
import "./slide.styles.scss";
import { useNavigate } from "react-router-dom";

const Slide = ({ category, imageIndex }) => {
	const { title, imageUrl, route } = category;
	const navigate = useNavigate();

	return (
		<div
			className="image-slider-img"
			style={{
				backgroundImage: `url(${imageUrl})`,
				translate: `${-100 * imageIndex}%`,
			}}>
			<h2 onClick={() => navigate(route)} className="image-slider-title">
				{title.toUpperCase()}
			</h2>
			<div
				style={{
					width: "100%",
					height: "100%",
					backgroundColor: "rgba(205, 83, 83, 0.3)",
				}}></div>
		</div>
	);
};

export default Slide;
