import { createSlice } from "@reduxjs/toolkit";

const localStorageLocation = localStorage.getItem("userInfo");
const parsedLocalStorageLocation = localStorageLocation
	? JSON.parse(localStorageLocation)
	: [];
// console.log(localStorageLocation);
// console.log(parsedLocalStorageLocation);

const initialState = {
	value: parsedLocalStorageLocation,
};

export const userInfoSlice = createSlice({
	name: "userInfo",
	initialState,
	reducers: {
		addUserInfo: (state, action) => {
			state.value.push(action.payload);
			console.log(state.value);
			localStorage.setItem("userInfo", JSON.stringify(state.value));
		},
	},
});
export const { addUserInfo } = userInfoSlice.actions;
