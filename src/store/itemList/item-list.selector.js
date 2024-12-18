import { createSelector } from "@reduxjs/toolkit";
// import { itemListSlice } from "./item-list.reducer";

const selectItemListReducer = (state) => state.itemList;

export const selectItemList = createSelector(
	[selectItemListReducer],
	(itemListSlice) => itemListSlice.itemList
);

export const selectItemListMap = createSelector(
	[selectItemList],
	(itemCategory) =>
		itemCategory.reduce((acc, category) => {
			const { title, items } = category;
			acc[title.toLowerCase()] = items;
			return acc;
		}, {})
);
