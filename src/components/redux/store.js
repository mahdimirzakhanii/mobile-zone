import { configureStore } from "@reduxjs/toolkit";
import mobileSlice from './slice'

export const store = configureStore({
    reducer: {
        dataMobile: mobileSlice,
    },
})