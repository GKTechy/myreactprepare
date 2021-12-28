 import { createSlice } from '@reduxjs/toolkit'


const initialStateValues={name:"",age:0,email:""};


 export const userSlice = createSlice ({
     name:"user",
     initialState:{ value:initialStateValues},
     reducers:{
         login: (state,action)=>{
            state.value=action.payload
         },
         logout:(state)=>{
            state.value=initialStateValues
         }
     },
 })

 export const { login , logout} = userSlice.actions;
 export default userSlice.reducer;