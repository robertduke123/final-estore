import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE_CHECKOUT = {
	confirmation: false,
};

export const checkoutSlice = createSlice({
	name: "checkout",
	initialState: INITIAL_STATE_CHECKOUT,
	reducers: {
		setConfirmation(state, action) {
			state.confirmation = action.payload;
		},
	},
});

export const { setConfirmation } = checkoutSlice.actions;

export const checkoutReducer = checkoutSlice.reducer;
