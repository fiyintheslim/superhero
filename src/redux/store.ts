import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./reducers/counter"
import word from "./reducers/word"

const store = configureStore({
    reducer:{
        counter: counterReducer,
        word
    }
})

export default store
export type Store = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch