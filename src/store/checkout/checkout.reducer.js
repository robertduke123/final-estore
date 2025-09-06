import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE_CHECKOUT = {
	confirmation: false,
	order: [],
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
	},
});

export const { setConfirmation, setOrder, emptyOrder } = checkoutSlice.actions;

export const checkoutReducer = checkoutSlice.reducer;
