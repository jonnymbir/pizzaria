import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        products:[],
        cartQuantity:0,
        total:0
    },
    reducers:{
        addProduct: (state, action) => {
            state.products.push(action.payload);
            state.cartQuantity += 1;
            state.total += action.payload.price * action.payload.quantity
        }
    },
    reset: (state) => {
        state = initialState;
    }
});

export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;