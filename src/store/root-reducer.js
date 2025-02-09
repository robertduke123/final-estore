import { combineReducers } from "@reduxjs/toolkit";
import { itemListReducer } from "./itemList/item-list.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { userReducer } from "./user/user.reducer";
import { messageReducer } from "./message/message.reducer";
import { slideReducer } from "./slide/slide.reducer";

export const rootReducer = combineReducers({
	itemList: itemListReducer,
	cart: cartReducer,
	user: userReducer,
	message: messageReducer,
	slide: slideReducer,
});
