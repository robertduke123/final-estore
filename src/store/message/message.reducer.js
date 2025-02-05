import { createSlice } from "@reduxjs/toolkit";

const MESSAGE_INITIAL_STATE = {
	messageDisplay: false,
	message: "",
};

export const messageSlice = createSlice({
	name: "message",
	initialState: MESSAGE_INITIAL_STATE,
	reducers: {
		setMessageDisplay(state, action) {
			state.messageDisplay = action.payload;
		},
		setMessage(state, action) {
			state.message = action.payload;
		},
	},
});

export const { setMessageDisplay, setMessage } = messageSlice.actions;

export const messageReducer = messageSlice.reducer;
