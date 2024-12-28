import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    return res.json();
})


const productSlice = createSlice({
    name: 'products',
    initialState: {
        isLoading: false,
        products: [],
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isError = true;
        })
    }
})


export default productSlice.reducer;