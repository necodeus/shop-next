import { createSlice  } from '@reduxjs/toolkit';

const SSR = typeof window === 'undefined';

export const localDataSlice = createSlice({
    name: 'localData',
    initialState: {
        orderProducts: !SSR ? JSON.parse(localStorage.getItem("orderProducts")) || [] : [],
        orderCoupons: !SSR ? JSON.parse(localStorage.getItem("orderCoupons")) || [] : [],
    },
    reducers: {
        addOrderProduct: (state, actions) => {
            let orderProducts = state.orderProducts;

            const id = orderProducts.findIndex(p => p.id === actions.payload.id);
            
            if (id !== -1) {
                orderProducts[id].quantity += 1;
            } else {
                orderProducts.push({
                    id: actions.payload.id * 1,
                    quantity: 1,
                });
            }

            state.orderProducts = orderProducts;
            !SSR && localStorage.setItem("orderProducts", JSON.stringify(orderProducts));
        },
        setOrderProduct: (state, actions) => {
            if (
                Number.isInteger(Number(actions.payload.quantity)) === false
                || actions.payload.quantity <= 0
            ) {
                return;
            }

            let orderProducts = state.orderProducts;

            const id = orderProducts.findIndex(p => p.id === actions.payload.id);
            
            if (id !== -1) {
                orderProducts[id].quantity = actions.payload.quantity * 1;
            } else {
                orderProducts.push({
                    id: actions.payload.id * 1,
                    quantity: actions.payload.quantity * 1,
                });
            }

            state.orderProducts = orderProducts;
            !SSR && localStorage.setItem("orderProducts", JSON.stringify(orderProducts));
        },
        removeOrderProduct: (state, actions) => {
            let orderProducts = state.orderProducts;

            const id = orderProducts.findIndex(p => p.id === actions.payload.id);
            
            if (id === -1) {
                return;
            }

            if (orderProducts[id].quantity > 1) {
                orderProducts[id].quantity -= 1;
            } else {
                orderProducts.splice(id, 1);
            }

            state.orderProducts = orderProducts;
            !SSR && localStorage.setItem("orderProducts", JSON.stringify(orderProducts));
        },
        setOrderCoupon: (state, actions) => {
            if (
                typeof actions.payload != 'string'
                || actions.payload.length < 1
            ) {
                return;
            }

            let orderCoupons = state.orderCoupons;

            const id = orderCoupons.findIndex(p => p.toUpperCase() === actions.payload.toUpperCase());
            
            if (id !== -1) { // znaleziono
                return; // nie dodawaj
            }

            orderCoupons.push(actions.payload.toUpperCase());

            state.orderCoupons = orderCoupons;
            !SSR && localStorage.setItem("orderCoupons", JSON.stringify(orderCoupons));
        },
        removeOrderCoupon: (state, actions) => {
            let orderCoupons = state.orderCoupons;

            const id = orderCoupons.findIndex(p => p.toUpperCase() === actions.payload.toUpperCase());
            
            if (id === -1) { // nie znaleziono
                return; // nie usuwanj
            }

            orderCoupons.splice(id, 1);

            state.orderCoupons = orderCoupons;
            !SSR && localStorage.setItem("orderCoupons", JSON.stringify(orderCoupons));
        },
    },
});

export const {
    addOrderProduct,
    setOrderProduct,
    removeOrderProduct,
    
    setOrderCoupon,
    removeOrderCoupon,
} = localDataSlice.actions;

export default localDataSlice.reducer;
