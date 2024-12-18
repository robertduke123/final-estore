import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { useSelector } from "react-redux";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

const Navigation = () => {
	const isCartOpen = useSelector(selectIsCartOpen);
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
					<span className="nav-link">SIGN IN</span>
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
