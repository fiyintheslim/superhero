import {configureStore} from "@reduxjs/toolkit"
import {setupListeners} from "@reduxjs/toolkit/query"
import counterReducer from "./reducers/counter"
import {search} from "./datafetching/search"
import word from "./reducers/word"

const store = configureStore({
    reducer:{
        counter: counterReducer,
        [search.reducerPath]:search.reducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(search.middleware) 
    }
})

setupListeners(store.dispatch)

export default store
export type Store = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch