import { configureStore } from "@reduxjs/toolkit";
import imageListReducer from "./imageListReducer";
import imageModalReducer from "./imageModalReducer";
import loadingReducer from "./loadingReducer";

export const store = configureStore({
	reducer: {
		imageList: imageListReducer,
		imageModal: imageModalReducer,
		loading: loadingReducer
	},
	middleware: [],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
