import React, { useEffect, useState } from "react";
import countries from "i18n-iso-countries";
import "./payment-form.styles.scss";
import Button from "../button/button.component";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import {
	selectCartItems,
	selectCartTotal,
} from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

const PaymentForm = ({ formFields }) => {
	const stripe = useStripe();
	const elements = useElements();
	const amount = useSelector(selectCartTotal);
	const [details, setDetails] = useState({});
	const currentUser = useSelector(selectCurrentUser);
	const [isProcessingPayment, setIsProcessingPayment] = useState(false);
	// const [stripePromise, setStripePromise] = useState(null);
	const [clientSecret, setClientSecret] = useState("");

	countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
	// console.log(countries.getAlpha2Code(currentUser.country, "en"));

	// useEffect(() => {
	// 	fetch("http://localhost:4000/create-payment-intent", {
	// 		method: "POST",
	// 		headers: { "Content-Type": "application/Json" },
	// 		body: JSON.stringify({
	// 			amount: amount,
	// 		}),
	// 	})
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			// setClientSecret(data.clientSecret);
	// 			console.log(data);
	// 		});
	// }, [, amount]);

	const paymentHandler = async (e) => {
		e.preventDefault();
		const { name, email, phone, address, city, country } = formFields;

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

		const paymentResult = await stripe.confirmCardPayment(client_secret, {
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: {
					name: currentUser ? currentUser.dsiplayName : "Guest",
				},
			},
		});

		setIsProcessingPayment(false);

		if (paymentResult.error) {
			console.log(paymentResult.error);
		} else {
			if (paymentResult.paymentIntent.status === "succeeded") {
				console.log(paymentResult);
			}
		}
	};

	return (
		<div className="payment-form-container">
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
