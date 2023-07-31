import { createAction } from "@reduxjs/toolkit";

const saveMangasNews = createAction("saveMangasNews", (obj) => {
    return {
        payload: {
            mangas_news: obj.mangas_news,
        },
    };
});

const mangasNewsAction = {
    saveMangasNews,
};

export default mangasNewsAction;