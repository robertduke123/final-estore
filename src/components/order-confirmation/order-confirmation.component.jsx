import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	selectCartItems,
	selectCartTotal,
} from "../../store/cart/cart.selector";
import { emptyCart } from "../../store/cart/cart.reducer";
import { selectOrder } from "../../store/checkout/checkout.selector";
import "./order-confirmation.styles.scss";

const OrderConfirmation = () => {
	const dispatch = useDispatch();
	const order = useSelector(selectOrder);
	const [orderTotal, setOrderTotal] = useState(100);

	useEffect(() => {
		setOrderTotal(
			order.reduce(
				(total, cartItem) => total + cartItem.quantity * cartItem.price,
				0
			)
		);
	}, []);

	// const order = [
	// 	{
	// 		name: "stuff",
	// 		quantity: 2,
	// 		price: 30,
	// 	},
	// 	{
	// 		name: "stuff",
	// 		quantity: 2,
	// 		price: 20,
	// 	},
	// 	{
	// 		name: "stuff",
	// 		quantity: 2,
	// 		price: 10,
	// 	},
	// ];

	return (
		<div className="order-confirmation">
			<h1>Thank you for your order!</h1>
			<p>Your order 01 has been placed successfully.</p>

			<div className="order-details">
				<h2>Order Summary</h2>
				<ul>
					{order.map((item, index) => (
						<li key={index} className="order-items">
							<div className="item-img">
								<img src="" alt="" />
								<p>6th September 2025</p>
							</div>
							<div className="item-details">
								<p>{`${item.quantity} ${item.name}`}</p>
								<p>${item.price}</p>
							</div>
						</li>
					))}
				</ul>
				<p>
					<strong>Total: ${orderTotal}</strong>
				</p>
			</div>

			<div className="shipping-info">
				<h2>Shipping To</h2>
				<div>
					<p>name:</p> <p>Robert Duke</p>
				</div>
				<div>
					<p>address:</p> <p>69 Prospect Terrace</p>
				</div>
				<div>
					<p>city:</p> <p>Auckland</p>
				</div>
			</div>
		</div>
	);
};

export default OrderConfirmation;
