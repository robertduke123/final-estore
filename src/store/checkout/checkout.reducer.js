import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE_CHECKOUT = {
	confirmation: false,
	order: [],
	orderDate: "",
	orderNo: "",
};

export const checkoutSlice = createSlice({
	name: "checkout",
	initialState: INITIAL_STATE_CHECKOUT,
	reducers: {
		setConfirmation(state, action) {
			state.confirmation = action.payload;
		},
		setOrder(state, action) {
			state.order = action.payload;
		},
		emptyOrder(state) {
			state.order = [];
		},
		setOrderDate(state, action) {
			state.orderDate = action.payload;
		},
		setOrderNo(state, action) {
			state.orderNo = action.payload;
		},
	},
});

export const {
	setConfirmation,
	setOrder,
	emptyOrder,
	setOrderDate,
	setOrderNo,
} = checkoutSlice.actions;

export const checkoutReducer = checkoutSlice.reducer;
