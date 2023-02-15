import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Items {
    id: string,
    name: string,
    image: string,
    price: number,
    quantity: number
}

interface CartItems {
    cart : Items[],
    totalPriceItem : number,
    cartTotalAmount: number
}

const initialState: CartItems = {
    cart: localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : [] ,
    totalPriceItem: 0,
    cartTotalAmount: 0


} 

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, {payload}) => {

            const existItem = state.cart.findIndex((item) => item.id === payload.id )
            
            if(existItem >= 0 ){
                                
                state.cart[existItem] = {
                    ...state.cart[existItem], quantity: state.cart[existItem].quantity + 1
                }
                
                console.log(state.cart[existItem])
            }else {
                
                const cartItem = {...payload, quantity : 1 }
                state.cart = [...state.cart, cartItem]
                
            }
            console.log(state.cart)


            localStorage.setItem("cartItems", JSON.stringify(state.cart))
            
        },

        decrement: (state,{payload}) => {

            const findIdx = state.cart.findIndex((item) => item.id === payload.id)
            
            if(state.cart[findIdx].quantity > 1 ){
                
                state.cart[findIdx].quantity -= 1
                

                console.log(state.cart[findIdx])
                localStorage.setItem("cartItems", JSON.stringify(state.cart))  
              
            }
            return state;        
            
        },

        removeItemInCart: (state, {payload}) => {
            const findItem = state.cart.find(item => item.id === payload.id)
            const fillCart = state.cart.filter(item => item.id !== findItem.id)
            state.cart = fillCart
            console.log(state.cart)
            localStorage.setItem('cartItems', JSON.stringify(state.cart)) 

        },
        getTotals: (state) => {

           let totals = state.cart.reduce((acc, item) => {
            const {price, quantity} = item

            const priceItem = quantity * price 

            acc.total += priceItem
            acc.quantityItem += item.quantity

            return acc;
           }, {
           total: 0,
           quantityItem: 0
           })

           state.cartTotalAmount = totals.total
           console.log(state.cartTotalAmount)


        }    
    }
})
export const selectProduct = (state: RootState) => state.cart

export default cartSlice.reducer

export const {addToCart, decrement, removeItemInCart, getTotals} = cartSlice.actions