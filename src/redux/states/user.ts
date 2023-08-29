import { createSlice } from "@reduxjs/toolkit";
import { UserPublicData } from "../../models/User.model";

export const EmptyUserState = {
    user: {
        id: "",
        name: "",
        userName: "",
        email: ""
    },
    userStatusLoading: true
}

export const userSlice = createSlice({
    name: "authState",
    initialState: EmptyUserState,
    reducers: {
        createUser: (state, action) => ({...state, user: action.payload}),
        updateUser: (state, action) => ({ ...state, user: {...state.user, ...action.payload}}),
        resetUser: (state) => ({...state, user: EmptyUserState.user}),
        setUserStatusLoading: (state, action) => ({...state, userStatusLoading: action.payload})
    }
});

export const { createUser, updateUser, resetUser, setUserStatusLoading } = userSlice.actions;

export default userSlice.reducer;