import { AnyAction } from "@reduxjs/toolkit";

const initialState = {
	open: false,
  data: {
    date: "none",
    day_of_week: "none",
    id: "none",
    local_time: "none",
    location_address: "none",
    location_type: "none",
    part_of_day: "none",
    src: "",
  },
};

export default function ImageModalReducer(
	state = initialState,
	action: AnyAction
) {
  console.log(state, action)
	switch (action.type) {
		case "SET_IMAGE_MODAL_OPEN":
			return {
				...state,
				open: action.open,
			};
    case "SET_IMAGE_MODAL_DATA":
      return {
        ...state,
        data: action.data,
      }
    case "CLEAR_IMAGE_MODAL_DATA":
      return initialState
		default:
			return state;
	}
}
