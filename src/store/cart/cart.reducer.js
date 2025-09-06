import { createSlice } from "@reduxjs/toolkit";

const CART_INITIAL_STATE = {
	isCartOpen: false,
	cartItems: [],
};

const addCartItem = (cartItems, productToAdd) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);

	if (existingCartItem) {
		const newCart = cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
		localStorage.setItem("cart", JSON.stringify(newCart));
		return newCart;
	}

	const newCart = [...cartItems, { ...productToAdd, quantity: 1 }];
	localStorage.setItem("cart", JSON.stringify(newCart));
	return newCart;
};

const removeCartItem = (cartItems, cartItemToRemove) => {
	// find the cart item to remove
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);

	// check if quantity is equal to 1, if it is remove that item from the cart
	if (existingCartItem.quantity === 1) {
		const newCart = cartItems.filter(
			(cartItem) => cartItem.id !== cartItemToRemove.id
		);
		localStorage.setItem("cart", JSON.stringify(newCart));
		return newCart;
	}

	// return back cartitems with matching cart item with reduced quantity
	const newCart = cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
	localStorage.setItem("cart", JSON.stringify(newCart));
	return newCart;
};

const clearCartItem = (cartItems, cartItemToClear) => {
	const newCart = cartItems.filter(
		(cartItem) => cartItem.id !== cartItemToClear.id
	);
	localStorage.setItem("cart", JSON.stringify(newCart));
	return newCart;
};

export const cartSlice = createSlice({
	name: "cart",
	initialState: CART_INITIAL_STATE,
	reducers: {
		setIsCartOpen(state, action) {
			state.isCartOpen = action.payload;
		},
		setCart(state, action) {
			localStorage.setItem("cart", JSON.stringify(action.payload));
			state.cartItems = action.payload;
		},
		addItemToCart(state, action) {
			state.cartItems = addCartItem(state.cartItems, action.payload);
		},
		removeItemFromCart(state, action) {
			state.cartItems = removeCartItem(state.cartItems, action.payload);
		},
		clearItemFromCart(state, action) {
			state.cartItems = clearCartItem(state.cartItems, action.payload);
		},
		emptyCart(state) {
			localStorage.removeItem("cart");
			state.cartItems = [];
		},
	},
});

export const {
	setIsCartOpen,
	setCart,
	addItemToCart,
	removeItemFromCart,
	clearItemFromCart,
	emptyCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
