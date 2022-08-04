import { createSlice } from "@reduxjs/toolkit";

export interface appointmentInfoState {
  patientId: string;
  location: string;
  serviceType: string;
  eligibility: string;
  screening: string;
  code: string;
}

const initialState: appointmentInfoState = {
  patientId: " ",
  location: " ",
  serviceType: " ",
  eligibility: " ",
  screening: " ",
  code: " ",
};

export const appointmentInfoSlice = createSlice({
  name: "appointmentInfo",
  initialState: {
    appointmentData: initialState,
  },
  //how state can be updated
  reducers: {
    setAppointmentInfo: (state, action) => {
      state.appointmentData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAppointmentInfo } = appointmentInfoSlice.actions;

export default appointmentInfoSlice.reducer;
