import React, { useEffect, useState } from "react";
import "./checkout.styles.scss";
import CheckoutCart from "../../components/checkout-cart/checkout-cart.component";
import CheckoutForm from "../../components/checkout-form/checkout-form";
import Loading from "../../components/loading/Loading.component";

const Checkout = () => {
	const [toCheckout, setToCheckout] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleToCheckout = () => setToCheckout(!toCheckout);

	const handleToConfirmation = () => setIsLoading(true);

	useEffect(() => {
		setTimeout(() => setIsLoading(false), 3000);
	}, [isLoading]);

	return (
		<div style={{ width: "100%" }}>
			{isLoading ? (
				<Loading />
			) : toCheckout ? (
				<div className="checkout-container">
					<CheckoutForm
						handleToCheckout={handleToCheckout}
						handleToConfirmation={handleToConfirmation}
					/>
				</div>
			) : (
				<CheckoutCart handleToCheckout={handleToCheckout} />
			)}
		</div>
	);
};

export default Checkout;
