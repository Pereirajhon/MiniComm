import {createSlice} from '@reduxjs/toolkit'
import {RootState} from '../store/store'

interface Initial {
    product : number
}

const initialState = {
    product: 0,
} as Initial

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        increment: (state) => {
            state.product += 1
        },
        decrement: (state) => {
            state.product -= 1
        }
    }
})

export const {increment, decrement} = productSlice.actions

export const selectProduct = (state: RootState) => state.product

export default productSlice.reducer 