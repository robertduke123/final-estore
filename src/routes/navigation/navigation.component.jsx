import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import CartIcon from "../../components/cart-icon/cart-icon.component";

const Navigation = () => {
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
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
