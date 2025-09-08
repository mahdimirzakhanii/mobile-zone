import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getListProducts = createAsyncThunk("productsList/fetch", async () => {
    try {
        const res = await axios.get("https://672d29e1fd897971564194df.mockapi.io/ap/v1/mobiles");
        return res?.data
    } catch (error) {
        console.log(error);
    }
})

const initialState = {
    listMobile: [],
    searchList: [],
    loading: false,
    error: null,
}
const mobileSlice = createSlice({
    name: "mobile",
    initialState,
    reducers: {
        searchMobile: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            state.searchList = state.listMobile.filter((mobile) =>
                mobile.name.toLowerCase().includes(searchTerm)
            )
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getListProducts.pending, (state) => {
                state.loading = true
            })
            .addCase(getListProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.listMobile = action.payload;
                // state.searchList = action.payload;
            })
            .addCase(getListProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})
// export const { searchMobile } = mobileSlice.actions;
export default mobileSlice.reducer;