import { AnyAction } from "@reduxjs/toolkit";

const initialState = {
	open: false,
  data: {
    date: "",
    day_of_week: "",
    id: "",
    local_time: "",
    location_address: "",
    location_type: "",
    part_of_day: "",
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
