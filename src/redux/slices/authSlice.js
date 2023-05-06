import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import Cookie from "js-cookie";

const initialState = {
  email: Cookie.get("accessToken")
    ? jwt_decode(Cookie.get("accessToken"))?.email
    : null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      Cookie.set("accessToken", action.payload);
      const jwtDecoded = jwt_decode(Cookie.get("accessToken"));
      state.email = jwtDecoded.email;
    },

    setLogout: (state) => {
      Cookie.remove("accessToken");
      state.email = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLogin, setLogout } = authSlice.actions;

export const selectUser = (state) => state.auth.email; //writing it here instead of writing in the component

export default authSlice.reducer;
