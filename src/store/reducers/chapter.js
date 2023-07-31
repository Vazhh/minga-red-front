import { createReducer } from "@reduxjs/toolkit";
import chapterActions from "../actions/chapter";

const {saveData} = chapterActions
const initialState = {
    title:"",
    order:0
}

const chapterReducer = createReducer(
    initialState,
    (builder) => builder.addCase(
        saveData,
        (state, action)=>{
            const newState={
                ...state,
                title: action.payload.title,
                order:action.payload.order
            }
            return newState
        }
    )
)

export default chapterReducer