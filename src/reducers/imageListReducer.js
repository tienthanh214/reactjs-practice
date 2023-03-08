const initialState = {
  imageList: [],
};

export default function imageListReducer(state = initialState, action) {
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
