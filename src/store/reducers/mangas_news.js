import { createReducer } from "@reduxjs/toolkit";
import mangasNewsAction from '../actions/mangas_news'

const { saveMangasNews } = mangasNewsAction;

const initialState = {
    mangas_news: [],
  };

const mangasnewsReducer = createReducer(
    initialState,
    (builder) => builder.addCase(
        saveMangasNews,
      (state, action) => {
        const newState = {
          ...state,
          mangas_news: action.payload.mangas_news,
        };
        return newState;
      }
    )
  );
  
  export default mangasnewsReducer;