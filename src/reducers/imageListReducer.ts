import { AnyAction } from "@reduxjs/toolkit";

interface ImageListState {
	imageList: string[];
};

const initialState: ImageListState = {
	imageList: [],
};

export default function imageListReducer(
	state = initialState,
	action: AnyAction
) {
	switch (action.type) {
		case "SET_IMAGE_LIST":
			return {
				...state,
				imageList: action.payload,
			};
		default:
			return state;
	}
}
