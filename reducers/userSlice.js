import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        id:0,
        email: "",
        firstName : "",
        lastName : "",
        gender : "",
        image : "",
        contact: "",
        designation : "",
        office: "",
        university: "",
        token : "",
        refreshToken : "",
        isLoggedIn : false
    },

    reducers:{
        login: (state, action)=>{
            state.token = action.payload.token,
            state.refreshToken = action.payload.refreshToken,
            state.isLoggedIn = action.payload.isLoggedIn
           
            
        },
        logout:(state) =>{
            state.token = "",
            state.refreshToken = "",
            state.isLoggedIn = false,
            state.id = 0,
            state.contact = "",
            state.designation = "",
            state.email = "",
            state.firstName = "", 
            state.gender = "",
            state.image = "",
            state.lastName = "",
            state.office = ""
            
        },
        setUser:(state,action)=>{
            state.id = action.payload.id,
            state.email = action.payload.email,
            state.firstName = action.payload.firstName,
            state.lastName = action.payload.lastName,
            state.gender = action.payload.gender,
            state.image = action.payload.image,
            state.contact = action.payload.contact,
            state.designation = action.payload.designation,
            state.office = action.payload.office,
            state.university = action.payload.university
        }
    }
});

export const {
    login,
    logout,
    setUser
} = userSlice.actions;

export default userSlice.reducer;