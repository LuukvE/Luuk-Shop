import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import {
  configureStore,
  getDefaultMiddleware,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import { State } from "./types";

// Redux store starting state
const initialState: State = {
  error: "",
  name: "",
  submitted: "",
};

// Actions are generated from the methods inside the reducers property
export const { actions, reducer } = createSlice({
  name: "store",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<Partial<State>>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

const store = configureStore({
  reducer,
  devTools: true,
  middleware: getDefaultMiddleware(),
});

export default store;

export { useDispatch } from "react-redux";

// Export a typed version of the useSelector hook
export const useSelector: TypedUseSelectorHook<State> = useReduxSelector;
