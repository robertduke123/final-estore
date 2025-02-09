import { createSlice } from "@reduxjs/toolkit";

const SLIDE_INTIAL_STATE = {
	slideOpen: false,
};

export const slideSLice = createSlice({
	name: "slice",
	initialState: SLIDE_INTIAL_STATE,
	reducers: {
		setSlideOpen(state, action) {
			state.slideOpen = action.payload;
		},
	},
});

export const { setSlideOpen } = slideSLice.actions;

export const slideReducer = slideSLice.reducer;
