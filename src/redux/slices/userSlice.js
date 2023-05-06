import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  status: "idle", // 'idle' | 'loading' | 'succeded' | 'failed'
  error: null,
};

export const fetchUsers = createAsyncThunk("users/list", async () => {});
