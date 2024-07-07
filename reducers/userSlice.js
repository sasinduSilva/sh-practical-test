import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        User: {
            id:0,
        username:"",
        email: "",
        firstName : "",
        lastName : "",
        gender : "",
        image : "",
        },
        token : "",
        refreshToken : "",
        isLoggedIn : false
    },

    reducers:{
        login: (state, action)=>{
            state.token = action.payload.token,
            state.refreshToken = action.payload.refreshToken,
            state.User = action.payload.User,
            state.isLoggedIn = action.payload.isLoggedIn
        },
        logout:(state) =>{
            state.token = "",
            state.refreshToken = "",
            state.isLoggedIn = false,
            state.User ={
                id : 0,
                username : "",
                email : "",
                firstName : "",
                lastName : "",
                gender : "",
                image : ""
            }
        }
    }
});

export const {
    login,
    logout
} = userSlice.actions;

export default userSlice.reducer;