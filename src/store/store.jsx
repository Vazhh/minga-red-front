import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        //acá vamos a traernos los reductores de los diferentes recursos (usuarios, mangas capitulos...)
    }
})

export default store