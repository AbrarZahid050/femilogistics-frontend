import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosAuthInterceptor from "../../components/Axios/axiosInterceptor";

const initialState = {
  users: [],
  status: "idle", // 'idle' | 'loading' | 'succeded' | 'failed'
  error: null,
};

export const fetchUsers = createAsyncThunk("users/list", async () => {
  const response = await axiosAuthInterceptor.get("users/");
  return response.data;
});

export const createNewUser = createAsyncThunk("user/create", async (data) => {
  console.log(data); //json
  const response = await axiosAuthInterceptor.post("users/", data);
  return response;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.state = "failed";
        state.error = action.error.message;
      })
      .addCase(createNewUser.pending, (state, action) => {
        console.log("loading...");
      })
      .addCase(createNewUser.rejected, (state, action) => {
        console.log(action.error);
      })
      .addCase(createNewUser.fulfilled, (state, action) => {
        console.log(action.payload);
      });
  },
});

export const selectAllUsers = (state) => state.users.users;
export const getUsersStatus = (state) => state.users.status;
export const getUsersError = (state) => state.users.error;

export default userSlice.reducer;
