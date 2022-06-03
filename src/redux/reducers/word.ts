import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    wrd:""
}
interface State {
    wrd:string
}
const wordSlice = createSlice({
    name:"worrrd",
    initialState,
    reducers:{
        change: (state:State)=>{
            
        }
    }
})

export default wordSlice.reducer;
