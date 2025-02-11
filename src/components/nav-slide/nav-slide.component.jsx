import React, { useState } from "react";
import "./nav-slide.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectSlideIsOpen } from "../../store/slide/slide.selector";
import { setSlideOpen } from "../../store/slide/slide.reducer";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
	selectCartCount,
	selectCartTotal,
} from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

const NavSlide = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const currentUser = useSelector(selectCurrentUser);
	const cartTotal = useSelector(selectCartCount);
	const isSlideOpen = useSelector(selectSlideIsOpen);

	const [userOpen, setUserOpen] = useState(false);

	const handleSlide = () => dispatch(setSlideOpen(!isSlideOpen));
	const handleUserOpen = () => setUserOpen(!userOpen);

	const handleNav = (url) => {
		navigate(url);
		dispatch(setSlideOpen(false));
	};

	return (
		<div className="nav-slide-container">
			<div
				className="nav-slide-backgound"
				style={{ display: isSlideOpen ? "block" : "none" }}
			/>
			<div className="nav-slide" style={{ right: isSlideOpen ? "0" : "-100%" }}>
				<i
					class="fa-solid fa-x"
					onClick={handleSlide}
					style={{ margin: "20px 20px 0" }}
				/>

				<ul>
					<li onClick={() => handleNav("/shop")}>SHOP</li>
					{currentUser ? (
						<div>
							<li onClick={handleUserOpen}>
								{currentUser?.name.split(" ")[0].toUpperCase()}
								{!userOpen ? (
									<i
										className="fa-solid fa-angle-down"
										style={{ marginLeft: "10px" }}
									/>
								) : (
									<i
										className="fa-solid fa-angle-up"
										style={{ marginLeft: "10px" }}
									/>
								)}
							</li>
							{userOpen && (
								<div className="user-links">
									<li>USER INFO</li>
									<li>SIGN OUT</li>
								</div>
							)}
						</div>
					) : (
						<li onClick={() => handleNav("/auth")}>SIGN IN</li>
					)}

					<li
						onClick={() => {
							cartTotal > 0 && handleNav("/checkout");
						}}>
						<span>CHECKOUT</span>
						<div
							className="total"
							style={cartTotal > 0 ? { opacity: "1" } : { opacity: "0" }}>
							{cartTotal}
						</div>
					</li>
				</ul>
			</div>

			<i class="fa-solid fa-bars" onClick={handleSlide} />
		</div>
	);
};

export default NavSlide;
