import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        step: 0,
        isOpen: false,
    },
    reducers: {
        open: (state) => {
            state.isOpen = true;
        },
        close: (state) => {
            state.isOpen = false;
        },
    },
});

export const {
    open,
    close,
} = loginSlice.actions;

export default loginSlice.reducer;
