import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mobile: []
}

const mobileSlice = createSlice({
    name: "mobile",
    initialState,
    reducers: {
        addMobile(state, action) {
            const mobileItem = state.mobile.find((item) => item.id === action.payload.id);
            if (mobileItem) {
                // mobileItem.quantity += 1;
                return;
            } else {
                state.mobile.push({ ...action.payload, quantity: 1 });
            }
        }
    }
})

export const { addMobile } = mobileSlice.actions;

export default mobileSlice.reducer;