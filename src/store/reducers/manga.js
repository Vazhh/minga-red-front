import { createReducer } from "@reduxjs/toolkit";
import mangaAction from "../actions/manga";

const {saveManga}= mangaAction
const initialState= {
    text:'',
    // checks:[]
}
const mangaReducer = createReducer(
    initialState,
    builder=>builder.addCase(
        saveManga,
        (state,action)=>{
            const newState={
                ...state,
                text: action.payload.text,
            }
            return newState
        }
    )
)
export default mangaReducer