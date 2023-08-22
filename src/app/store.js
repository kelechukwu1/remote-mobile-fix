"use client";
import { createSlice } from "@reduxjs/toolkit";

// Check if window is defined (i.e., running in the browser)
const isBrowser = typeof window !== "undefined";

let parsedLocalStorageUser = [];

if (isBrowser) {
	const localStorageUser = localStorage.getItem("userInfo");
	parsedLocalStorageUser = localStorageUser ? JSON.parse(localStorageUser) : [];
}
const initialState = {
	value: parsedLocalStorageUser,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setNewRepairerId: (state, action) => {
			//set the state to action.payload
			state.value = action.payload;
			console.log(state.value);
			// Create a new array with the updated value
			// const updatedValue = [...state.value, action.payload];
			// state.value = updatedValue; // Update the state
			localStorage.setItem("userInfo", JSON.stringify(state.value));
		},
		setNewUserId: (state, action) => {
			//set the state to action.payload
			state.value = action.payload;
			console.log(state.value);
			localStorage.setItem("userInfo", JSON.stringify(state.value));
		},
	},
});
export const { setNewRepairerId, setNewUserId } = userSlice.actions;
