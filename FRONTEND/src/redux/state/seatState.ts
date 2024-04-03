import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const seatSlice = createSlice({
  name: "seats",
  initialState: {
    users: [],
    seatInfo: {
      seat_id: "",
      del_flag: "",
      created_at: "",
      updated_at: "",
      id: "",
    },
    isLoading: false,
  },
  reducers: {
    getSeatsFetch: (state) => {
      state.isLoading = true;
    },
    getSeatsSuccess: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    },
    
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  getSeatsFetch,
  getSeatsSuccess,
  setIsLoading,

  // changePasswordSuccess,
} = seatSlice.actions;

export const seatReducer = seatSlice.reducer;