import React from "react";

const OrderConfirmation = ({ order }) => {
	if (!order) {
		return <p>Loading order details...</p>;
	}

	return (
		<div className="order-confirmation">
			<h1>Thank you for your order!</h1>
			<p>
				Your order <strong>#{order.id}</strong> has been placed successfully.
			</p>

			<div className="order-details">
				<h2>Order Summary</h2>
				<ul>
					{order.items.map((item, index) => (
						<li key={index}>
							{item.quantity}x {item.name} - ${item.price.toFixed(2)}
						</li>
					))}
				</ul>
				<p>
					<strong>Total: ${order.total.toFixed(2)}</strong>
				</p>
			</div>

			<div className="shipping-info">
				<h2>Shipping To</h2>
				<p>{order.customer.name}</p>
				<p>{order.customer.address}</p>
				<p>
					{order.customer.city}, {order.customer.state} {order.customer.zip}
				</p>
			</div>

			<p>You will receive a confirmation email shortly.</p>
		</div>
	);
};

export default OrderConfirmation;
