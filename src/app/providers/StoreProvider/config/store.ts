import { configureStore } from "@reduxjs/toolkit";
import { StateShema } from "./StateShema";
import { todoReducer } from "features/todo/model/slice/todoSlice";

export function createReduxStore(initialState?: StateShema) {
	return configureStore({
		reducer: {
			todosList: todoReducer,
		}
	})
}