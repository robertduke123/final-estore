import { createSlice } from "@reduxjs/toolkit";

export const ITEM_LIST_INITIAL_STATE = {
	itemList: [],
};

export const itemListSlice = createSlice({
	name: "itemList",
	initialState: ITEM_LIST_INITIAL_STATE,
	reducers: {
		setItemList(state, action) {
			state.itemList = action.payload;
		},
	},
});

export const { setItemList } = itemListSlice.actions;

export const itemListReducer = itemListSlice.reducer;
