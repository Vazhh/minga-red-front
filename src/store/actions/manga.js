import { createAction } from "@reduxjs/toolkit";

const saveManga= createAction('saveManga', (obj)=>{
    return {
        payload:{
            text: obj.title
            // checks:[]
        }
     }
 })
 const mangaAction= {
    saveManga
 } 
 export default mangaAction