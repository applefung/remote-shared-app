import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  isLoading: boolean;
}

const initialState: CounterState = {
    isLoading: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
