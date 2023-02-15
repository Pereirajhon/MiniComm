import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

interface Product {
    id: string,
    name: string,
    image: string,
    price: number
}

export const productApi = createApi({
    reducerPath: 'productApi' ,
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3333/'}),
    endpoints: (builder) => ({
        getAllProducts : builder.query<Product[],void>({
            query: () => 'products'
        }),
        postProductById : builder.mutation<Product, Product>({
            query: (id) => ({
                url: `products/${id}`,
                method: 'POST'
            })
        })

    })
})

export const {useGetAllProductsQuery, usePostProductByIdMutation} = productApi