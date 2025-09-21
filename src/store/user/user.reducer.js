import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
	currentUser: null,
	userDropdownOpen: false,
	pastOrders: [],
};

const dropdown = (orders, index) => {
	const newArray = [...orders];

	newArray.map((order, i) => {
		if (i === index) {
			if (order.dropdown === false) {
				// scrollToItem(indx + 1);
			}
			return { ...order, dropdown: !order.dropdown };
		} else {
			return { ...order, dropdown: false };
		}
	});
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
		setDropdown(state, action) {
			state.pastOrders = dropdown(state.pastOrders, action.payload);
		},
	},
});

export const {
	setCurrentUser,
	setUserDropdownIsOpen,
	setPastOrders,
	setDropdown,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
