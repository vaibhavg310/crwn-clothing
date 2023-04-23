//import {CART_ACTION_TYPES} from './cart.types'
import {createSlice} from '@reduxjs/toolkit'


const addCartItem = (cartItems, productToAdd)  => {

    // Check if the product is already in the cart
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    // If the product is already in the cart, increase the quantity by 1
    if(existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === productToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        );
    }

    return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    if(existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map((cartItem) => 
        cartItem.id === cartItemToRemove.id
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    );

}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
}


// export const setIsCartOpen = (boolean) =>
//   createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

// export const addItemToCart = (cartItems, productToAdd) => {
//     const newCartItems = addCartItem(cartItems, productToAdd);
//    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS ,newCartItems);
// }

// export const removeItemFromCart = (cartItems, cartItemToRemove) => {
//     const newCartItems = removeCartItem(cartItems, cartItemToRemove);
//     return createAction(CART_ACTION_TYPES.SET_CART_ITEMS ,newCartItems);
//  }

// export const clearItemFromCart = (cartItems, cartItemToClear) => {
//     const newCartItems = clearCartItem(cartItems, cartItemToClear);
//     return createAction(CART_ACTION_TYPES.SET_CART_ITEMS ,newCartItems);
// }


export const CART_INITIAL_STATE = {
    isCartOpen : false,
    cartItems : [],
   
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: CART_INITIAL_STATE,
    reducers: {
        addItemToCart (state, action) {
            state.cartItems = addCartItem(state.cartItems, action.payload);
        },
        removeItemFromCart (state, action) {
            state.cartItems = removeCartItem(state.cartItems, action.payload);
        },
        clearItemFromCart (state, action) {
            state.cartItems = clearCartItem(state.cartItems, action.payload);
        },
        setIsCartOpen (state, action) {
            state.isCartOpen = action.payload;
        }

    }
})

export const {addItemToCart, removeItemFromCart, clearItemFromCart, setIsCartOpen} = cartSlice.actions;

export default cartReducer =  cartSlice.reducer;

// export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
//     const {type, payload} = action;

//     switch(type){
//         case CART_ACTION_TYPES.SET_CART_ITEMS:
//             return {
//                 ...state,
//                 cartItems : payload
                
//             }
//         case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//             return {
//                 ...state,
//                 isCartOpen : payload
            
//             }
    
//         default:
//             return state;
//     }
// }