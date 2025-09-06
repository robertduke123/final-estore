import React, { useState } from "react";
import countries from "i18n-iso-countries";
import "./payment-form.styles.scss";
import Button from "../button/button.component";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import {
	selectCartItems,
	selectCartTotal,
} from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import Loading from "../loading/Loading.component";
import {
	setConfirmation,
	setOrder,
	setOrderDate,
	setOrderNo,
} from "../../store/checkout/checkout.reducer";
import { emptyCart } from "../../store/cart/cart.reducer";

const PaymentForm = ({ formFields }) => {
	const stripe = useStripe();
	const elements = useElements();
	const amount = useSelector(selectCartTotal);
	const currentUser = useSelector(selectCurrentUser);
	const cart = [...useSelector(selectCartItems)];
	const [isProcessingPayment, setIsProcessingPayment] = useState(false);
	const dispatch = useDispatch();

	countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
	const orderIds = [];
	const orderQuantities = [];
	cart.map((item) => {
		orderIds.push(item.id);
		orderQuantities.push(item.quantity);
	});

	const paymentHandler = async (e) => {
		e.preventDefault();
		window.scrollTo(0, 0);
		const { name, email, phone, address, city, country } = formFields;
		const today = new Date();
		const date = today.getDate();
		const month = today.toLocaleString("default", { month: "short" });
		const year = today.getFullYear();
		const suffix =
			date.toString().slice(-1).includes(1) && date !== 11
				? "st"
				: date.toString().slice(-1).includes(2) && date !== 12
				? "nd"
				: date.toString().slice(-1).includes(3) && date !== 13
				? "rd"
				: "th";

		const number = today.toISOString().slice(0, 10).replace(/-/g, "");
		const random = Math.floor(1000 + Math.random() * 9000); // 4-digit random
		const orderNo = `ORD-${number}-${random}`;

		let dateOfPurchase = `${date + suffix} ${month} ${year}`;

		if (!stripe || !elements) return;
		setIsProcessingPayment(true);

		const response = await fetch(
			"https://e-store-api-z8jl.onrender.com/create-payment-intent",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					amount: amount * 100,
					name,
					email,
					phone,
					address,
					city,
					country,
				}),
			}
		).then((res) => res.json());

		const {
			paymentIntent: { client_secret },
		} = response;

		await fetch("https://e-store-api-z8jl.onrender.com/order", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				userId: currentUser.id,
				orderIds: orderIds,
				orderQuantities: orderQuantities,
				dateOfPurchase: dateOfPurchase,
				orderNo: orderNo,
			}),
		})
			.then((res) => res.json())
			.then(console.log);

		dispatch(setOrder(cart));
		dispatch(setOrderDate(dateOfPurchase));
		dispatch(setOrderNo(orderNo));
		dispatch(emptyCart());

		const paymentResult = await stripe.confirmCardPayment(client_secret, {
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: {
					name: currentUser ? currentUser.name : "Guest",
				},
			},
		});

		setIsProcessingPayment(false);

		if (paymentResult.error) {
			console.log(paymentResult.error);
		} else {
			if (paymentResult.paymentIntent.status === "succeeded") {
				console.log(paymentResult);
				dispatch(setConfirmation(true));
			}
		}
	};

	return (
		<div className="payment-form-container">
			{isProcessingPayment && <Loading />}
			<form onSubmit={paymentHandler} className="form-container">
				<div
					style={{
						padding: "50px 30px",
						margin: "10px 0",
						width: "400px",
						height: "150px",
						border: "1px solid gray",
						borderRadius: "5px",
						backgroundColor: "rgb(245, 245, 245)",
						boxShadow: "2px 1px 6px lightgray",
					}}>
					<CardElement />
				</div>

				<Button
					type="submit"
					isLoading={isProcessingPayment}
					buttonType="inverted">
					Pay Now
				</Button>
			</form>
		</div>
	);
};

export default PaymentForm;
