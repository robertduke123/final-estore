import React from "react";
import "./nav-slide.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectSlideIsOpen } from "../../store/slide/slide.selector";
import { setSlideOpen } from "../../store/slide/slide.reducer";

const NavSlide = () => {
	const dispatch = useDispatch();
	const isSlideOpen = useSelector(selectSlideIsOpen);

	const handleSlide = () => dispatch(setSlideOpen(!isSlideOpen));

	return (
		<div className="nav-slide-container">
			{isSlideOpen ? (
				<div className="nav-slide">
					<i class="fa-solid fa-x" onClick={handleSlide} />
				</div>
			) : (
				<i class="fa-solid fa-bars" onClick={handleSlide} />
			)}
		</div>
	);
};

export default NavSlide;
