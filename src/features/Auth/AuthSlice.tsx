import { createSlice } from '@reduxjs/toolkit'

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
  },
})

// Action creators are generated for each case reducer function
export const { setLoggedIn } = authSlice.actions

export default authSlice.reducer;