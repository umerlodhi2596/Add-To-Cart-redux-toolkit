import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        subTotal: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find((item) => item.product.id === action.payload.product.id);
            if (existingItem) {
                existingItem.count++;
            } else {
                state.items.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            const filtedArray = state.items.filter((item) => item.product.id !== action.payload);
            state.items = filtedArray;
        },
        countIncreament: (state, action) => {
            const currProduct = state.items.find((item) => item.product.id === action.payload)
            currProduct.count++;
        },
        countDecreament: (state, action) => {
            const currProduct = state.items.find((item) => item.product.id === action.payload)
            if (currProduct.count > 1) {
                currProduct.count--;
            }
        }
    }
})

export const { addToCart, removeFromCart, countIncreament, countDecreament } = cartSlice.actions;

export default cartSlice.reducer;