import { createSlice } from '@reduxjs/toolkit'

export interface patientInfoState {
  firstName: string,
  lastName: string,
  birthDate: string,
  ethnicity: string,
  gender: string,
  email: string,
  address: string,
  street: string,
  city: string,
  state: string,
  paymentInfo: string,
  insuranceId: string,
  memberId: string,
  insuranceProvider: string,
}

const initialState: patientInfoState = {
    firstName: " ",
    lastName: " ",
    birthDate: " ",
    ethnicity: " ",
    gender: " ",
    email: " ",
    address: " ",
    street: " ",
    city: " ",
    state: " ",
    paymentInfo: " ",
    insuranceId: " ",
    memberId: " ",
    insuranceProvider: " ",
}

export const patientInfoSlice = createSlice({
  name: 'patientInfo',
  initialState: {
    patientData: initialState,
  },
  //how state can be updated
  reducers: {
    setPatientInfo: (state, action) => {
        state.patientData = action.payload;
        // console.log('testing 456 :', state.patientData);
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPatientInfo } = patientInfoSlice.actions

export default patientInfoSlice.reducer;