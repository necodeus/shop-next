import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { unionBy } from 'lodash';

export const getProducts = createAsyncThunk('shopData/getProducts', products => {
    if (products.length <= 0) {
        return;
    }

    const response = fetch('/api/shop/products?include=' + products.join(','))
        .then(response => response.json())
        .catch(err => console.error(err));
    
    return response;
});

export const shopDataSlice = createSlice({
    name: 'shopData',
    initialState: {
        products: [],
    },
    reducers: {
    },
    extraReducers: {
        [getProducts.pending]: (state) => {
        },
        [getProducts.fulfilled]: (state, actions) => {
            if (typeof actions.payload === 'undefined') {
                return;
            }

            state.products = unionBy(actions.payload.data.products, state.products, "id");
        },
        [getProducts.rejected]: (state) => {
        },
    },
});

// export const {
//     getProducts,
// } = shopDataSlice.actions;

export default shopDataSlice.reducer;
