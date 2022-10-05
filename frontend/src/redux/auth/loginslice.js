import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
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
    SignIn: (state, action) => {
      state.value = 1;
    },
    SignOut: (state) => {
      state.value = 0;
    },
  },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = authSlice.actions;
export const { SignIn, SignOut } = loginSlice.actions;

// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

export const loginState = (state) => state.auth.value;

export default loginSlice.reducer;
