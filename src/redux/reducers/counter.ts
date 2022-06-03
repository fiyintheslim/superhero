import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    count:0
}
interface State {
    count:number
}

const counterReducer = createSlice({
    name:"counterReducer",
    initialState,
    reducers:{
        increment: (state:State)=>{
            state.count += 1
        },
        decrement: (state:State)=>{
            state.count -=1
        },
        incrementByAmount:(state:State, action)=>{
            state.count += action.payload
        }
    }
})

export default counterReducer.reducer;
export const {increment, decrement, incrementByAmount} = counterReducer.actions