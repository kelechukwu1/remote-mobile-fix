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
	repairerId: parsedLocalStorageUser, // Initial state for repairerId
	userId: parsedLocalStorageUser, // Initial state for userId
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setNewRepairerId: (state, action) => {
			//set the state to action.payload
			state.repairerId = action.payload;
			console.log(state.repairerId);

			localStorage.setItem("userInfo", JSON.stringify(action.payload));
		},
		setNewUserId: (state, action) => {
			//set the state to action.payload
			state.userId = action.payload;
			console.log(state.userId);
			localStorage.setItem("userInfo", JSON.stringify(action.payload));
		},
	},
});
export const { setNewRepairerId, setNewUserId } = userSlice.actions;
