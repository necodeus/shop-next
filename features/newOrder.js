import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const createOrder = createAsyncThunk('newOrder/createOrder', (payload) => {
    const response = fetch('/api/shop/order/make', {
            method: 'POST',
            body: JSON.stringify(payload),
        })
        .then(response => {
            return response.json()
        })
        .catch(err => console.error(err));
    
    return response
});

export const calculateOrder = createAsyncThunk('newOrder/calculateOrder', (payload) => {
    const response = fetch('/api/shop/order/calculate', {
            method: 'POST',
            body: JSON.stringify(payload),
        })
        .then(response => {
            return response.json()
        })
        .catch(err => console.error(err));
    
    return response
});

export const newOrderSlice = createSlice({
    name: 'newOrder',
    initialState: {
        step: 0,
        isOpen: false,
        isMakingOrder: true,
        isCalculatingOrder: true,
        payload: {},
    },
    reducers: {
        previous: (state) => {
            state.step -= 1;
        },
        next: (state) => {
            state.step += 1;
        },
        open: (state) => {
            state.isOpen = true;
        },
        close: (state) => {
            state.isOpen = false;
        },
    },
    extraReducers: {
        [createOrder.pending]: (state) => {
            state.isMakingOrder = true;
        },
        [createOrder.fulfilled]: (state, action) => {
            state.isMakingOrder = false;
            state.payload = action.payload;
        },
        [createOrder.rejected]: (state) => {
            state.isMakingOrder = false;
        },
        [calculateOrder.pending]: (state) => {
            state.isCalculatingOrder = true;
        },
        [calculateOrder.fulfilled]: (state, action) => {
            state.isCalculatingOrder = false;
            state.payload = action.payload;
        },
        [calculateOrder.rejected]: (state) => {
            state.isCalculatingOrder = false;
        },
    },
});

export const {
    previous,
    next,
    open,
    close,
} = newOrderSlice.actions;

export default newOrderSlice.reducer;
