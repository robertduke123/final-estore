import React from "react";
import "./orders.styles.scss";
import { useSelector } from "react-redux";
import { selectPastOrders } from "../../store/user/user.selector";
import {
	selectItemListArray,
	selectItemListMap,
} from "../../store/itemList/item-list.selector";

const Orders = () => {
	const pastOrders = useSelector(selectPastOrders);
	const itemListMap = useSelector(selectItemListMap);
	const itemListArray = useSelector(selectItemListArray);
	// console.log(arr);

	// console.log(pastOrders);

	return (
		<div className="orders-container">
			<h1>Orders</h1>
			<ul className="order-list-container">
				{pastOrders?.map((order, indx) => {
					const orderDetails = [];
					order?.order_ids.forEach((id) => {
						itemListArray.forEach((item) => {
							// console.log(item);

							item.id === id && orderDetails.push(item);
						});
					});
					return (
						<li key={"order " + indx}>
							<div>
								<h3>{order.order_no}</h3>
								<p>{order.date_of_purchase}</p>
							</div>
							<div className="down">&#8964;</div>
							{/* <ul>{}</ul> */}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Orders;
