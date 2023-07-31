import { createAction } from "@reduxjs/toolkit";

const saveData = createAction(
    "saveData",
    (obj) => {
        return {
            payload:{
                order:obj.order,
                title:obj.title
            }
        }
    }
)

const chapterActions = {
    saveData
}

export default chapterActions