import {configureStore, MiddlewareArray} from '@reduxjs/toolkit'
//import productSlice from './features/productSlice'
import { cartSlice } from './features/cartSlice'
import { productApi } from './features/productApi' 
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'



export const store = configureStore({
    reducer: { 
        cart : cartSlice.reducer,
        [productApi.reducerPath] : productApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)    

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
