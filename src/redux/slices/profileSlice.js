import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosAuthInterceptor from "../../components/Axios/axiosInterceptor";

const initialState = {
  status: "idle", // 'idle' | 'loading' | 'succeded' | 'failed'
  error: null,
  profileData:{}
};

export const fetchProfile = createAsyncThunk("profile/get", async (data) => {
  const response = await axiosAuthInterceptor.get("users/profile");
  
  console.log("response",response.data)
  return response;
});

// export const createProfile = createAsyncThunk("profile/create", async (data) => {
//   const response = await axiosAuthInterceptor.post("users/profile", data);
//   console.log(response)
//   return response;
// });

const profileSlice = createSlice({
  name: "profile",
  initialState,
  extraReducers(builder) {
    builder
        .addCase(fetchProfile.fulfilled, (state, action) => {
          // console.log(action)
          // state.profileData = action.payload.data.results;
        })
  },
});

export default profileSlice.reducer;
