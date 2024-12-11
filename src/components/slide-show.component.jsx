import React, { useEffect, useState } from "react";
import "./slide-show.styles.scss";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import Slide from "./slide/slide.component";

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

// const SlideShow = () => {

//     const [left, setLeft] = useState(0)
//     const [current, setCurrent] = useState(categories[0])
//     const [index, setIndex] = useState(0)

//     const carouselSlide = () => {
//         const currentSlide = current
//         const nextSlide = currentSlide.id === 5 ? categories[0] : categories.find(category => category.id === currentSlide.id + 1)
//         const amountToMove = nextSlide?.left

//         setLeft(`-${amountToMove}%`)
//         setCurrent(nextSlide)
//     }
//     useEffect(() => {
//     setTimeout(() => {
//         carouselSlide()
//     }, 5000)
//     }, [left])

//     const handleTabsClick = (e) => {
//         if(e.target.id == current.id) return
//         setCurrent(categories[e.target.id - 2])
//         carouselSlide()
//     }

//   return (
//     <div className='slide-show-container'>
//         <div className="carousel" style={{left: left}}>
//           {categories.map((category) => (
//             <Slide key={'slide' + category.id} category={category}/>
//         ))}
//         </div>
//         <div className="slide-tabs-container">
//             {categories.map((category) => (
//             <div className='slide-tab' id={category.id} key={'tab' + category.id} style={{backgroundColor: category.id === current.id? 'white' : 'rgba(185, 185, 185, 0.75)'}}
//             onClick={(e) => handleTabsClick(e)}/>
//         ))}
//         </div>
//     </div>
//   )
// }

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
		}, 1000);
	}, []);

	return (
		<div style={{ width: "100%", height: "600px" }}>
			<div style={{ width: "100%", height: "100%", position: "relative" }}>
				<div
					style={{
						width: "100%",
						height: "100%",
						display: "flex",
						overflow: "hidden",
					}}>
					{categories.map((category) => (
						<div
							key={category.id}
							className="image-slider-img"
							style={{
								backgroundImage: `url(${category.imageUrl})`,
								translate: `${-100 * imageIndex}%`,
							}}>
							<h2 className="image-slider-title">
								{category.title.toUpperCase()}
							</h2>
							<div
								style={{
									width: "100%",
									height: "100%",
									backgroundColor: "rgba(205, 83, 83, 0.3)",
								}}></div>
						</div>
					))}
				</div>
				<button
					className="img-slider-btn"
					onClick={showPrevImage}
					style={{ left: "0" }}>
					<ArrowBigLeft />
				</button>
				<button
					className="img-slider-btn"
					onClick={showNextImage}
					style={{ right: "0" }}>
					<ArrowBigRight />
				</button>
			</div>
			<div
				style={{
					position: "absolute",
					bottom: "110px",
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
								backgroundColor: `${indx === imageIndex && "white"}`,
							}}></div>
					</button>
				))}
			</div>
		</div>
	);
};

export default SlideShow;
