import React, { useEffect, useRef, useState } from "react";
import "./orders.styles.scss";
import { useSelector } from "react-redux";
import { selectPastOrders } from "../../store/user/user.selector";
import { selectItemListArray } from "../../store/itemList/item-list.selector";
import OrderItem from "../../components/order-item/order-item.component";

const Orders = () => {
	const orders = useSelector(selectPastOrders);
	const [pastOrders, setPastOrders] = useState([]);
	const itemListArray = useSelector(selectItemListArray);
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
	useEffect(() => {
		setPastOrders(orders);
	}, [orders]);

	useEffect(() => {
		const amount = pastOrders?.length / 8;
		const arr = Array.from({ length: amount }, (_, i) => i + 1);
		setNumbers(arr);
	}, [pastOrders]);

	const handleDropdown = (indx) => {
		const newArray = [...pastOrders];

		newArray.forEach((order, i) => {
			const copy = { ...order };
			copy.dropdown = false;
			if (i === indx) {
				if (order.dropdown === false) {
					scrollToItem(indx + 1);
					copy.dropdown = !copy.dropdown;
				} else {
					copy.dropdown = false;
				}
			}
			newArray[i] = copy;
		});
		setPastOrders(newArray);
	};

	const handleNextPage = () => {
		if (selectedNumber !== number?.length) {
			setSelectedNumber(selectedNumber + 1);
		}
	};
	const handlePrevPage = () => {
		if (selectedNumber !== 1) {
			setSelectedNumber(selectedNumber - 1);
		}
	};
	const handleSelectPage = (num) => {
		setSelectedNumber(num);
	};

	return (
		<div className="orders-container">
			<h1>Orders</h1>
			<ul className="order-list-container">
				{pastOrders?.length === 0 && (
					<h1 className="no-orders">You Have No Orders</h1>
				)}
				{pastOrders?.map((order, indx) => {
					const orderDetails = [];
					order?.order_ids.forEach((id) => {
						itemListArray.forEach((item) => {
							item.id === id && orderDetails.push(item);
						});
					});
					if (
						indx + 1 <= 8 * selectedNumber &&
						indx + 1 > 0 + 8 * (selectedNumber - 1)
					) {
						return (
							<OrderItem
								key={"order " + indx}
								setRef={setRef}
								order={order}
								orderDetails={orderDetails}
								handleDropdown={handleDropdown}
								indx={indx}
							/>
						);
					}
				})}
			</ul>
			{pastOrders?.length > 8 && (
				<div className="page-numbers-container">
					<p
						style={{ fontSize: "28px", color: "#6f6f6fff" }}
						onClick={handlePrevPage}>
						&#8249;
					</p>
					<div className="numbers">
						{number.map((num, indx) => {
							return (num >= selectedNumber - 4 && num <= selectedNumber + 5) ||
								(selectedNumber <= 5 &&
									(num === 7 || num === 8 || num === 9 || num === 10)) ||
								(selectedNumber >= number.length - 5 &&
									(num === number.length - 6 ||
										num === number.length - 7 ||
										num === number.length - 8 ||
										num === number.length - 9)) ? (
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
							) : (
								<></>
							);
						})}
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
