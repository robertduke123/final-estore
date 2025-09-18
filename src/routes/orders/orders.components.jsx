import React, { useEffect } from "react";
import "./orders.styles.scss";
import { useSelector } from "react-redux";
import {
	selectCurrentUser,
	selectPastOrders,
} from "../../store/user/user.selector";
import { selectItemListArray } from "../../store/itemList/item-list.selector";
import OrderItem from "../../components/order-item/order-item.component";
import { useNavigate } from "react-router-dom";

const Orders = () => {
	const pastOrders = useSelector(selectPastOrders);
	const itemListArray = useSelector(selectItemListArray);
	const currentUser = useSelector(selectCurrentUser);
	const navigate = useNavigate();

	useEffect(() => {
		if (!currentUser) navigate("/");
	}, []);

	return (
		<div className="orders-container">
			<h1>Orders</h1>
			<ul className="order-list-container">
				{pastOrders?.map((order, indx) => {
					const orderDetails = [];
					order?.order_ids.forEach((id) => {
						itemListArray.forEach((item) => {
							item.id === id && orderDetails.push(item);
						});
					});
					return (
						<OrderItem
							key={"order " + indx}
							order={order}
							orderDetails={orderDetails}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default Orders;
