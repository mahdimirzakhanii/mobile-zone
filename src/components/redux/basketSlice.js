import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const handleBasket = createAsyncThunk('basket/handleBasket', async () => {
    try {
        const res = await axios.get(`https://672d29e1fd897971564194df.mockapi.io/ap/v1/basket/`);
        return res?.data;
    } catch (error) {
        console.log(error);
    }
})
const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        dataBasket: [],
        loading: false,
    },
    reducers: {
        updateItemCount: (state, action) => {
            const { id, count } = action.payload;
            const item = state.dataBasket.find(item => item.id === id);
            if (item) {
                item.count = count;
            }
        },
        addToBasket: (state, action) => {
            state.dataBasket.push(action.payload);
        },
        deleteToBasket: (state, action) => {
            state.dataBasket = state.dataBasket.filter(item => item.id !== action.payload.id);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(handleBasket.pending, (state) => {
                state.loading = true;
            })
            .addCase(handleBasket.fulfilled, (state, action) => {
                state.loading = false;
                state.dataBasket = action.payload;
            })
    }
});
export const { updateItemCount, addToBasket, deleteToBasket } = basketSlice.actions;
export default basketSlice.reducer;