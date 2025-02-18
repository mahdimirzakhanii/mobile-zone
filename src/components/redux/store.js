import { configureStore } from "@reduxjs/toolkit";
import mobileSlice from './slice'
import basketSlice from './basketSlice'

export const store = configureStore({
    reducer: {
        listMobile: mobileSlice,
        basket: basketSlice,
    },
})