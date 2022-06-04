import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {Super} from "../../utilities/types";

export const search = createApi({
    reducerPath:"search",
    baseQuery: fetchBaseQuery({baseUrl:`${process.env.URI}${process.env.API_KEY}`}),
    endpoints: (builder)=>({
        getSearchResult: builder.query({
            query:(name)=>`search/${name}`
        })
    })
})

export const {useGetSearchResultQuery} = search