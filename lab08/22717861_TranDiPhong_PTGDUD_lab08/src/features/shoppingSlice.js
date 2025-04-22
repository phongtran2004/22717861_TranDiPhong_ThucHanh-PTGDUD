import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    cart: []
}

const shoppingSlice = createSlice({
    name: "shopping",
    initialState: initialValue,
    reducers: {
        addItem: (state, action) => {
            const { id, name, price, image } = action.payload;
            const existingItem = state.cart.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({
                    id,
                    name,
                    price,
                    image,
                    quantity: 1
                });
            }
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.cart.find(item => item.id === id);

            if (item) {
                if (quantity <= 0) {
                    state.cart = state.cart.filter(item => item.id !== id);
                } else {
                    item.quantity = quantity;
                }
            }
        }
    }
});

export const { addItem, removeItem, updateQuantity } = shoppingSlice.actions;
export default shoppingSlice.reducer;
