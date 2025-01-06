import React from "react";
import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import { setIsCartOpen } from "../../store/cart/cart.reducer";

const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const goToCheckoutHandler = () => {
		if (cartItems.length > 0) {
			dispatch(setIsCartOpen());
			navigate("/checkout");
		}
	};

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} cartItem={cartItem} />
					))
				) : (
					<div className="empty-message">Your cart is empty</div>
				)}
			</div>
			<Button onClick={goToCheckoutHandler}>Checkout</Button>
		</div>
	);
};

export default CartDropdown;
