import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: 0,
  },
  reducers: {
    // increment: state => {

    //   state.value = "hi";
    // },
    // decrement: state => {
    //   state.value = "hi";
    // },
    // incrementByAmount: (state, action) => {
    //   state.value = action.payload;
    // },
    stateUpdate: (state, action) => {
      state.value = { ...action.payload };
    },
    signOut: (state) => {
      state.value = 0;
    },
  },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = authSlice.actions;
export const { stateUpdate, signOut } = authSlice.actions;

// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

export const authData = (state) => state.auth.value;

export default authSlice.reducer;
