import { createSelector } from "@reduxjs/toolkit";
// import { itemListSlice } from "./item-list.reducer";

const selectItemListReducer = (state) => state.itemList;

export const selectItemList = createSelector(
	[selectItemListReducer],
	(itemListSlice) => itemListSlice.itemList
);
