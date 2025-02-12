import React, { useState } from "react";
import "./nav-slide.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectSlideIsOpen } from "../../store/slide/slide.selector";
import { setSlideOpen } from "../../store/slide/slide.reducer";
import { setCurrentUser } from "../../store/user/user.reducer";
import { useNavigate } from "react-router-dom";
import { selectCartCount } from "../../store/cart/cart.selector";
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
		setUserOpen(false);
		dispatch(setSlideOpen(false));
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
				setUserOpen(false);
				dispatch(setCurrentUser(null));
				localStorage.removeItem("refreshToken");
				dispatch(setSlideOpen(false));
				navigate("/");
			});
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
					<li className="top-link" onClick={() => handleNav("/shop")}>
						SHOP
					</li>
					{currentUser ? (
						<div>
							<li className="top-link" onClick={handleUserOpen}>
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
							<div
								style={
									userOpen
										? { transform: "translateY(0)" }
										: { transform: "translateY(-66.5%)" }
								}
								className="user-links-container">
								<li className="user-links" onClick={() => handleNav("user")}>
									USER INFO
								</li>
								<li className="user-links" onClick={handleSignOut}>
									SIGN OUT
								</li>
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
							</div>
						</div>
					) : (
						<div>
							<li onClick={() => handleNav("/auth")}>SIGN IN</li>
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
						</div>
					)}
				</ul>
			</div>

			<i class="fa-solid fa-bars" onClick={handleSlide} />
		</div>
	);
};

export default NavSlide;
