import { createSlice } from "@reduxjs/toolkit";

const hrSlice = createSlice({
  name: "hrSlice",
  initialState: {
    user: [],
    img: []
  },
  reducers: {
    userLogin: (state, action) => {
      state.user.push(action.payload);
    },
    userLogout: (state, action) => {
      state.user = []
    },
    image: (state, action) => {
      state.img.push(action.payload)
    },
    imagedlt: (state, action) => {
      state.img = []
    }
  }
})

export const { userLogin, userLogout, image, imagedlt } = hrSlice.actions;
export default hrSlice.reducer;