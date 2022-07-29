import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { statSync } from 'fs'


export interface authState {
  isLoggedIn: boolean
}

const initialState: authState = {
  isLoggedIn: false //logic to check localStorage
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  //how state can be updated
  reducers: {
    setLoggedIn: (state, action) => {
        state.isLoggedIn = action.payload;
        console.log('testing 123 :', state.isLoggedIn);
    }
    // authPass: (state) => {
    //   state.isLoggedIn = true;
    // },
    // authFail: (state) => {
    //   state.isLoggedIn = false;
    // },
  },
})

// Action creators are generated for each case reducer function
export const { setLoggedIn } = authSlice.actions

export default authSlice.reducer;