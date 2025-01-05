import React from "react";
import "./cart-icon.styles.scss";
import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
	selectCartCount,
	selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.reducer";

const CartIcon = () => {
	const dispatch = useDispatch();
	const cartCount = useSelector(selectCartCount);
	const isCartOpen = useSelector(selectIsCartOpen);
	const handleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

	return (
		<div className="cart-icon-container" onClick={handleIsCartOpen}>
			<ShoppingCart className="cart-icon" />
			<div className="item-count">{cartCount}</div>
		</div>
	);
};

export default CartIcon;
