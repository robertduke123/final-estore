import React, { useState } from "react";
import "./order-item.styles.scss";

const OrderItem = ({ order, orderDetails }) => {
	const [dropdown, setDropdown] = useState(false);

	const handleDropDown = () => setDropdown(!dropdown);

	return (
		<div
			className="order"
			style={{
				height: `${dropdown ? `${65 + orderDetails.length * 90}px` : "80px"}`,
				transition: "0.5s ease-in-out",
			}}>
			<li
				className="order-item-container"
				style={{
					backgroundColor: `${
						dropdown ? "rgb(176, 176, 176)" : "rgb(238, 238, 238)"
					}`,
					transition: "0.5s ease-in-out",
				}}>
				<div>
					<h3>{order.order_no}</h3>
					<p>{order.date_of_purchase}</p>
				</div>
				<div
					className="down"
					onClick={handleDropDown}
					style={{
						transform: `${dropdown ? "rotate(180deg)" : "rotate(0)"}`,
						transition: "0.5s ease-in-out",
					}}>
					&#8964;
				</div>
			</li>
			<div
				className="order-details-container"
				style={{
					height: `${dropdown ? `${45 + orderDetails.length * 90}px` : "50px"}`,
					transition: "0.5s ease-in-out",
				}}>
				<ul>
					{orderDetails.map((item, idnx) => (
						<li
							className="order-detail-item"
							key={"detail " + idnx}
							style={{
								marginTop: `${idnx === 0 ? "50px" : "10px"}`,
							}}>
							<img src={item.imageUrl} alt={item.name} />

							<div
								className="item-details"
								style={{
									transition: "0.5s ease-in-out",
								}}>
								<p>{`${order.order_quantities[idnx]} x ${item.name}`}</p>
								<p>${item.price}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default OrderItem;
