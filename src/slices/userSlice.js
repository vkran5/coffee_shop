import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogin: (state, action) => {
      // console.log('ini payload', action.payload);
      return action.payload;
    },
    userLogOut: (state, action) => {
      // console.log(state);
      state = initialState;
      return state;
    },
  },
});

export const getUser = (state) => state.user;

export const { userLogin, userLogOut } = userSlice.actions;

export default userSlice.reducer;
