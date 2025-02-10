import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("products/fetch",
    async () => {
        try {
            const res = await axios.get("https://672d29e1fd897971564194df.mockapi.io/ap/v1/mobiles");
            return res?.data
        } catch (error) {
            console.log(error);
        }
    })

const initialState = {
    listMobile: [],
    loading: false,
    error: null,
}
const mobileSlice = createSlice({
    name: "mobile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getData.pending, (state) => {
                state.loading = true
            })
            .addCase(getData.fulfilled, (state, action) => {
                state.loading = false;
                state.listMobile = action.payload;
            })
            .addCase(getData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})
export default mobileSlice.reducer;