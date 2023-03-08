import { PayloadAction } from "@reduxjs/toolkit";
const initialState = {
	open: false,
};

export default function ImageModalReducer(
	state = initialState,
	action: PayloadAction<any>
) {
	switch (action.type) {
		case "SET_IMAGE_MODAL_OPEN":
			return {
				...state,
				open: action.payload,
			};
		default:
			return state;
	}
}
