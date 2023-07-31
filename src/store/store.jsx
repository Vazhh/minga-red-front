import { configureStore } from "@reduxjs/toolkit";
import mangaReducer from "./reducers/manga";
import authorsReducer from './reducers/me_authors'
import mangasnewsReducer from './reducers/mangas_news'

const store = configureStore({
    reducer:{
        //acá vamos a traernos los reductores de los diferentes recursos (usuarios, mangas capitulos...)
        manga: mangaReducer,
        meauthors: authorsReducer,
        mangasnews: mangasnewsReducer
    }
})

export default store