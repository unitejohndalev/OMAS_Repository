import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    userInfo: {
      emp_id: "",
      username: "",
      password: "",
      position_id: "",
      dept_id: "",
      section_id: "",
      status_code: "",
      role_id: "",
      img_src: "",

      // emp_id: "",
      // username: "",
      // password: "",
      // confirm_password: "",
      // current_password: "",
      // new_password: "",
      // confirm_new_password: "",
      // fname: "",
      // mname: "",
      // lname: "",
      // position_name: "",
      // email: "",
      // title: "",
      // section_name: "",
      // dept_name: "",
      // position_id: 0,
      // dept_id: 0,
      // section_id: 0,
      // status_code: "",
      // img_src: "",
    },
    principal: {},
    userRoles: [],
    isLoading: false,
    isLoadingDialog: false,
    error: "", // used to fetch error message for change password verification
    notice: {
      message: "",
      severity: "",
    },
    isAddSuccess: false,
    saved: false,
  },
  reducers: {
    getUsersFetch: (state) => {
      state.isLoading = true;
    },
    getUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    },
    getUserInfoSuccess: (state, action) => {
      state.userInfo = action.payload;
      state.isLoading = false;
    },
    getPrincipalInfoSuccess: (state, action) => {
      state.principal = action.payload;
      state.isLoading = false;
    },
    getUserRolesSuccess: (state, action) => {
      state.userRoles = action.payload;
      state.isLoading = false;
    },
    setMessage: (state, action) => {
      state.notice = action.payload;
    },
    addUserSuccess: (state) => {
      state.isAddSuccess = true;
    },
    addUserReset: (state) => {
      state.isAddSuccess = false;
    },
    clearUserInfo: (state) => {
      state.userInfo = {
      emp_id: "",
      username: "",
      password: "",
      position_id: "",
      dept_id: "",
      section_id: "",
      status_code: "",
      role_id: "",
      img_src: "",
        
        // emp_id: "",
        // username: "",
        // password: "",
        // fname: "",
        // mname: "",
        // lname: "",
        // position_name: "",
        // email: "",
        // title: "",
        // section_name: "",
        // dept_name: "",
        // status_code: "",
        // img_src: "",
      };
      state.userRoles = [];
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsLoadingDialog: (state, action) => {
      state.isLoadingDialog = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearError: (state) => {
      state.error = "";
    },
    setSaved: (state, action) => {
      state.saved = action.payload;
    },
   
  },
});

export const {
  getUsersFetch,
  getUsersSuccess,
  getUserInfoSuccess,
  getPrincipalInfoSuccess,
  getUserRolesSuccess,
  setMessage,
  addUserSuccess,
  addUserReset,
  clearUserInfo,
  setIsLoading,
  setError,
  clearError,
  setSaved,
  setIsLoadingDialog,

  // changePasswordSuccess,
} = userSlice.actions;

export const userReducer = userSlice.reducer;

type UserInput = {
    username: string,
    password:string
}
//userInput slice
const inputInitialState: UserInput = {
  username: "",
  password: "",
};

const InputSlice = createSlice({
  name: "userInput",
  initialState: inputInitialState,
  reducers: {
    setUserField: (state, action: PayloadAction<Partial<UserInput>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUserField } = InputSlice.actions;
export const InputReducer = InputSlice.reducer;
