import React from "react";
import "./order-item.styles.scss";
import { useNavigate } from "react-router-dom";

const OrderItem = ({ order, orderDetails, setRef, handleDropdown, indx }) => {
	const navigate = useNavigate();

	return (
		<div
			className="order"
			style={{
				height: `${
					order.dropdown ? `${90 + orderDetails.length * 80}px` : "70px"
				}`,
				transition: "0.5s ease-in-out",
			}}>
			<li
				ref={setRef(order.id)}
				className="order-item-container"
				style={{
					backgroundColor: `${
						order.dropdown ? "rgb(176, 176, 176)" : "rgb(238, 238, 238)"
					}`,
					transition: "0.5s ease-in-out",
				}}>
				<div>
					<h3>{order.order_no}</h3>
					<p>{order.date_of_purchase}</p>
				</div>
				<div
					className="down"
					onClick={() => handleDropdown(indx)}
					style={{
						transform: `${order.dropdown ? "rotate(180deg)" : "rotate(0)"}`,
						transition: "0.5s ease-in-out",
					}}>
					&#8964;
				</div>
			</li>
			<div
				className="order-details-container"
				style={{
					height: `${
						order.dropdown ? `${80 + orderDetails.length * 80}px` : "50px"
					}`,
					transition: "0.5s ease-in-out",
				}}>
				<ul>
					{orderDetails.map((item, idnx) => (
						<li
							className="order-detail-item"
							key={"detail " + idnx}
							style={{
								marginTop: `${idnx === 0 ? "60px" : "10px"}`,
							}}>
							<img src={item.imageUrl} alt={item.name} />

							<div
								className="item-details"
								style={{
									transition: "0.5s ease-in-out",
								}}
								onClick={() => navigate(`/shop/product/${item.id}`)}>
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
