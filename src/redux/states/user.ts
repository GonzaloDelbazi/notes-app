import { createSlice } from "@reduxjs/toolkit";
import { UserPublicData } from "../../models/User.model";

export const EmptyUserState: UserPublicData = {
    id: "",
    name: "",
    userName: "",
    email: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState: EmptyUserState,
    reducers: {
        createUser: (state, action) => action.payload,
        updateUser: (state, action) => ({ ...state, ...action.payload}),
        resetUser: () => EmptyUserState
    }
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;