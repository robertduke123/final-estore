import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
	selectOrder,
	selectOrderDate,
	selectOrderNo,
} from "../../store/checkout/checkout.selector";
import "./order-confirmation.styles.scss";
import { useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
	const navigate = useNavigate();
	const order = useSelector(selectOrder);
	const orderDate = useSelector(selectOrderDate);
	const orderNo = useSelector(selectOrderNo);
	const [orderTotal, setOrderTotal] = useState(100);

	useEffect(() => {
		setOrderTotal(
			order.reduce(
				(total, cartItem) => total + cartItem.quantity * cartItem.price,
				0
			)
		);
	}, []);

	const handleReturnHome = () => navigate("/");

	return (
		<div className="order-confirmation">
			<div className="left" onClick={handleReturnHome}>
				&#x2190; BACK
			</div>
			<h1>Thank you for your order!</h1>
			<p>
				Your order <strong>#{orderNo}</strong> has been placed successfully.
			</p>

			<div className="order-details">
				<h2>Order Summary</h2>
				<ul>
					{order.map((item, index) => (
						<li key={index} className="order-items">
							<div className="item-img">
								<img src={item.imageUrl} alt={item.name} />
								<p>{orderDate}</p>
							</div>
							<div className="item-details">
								<p>{`${item.quantity} x ${item.name}`}</p>
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
