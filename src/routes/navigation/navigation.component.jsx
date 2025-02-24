import React, { Fragment, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./navigation.styles.scss";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { useDispatch, useSelector } from "react-redux";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import {
	selectCurrentUser,
	selectUserDropdownOpen,
} from "../../store/user/user.selector";
import { setUserDropdownIsOpen } from "../../store/user/user.reducer";
import UserDropdown from "../../components/user-dropdown/user-dropdown.component";
import { setIsCartOpen } from "../../store/cart/cart.reducer";
import Search from "../../components/search/search.component";
import useWindowWidth from "../../hooks/window-hook";
import NavSlide from "../../components/nav-slide/nav-slide.component";

const Navigation = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const currentUser = useSelector(selectCurrentUser);
	const userDropdownOpen = useSelector(selectUserDropdownOpen);
	const isCartOpen = useSelector(selectIsCartOpen);
	const width = useWindowWidth();
	const [openSearch, setOpenSearch] = useState(false);

	const handleIsUserDropdownOpen = () => {
		dispatch(setIsCartOpen(false));
		dispatch(setUserDropdownIsOpen(!userDropdownOpen));
	};

	const handleSignIn = () => {
		window.scrollTo(0, 0);
		navigate("auth");
	};

	return (
		<Fragment>
			<div className="navigation-container">
				<Link to="/">
					<div className="logo">E-COMMERCE</div>
				</Link>

				<div
					style={{
						width: "70%",
						display: "flex",
						justifyContent: `${width >= 620 ? "space-between" : "flex-end"}`,
						alignItems: "center",
					}}>
					{width >= 620 ? (
						<Search />
					) : openSearch ? (
						<div className="mobile-search">
							<Search />
							<i class="fa-solid fa-x" onClick={() => setOpenSearch(false)} />
						</div>
					) : (
						<i
							class="fa-solid fa-magnifying-glass"
							style={{ marginRight: "30px" }}
						/>
					)}

					{width >= 900 ? (
						<div className="navigation-links">
							<Link
								style={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
								to="/shop">
								<span className="nav-link">SHOP</span>
								<div className="underline"></div>
							</Link>
							{currentUser ? (
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
										alignItems: "center",
									}}>
									<span
										className="nav-link"
										style={{
											width: "90px",
											display: "flex",
											justifyContent: "space-between",
											alignItems: "center",
										}}
										onClick={handleIsUserDropdownOpen}>
										<div style={{ width: "80px", textAlign: "center" }}>
											{currentUser?.name.split(" ")[0]}
										</div>
										<i
											className="fa-solid fa-angle-down"
											style={{ marginRight: "-10px" }}></i>
									</span>
									<div className="underline"></div>
								</div>
							) : (
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
										alignItems: "center",
									}}
									onClick={handleSignIn}>
									<span
										className="nav-link"
										style={{ width: "90px", textAlign: "center" }}>
										SIGN IN
									</span>
									<div className="underline"></div>
								</div>
							)}

							<div className="nav-link">
								<CartIcon />
							</div>
						</div>
					) : (
						<NavSlide />
					)}
					{userDropdownOpen && <UserDropdown />}
					{isCartOpen && <CartDropdown />}
				</div>
			</div>

			<Outlet />
		</Fragment>
	);
};

export default Navigation;
