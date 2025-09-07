import React from "react";
import "./orders.styles.scss";
import { useSelector } from "react-redux";
import { selectPastOrders } from "../../store/user/user.selector";

const Orders = () => {
	const pastOrders = useSelector(selectPastOrders);

	return (
		<div className="orders-container">
			<h1>Orders</h1>
			<ul className="order-list-container">{}</ul>
		</div>
	);
};

export default Orders;
