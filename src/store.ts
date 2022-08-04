import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/Auth/AuthSlice'
import { loadState } from "./components/browser-storage"
import patientInfoReducer from './features/PatientInfoSlice'
import vaccineInfoReducer from './features/VaccineInfoSlice'
import appointmentInfoReducer from './features/AppointmentSlice'

export const store = configureStore({
    
    //tells store to use this reducer function to handle all updates to that state
  reducer: {
    auth: authReducer,
    patientInfo: patientInfoReducer,
    vaccineInfo: vaccineInfoReducer,
    appointmentInfo: appointmentInfoReducer
  },
  preloadedState: loadState(),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch