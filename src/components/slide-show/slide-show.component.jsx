import React, { useEffect, useState } from "react";
import "./slide-show.styles.scss";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import Slide from "../slide/slide.component";

const categories = [
	{
		id: 1,
		title: "hats",
		imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
		route: "shop/hats",
	},
	{
		id: 2,
		title: "jackets",
		imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
		route: "shop/jackets",
	},
	{
		id: 3,
		title: "sneakers",
		imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
		route: "shop/sneakers",
	},
	{
		id: 4,
		title: "womens",
		imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
		route: "shop/womens",
	},
	{
		id: 5,
		title: "mens",
		imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
		route: "shop/mens",
	},
];

const SlideShow = () => {
	const [imageIndex, setImageIndex] = useState(0);

	const showPrevImage = () => {
		setImageIndex((index) => {
			if (index === 0) return categories.length - 1;
			return index - 1;
		});
	};

	const showNextImage = () => {
		setImageIndex((index) => {
			if (index === categories.length - 1) return 0;
			return index + 1;
		});
	};

	useEffect(() => {
		setInterval(() => {
			showNextImage();
		}, 8000);
	}, []);

	return (
		<div style={{ width: "100%", height: "100vh" }}>
			<div style={{ width: "100%", height: "100%", position: "relative" }}>
				<div
					style={{
						width: "100%",
						height: "100%",
						display: "flex",
						overflow: "hidden",
					}}>
					{categories.map((category) => (
						<Slide
							key={category.id}
							category={category}
							imageIndex={imageIndex}
						/>
					))}
				</div>
				<button
					className="img-slider-btn"
					onClick={showPrevImage}
					style={{ left: "0", cursor: "pointer" }}>
					<ArrowBigLeft />
				</button>
				<button
					className="img-slider-btn"
					onClick={showNextImage}
					style={{ right: "0", cursor: "pointer" }}>
					<ArrowBigRight />
				</button>
			</div>
			<div
				style={{
					position: "absolute",
					bottom: "20px",
					left: "50%",
					translate: "-50%",
					display: "flex",
					gap: ".25rem",
				}}>
				{categories.map((_, indx) => (
					<button
						key={indx}
						className="slider-dot-btn"
						onClick={() => setImageIndex(indx)}>
						<div
							style={{
								backgroundColor: `${
									indx === imageIndex ? "white" : "transparent"
								}`,
								cursor: "pointer",
							}}></div>
					</button>
				))}
			</div>
		</div>
	);
};

export default SlideShow;
