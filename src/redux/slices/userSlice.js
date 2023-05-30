import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosAuthInterceptor from "../../components/Axios/axiosInterceptor";

const initialState = {
  count: 0,
  users: [],
  status: "idle", // 'idle' | 'loading' | 'succeded' | 'failed'
  error: null,
};

export const fetchUsers = createAsyncThunk("users/list", async (page) => {
  // console.log(page);
  const response = await axiosAuthInterceptor.get(
    `users/?limit=10&offset=${page}`
  );
  // const response = await axiosAuthInterceptor.get(`users/`);

  return response.data;
});

export const createNewUser = createAsyncThunk("user/create", async (data) => {
  // console.log(data);
  const response = await axiosAuthInterceptor.post("users/", data);
  return response;
});

export const deleteUser = createAsyncThunk("user/delete", async (userId) => {
  // console.log(userId);
  const response = await axiosAuthInterceptor.delete(`users/${userId}/`);
  return response.data;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder

      //---------------------------------------fetch user thunk fun-------------------------
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        const newArr = [...action.payload.results];
        const sortedArr = newArr.sort(
          (first, second) =>
            new Date(second.updated_on) - new Date(first.updated_on)
        );

        state.users = sortedArr;
        state.count = action.payload.count;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.state = "failed";
        state.error = action.error.message;
      })
      //<--------------------------cases for createNewUser thunk fun----------------------------->
      .addCase(createNewUser.pending, (state, action) => {
        // state.status = "loading"; //commented it so that the User component doesn't render twice
      })
      .addCase(createNewUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.log(action);
      })
      .addCase(createNewUser.fulfilled, (state, action) => {
        state.status = "idle"; //setting the status to idle so the User component would render, see the useEffect Hook in the User.jsx
      })

      //<-------------------------cases for deleteUser thunk fun---------------------------------->
      .addCase(deleteUser.pending, (state, action) => {
        // state.status = "loading";
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.status = "idle";
      });
  },
});

export const selectAllUsers = (state) => state.users.users;
export const getUsersStatus = (state) => state.users.status;
export const getUsersError = (state) => state.users.error;
export const getCount = (state) => state.users.count;

export default userSlice.reducer;
