import { configureStore } from "@reduxjs/toolkit";
import mangaReducer from "./reducers/manga";
import chapterReducer from "./reducers/chapter";
import reducer from "./reducers/me_authors";
import mangasnewsReducer from './reducers/mangas_news'

const store = configureStore({
    reducer:{
        //acá vamos a traernos los reductores de los diferentes recursos (usuarios, mangas capitulos...)
        chapter: chapterReducer,
        manga: mangaReducer,
        authors: reducer,
        mangasnews: mangasnewsReducer
    }
})

export default store