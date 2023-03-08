import { configureStore } from "@reduxjs/toolkit";
import imageListReducer from "./imageListReducer";

export const store = configureStore({
	reducer: {
		imageList: imageListReducer
	},
	middleware: [],
});