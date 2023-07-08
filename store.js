import { configureStore } from '@reduxjs/toolkit';
import orderModalReducer from './features/newOrder';
import loginModalReducer from './features/signIn';
import shopDataReducer from './store/shopData';
import localDataReducer from './store/localData';

export const store = configureStore({
    reducer: {
        orderModal: orderModalReducer,
        loginModal: loginModalReducer,
        shopData: shopDataReducer,
        localData: localDataReducer,
    },
});
