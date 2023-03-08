import { PayloadAction } from "@reduxjs/toolkit";

type ImageListState = {
  imageList: string[];
}

const initialState : ImageListState = {
  imageList: [],
};

export default function imageListReducer(state = initialState, action : PayloadAction<string[]>) {
	switch (action.type) {
    case "SET_IMAGE_LIST":
      return {
        ...state,
        imageList: action.payload,
      }
    default:
      return state
	}
}
