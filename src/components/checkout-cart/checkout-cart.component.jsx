import "./checkout.styles.scss";
import {
	selectCartItems,
	selectCartTotal,
} from "../../store/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import useWindowWidth from "../../hooks/window-hook";
import Button from "../../components/button/button.component";
import { useSelector } from "react-redux";

const CheckoutCart = ({ handleToCheckout }) => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);
	const width = useWindowWidth();

	return (
		<div
			className="checkout-container"
			style={{ width: `${width >= 850 ? "55%" : "100%"}` }}>
			<div className="checkout-header">
				<div className="checkout-header-block">
					<span>Product</span>
				</div>
				<div className="checkout-header-block">
					<span>Description</span>
				</div>
				<div className="checkout-header-block">
					<span>Quantity</span>
				</div>
				<div className="checkout-header-block">
					<span>Price</span>
				</div>
				<div className="checkout-header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<div className="total">Total: ${cartTotal}</div>
			<Button onClick={handleToCheckout}>Checkout</Button>
		</div>
	);
};

export default CheckoutCart;
