import React, { useEffect, useRef, useState } from "react";
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
	// const pastOrders = useSelector(selectPastOrders);
	const [pastOrders, setPastOrders] = useState([
		{
			date_of_purchase: "7th Sep 2025",
			id: 1,
			order_ids: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 2,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 3,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 4,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 5,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 6,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 7,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 8,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 9,
			order_ids: [3, 4],
			order_no: "ORD-20250906-1234",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 10,
			order_ids: [3, 4],
			order_no: "ORD-20250906-6454654",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 1,
			order_ids: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
			order_no: "ORD-20250906-648",
			order_quantities: [1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 2,
			order_ids: [3, 4],
			order_no: "ORD-20250906-65465",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 3,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 4,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 5,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 6,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 7,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 8,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 9,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 10,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 1,
			order_ids: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 2,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 3,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 4,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 5,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 6,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 7,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 8,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 9,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 10,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 1,
			order_ids: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 2,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 3,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 4,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 5,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 6,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 7,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 8,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 9,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 10,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 1,
			order_ids: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 2,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 3,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 4,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 5,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 6,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 7,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 8,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 9,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
		{
			date_of_purchase: "7th Sep 2025",
			id: 10,
			order_ids: [3, 4],
			order_no: "ORD-20250906-3879",
			order_quantities: [1, 3],
			user_id: 1,
			dropdown: false,
		},
	]);
	const itemListArray = useSelector(selectItemListArray);
	const currentUser = useSelector(selectCurrentUser);
	const navigate = useNavigate();
	const itemRefs = useRef({});
	const [number, setNumbers] = useState([]);
	const [selectedNumber, setSelectedNumber] = useState(1);

	const setRef = (id) => (el) => {
		itemRefs.current[id] = el;
	};

	const scrollToItem = (id) => {
		const el = itemRefs.current[id];
		if (el) {
			setTimeout(() => {
				const yOffset = -300;
				const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
				window.scrollTo({ top: y, behavior: "smooth" });
			}, 300);
		} else {
			console.warn(`No element found for ID: ${id}`);
		}
	};

	// useEffect(() => {
	// 	if (!currentUser) navigate("/");
	// }, []);

	useEffect(() => {
		const amount = pastOrders.length / 8;
		const arr = Array.from({ length: amount }, (_, i) => i + 1);
		setNumbers(arr);
	}, [pastOrders]);

	const handleDropdown = (indx) => {
		const newArray = [...pastOrders];

		newArray.forEach((order, i) => {
			if (i === indx) {
				if (order.dropdown === false) {
					scrollToItem(indx + 1);
				}
				order.dropdown = !order.dropdown;
			} else {
				order.dropdown = false;
			}
		});
		setPastOrders(newArray);
	};

	const handleNextPage = () => {
		if (selectedNumber !== number.length) {
			setSelectedNumber(selectedNumber + 1);
			window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		}
	};
	const handlePrevPage = () => {
		if (selectedNumber !== 1) {
			setSelectedNumber(selectedNumber - 1);
			window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		}
	};
	const handleSelectPage = (num) => {
		setSelectedNumber(num);
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	return (
		<div className="orders-container">
			<h1>Orders</h1>
			<ul className="order-list-container">
				{pastOrders?.map((order, indx) => {
					// console.log(typeof order.id);

					const orderDetails = [];
					order?.order_ids.forEach((id) => {
						itemListArray.forEach((item) => {
							item.id === id && orderDetails.push(item);
						});
					});
					if (
						indx + 1 <= 8 * selectedNumber &&
						indx + 1 > 0 + 8 * (selectedNumber - 1)
					)
						return (
							<OrderItem
								key={"order " + indx}
								setRef={setRef}
								// ref={setRef("1")}
								order={order}
								orderDetails={orderDetails}
								handleDropdown={handleDropdown}
								indx={indx}
							/>
						);
				})}
			</ul>
			{pastOrders.length > 8 && (
				<div className="page-numbers-container">
					<p
						style={{ fontSize: "28px", color: "#6f6f6fff" }}
						onClick={handlePrevPage}>
						&#8249;
					</p>
					<div className="numbers">
						{number.map((num, indx) =>
							num === selectedNumber ? (
								<p
									style={{ color: "black", fontSize: "18px" }}
									key={"number " + indx}>
									{num}
								</p>
							) : (
								<p
									style={{ color: "#6f6f6fff", fontSize: "15px" }}
									key={"number " + indx}
									onClick={() => handleSelectPage(num)}>
									{num}
								</p>
							)
						)}
					</div>
					<p
						style={{ fontSize: "28px", color: "#6f6f6fff" }}
						onClick={handleNextPage}>
						&#x203A;
					</p>
				</div>
			)}
		</div>
	);
};

export default Orders;
