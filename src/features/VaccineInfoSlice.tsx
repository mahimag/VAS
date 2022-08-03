import { createSlice } from "@reduxjs/toolkit";

export interface vaccineInfoState {
  vaccineName: string;
  location: string;
  distribution: string;
  dose: string;
  duration: string;
  gender: string;
  age: string;
  ethnicity: string;
}

const initialState: vaccineInfoState = {
  vaccineName: " ",
  location: " ",
  distribution: " ",
  dose: " ",
  duration: " ",
  gender: " ",
  age: " ",
  ethnicity: " ",
};

export const vaccineInfoSlice = createSlice({
  name: "vaccineInfo",
  initialState: {
    vaccineData: initialState,
  },
  //how state can be updated
  reducers: {
    setVaccineInfo: (state, action) => {
      state.vaccineData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setVaccineInfo } = vaccineInfoSlice.actions;

export default vaccineInfoSlice.reducer;
