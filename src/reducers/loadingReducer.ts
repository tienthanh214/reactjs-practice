import { PayloadAction } from "@reduxjs/toolkit";
import { AnyAction } from "@reduxjs/toolkit";
export default function loadingReducer(state = false, action: AnyAction) {
	switch (action.type) {
		case "SET_LOADING_VISIBLE":
			return action.payload;
		default:
			return state;
	}
}
