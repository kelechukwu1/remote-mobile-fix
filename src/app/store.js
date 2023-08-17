"use client";
import { createSlice } from "@reduxjs/toolkit";

// const localStorageLocation = localStorage.getItem("userInfo");
// const parsedLocalStorageLocation = localStorageLocation
// 	? JSON.parse(localStorageLocation)
// 	: [];

// Check if window is defined (i.e., running in the browser)
const isBrowser = typeof window !== "undefined";

let parsedLocalStorageLocation = [];

if (isBrowser) {
	const localStorageLocation = localStorage.getItem("userInfo");
	parsedLocalStorageLocation = localStorageLocation
		? JSON.parse(localStorageLocation)
		: [];
}
const initialState = {
	value: parsedLocalStorageLocation,
};

export const userInfoSlice = createSlice({
	name: "userInfo",
	initialState,
	reducers: {
		addUserInfo: (state, action) => {
			// state.value.push(action.payload);
			// console.log(state.value);
			// Create a new array with the updated value
			const updatedValue = [...state.value, action.payload];
			state.value = updatedValue; // Update the state
			localStorage.setItem("userInfo", JSON.stringify(state.value));
		},
	},
});
export const { addUserInfo } = userInfoSlice.actions;
