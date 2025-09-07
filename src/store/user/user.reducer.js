import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
	currentUser: null,
	userDropdownOpen: false,
	pastOrders: [],
};

export const userSlice = createSlice({
	name: "user",
	initialState: INITIAL_STATE,
	reducers: {
		setCurrentUser(state, action) {
			state.currentUser = action.payload;
		},
		setUserDropdownIsOpen(state, action) {
			state.userDropdownOpen = action.payload;
		},
		setPastOrders(state, action) {
			state.pastOrders = action.payload;
		},
	},
});

export const { setCurrentUser, setUserDropdownIsOpen, setPastOrders } =
	userSlice.actions;

export const userReducer = userSlice.reducer;
