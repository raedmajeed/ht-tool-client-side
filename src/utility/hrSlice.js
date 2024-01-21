import { createSlice } from "@reduxjs/toolkit";

const hrSlice = createSlice({
  name: "hrSlice",
  initialState: {
    user: []
  },
  reducers: {
    userLogin: (state, action) => {
      state.user.push(action.payload);
    },
    userLogout: () => {
      state.user.pop();
    }
  }
})

export const { userLogin, userLogout } = hrSlice.actions;
export default hrSlice.reducer;