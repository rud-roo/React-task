import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rootApi = createApi({
  reducerPath: "rootApi",
  baseQuery: fetchBaseQuery({baseUrl: `http://localhost:3000/`}),
  tagTypes: ["products", "notes"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `products`,
      providesTags: ["products"],
    }),

    createProducts: builder.mutation({
      query: (product) => ({
        url: `products`,
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["products"],
    }),

    removeProducts: builder.mutation({
      query: (productId) => ({
        url: `products/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    })
  })
})

export const {
  useGetAllProductsQuery,
  useCreateProductsMutation,
  useRemoveProductsMutation
} = rootApi;