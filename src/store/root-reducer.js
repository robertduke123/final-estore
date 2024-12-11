import { combineReducers } from "@reduxjs/toolkit";
import { itemListReducer } from "./itemList/item-list.reducer";

export const rootReducer = combineReducers({
	itemList: itemListReducer,
});
