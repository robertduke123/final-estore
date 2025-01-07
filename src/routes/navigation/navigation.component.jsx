import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { useDispatch, useSelector } from "react-redux";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { setCurrentUser } from "../../store/user/user.reducer";

const Navigation = () => {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen);

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
				console.log(data[0]);
				dispatch(setCurrentUser(null));
				localStorage.removeItem("refreshToken");
			});
	};

	return (
		<Fragment>
			<div className="navigation-container">
				<Link to="/">
					<div className="logo-container">LOGO</div>
				</Link>

				<div className="navigation-links">
					<Link to="/shop">
						<span className="nav-link">SHOP</span>
					</Link>
					{currentUser ? (
						<span className="nav-link" onClick={handleSignOut}>
							SIGN OUT
						</span>
					) : (
						<Link to="/auth">
							<span className="nav-link">SIGN IN</span>
						</Link>
					)}

					<div className="nav-link">
						<CartIcon />
					</div>
				</div>
				{isCartOpen && <CartDropdown />}
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
