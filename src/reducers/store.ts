import { configureStore } from "@reduxjs/toolkit";
import imageListReducer from "./imageListReducer";
import ImageModalReducer from "./imageModalReducer";

export const store = configureStore({
	reducer: {
		imageList: imageListReducer,
		imageModal: ImageModalReducer,
	},
	middleware: [],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
