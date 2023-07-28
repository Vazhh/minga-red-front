
import ChaptersDetails from '../componets/ChaptersDetail';
import MangaDetails from '../componets/MangasDetails.jsx';

import { useEffect, useState } from 'react';
import apiURL from '../apiUrl.js';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import mangaAction from '../store/actions/manga';
import TitleManga from '../componets/TitleManga';
import TitleChapter from '../componets/TitleChapter';
const { saveManga } = mangaAction

export default function MangaDetail() {
    //const [manga,setManga]= useState({}) //estos estados son locales, se remplazarán por globales para optimiar el rendimeinto de la app
    const dispatch = useDispatch()
    //const store= useSelector(store=>store)
    //const manga= store.manga.manga
    //console.log(store)
    const manga = useSelector(store => store.manga.manga)
    const { manga_id, page } = useParams()
    
    useEffect(
        () => {
            //if (!manga) { //este conicional funciona pero cuando cambie de manga no se volverá a refetchear el nuevo manga 
            if (manga._id !== manga_id) {

                let token = localStorage.getItem("token");
                let headers = { headers: { Authorization: `Bearer ${token}` } };
                axios(apiURL + '/mangas/' + manga_id, headers)
                    //.then(res => setManga(res.data.response))
                    .then(res => dispatch(saveManga({ manga: res.data.response })))
                    .catch(error => console.log(error))
            }

        }, []
    )
   
    
    const [show, setShow] = useState(true)
    const [title, setTitle] = useState(true)
    const [mangaStyle, setMangaStyle] = useState({ backgroundColor: "#4338CA", color: "white" });
    const [chapterStyle, setChapterStyle] = useState({ backgroundColor: "#EBEBEB", color: "#9D9D9D" });
    useEffect(() => {
        if (show) {
            setMangaStyle({ backgroundColor: "#4338CA", color: "white" })
            setChapterStyle({ backgroundColor: "#EBEBEB", color: "#9D9D9D" })
        } else {
            setMangaStyle({ backgroundColor: "#EBEBEB", color: "#9D9D9D" })
            setChapterStyle({ backgroundColor: "#4338CA", color: "white" })
        }
    }, [show])
    return (
        <main className="  pb-[10%] bg-[#EBEBEB] p-4 flex flex-col  w-screen h-full" >
            <main className="   bg-[#EBEBEB] p-4 flex flex-col  w-screen h-full" >
                <img className='px- flex items-center mx-auto mt-20  h-[400px] w-[400px]   ' src={manga.cover_photo} alt="imagen" />

                {title ? <TitleManga /> : <TitleChapter />}
                <div className='flex justify-between items-center mt-10 mx-auto w-[390px] h-[45px]  border-2 rounded-2xl shadow-[0px_0px_7px_0px_rgba(0,0,0,0.15)] '>

                    <input type="button" value="Manga" onClick={() => { setShow(!show), setTitle(!title) }} className='flex items-center justify-center  w-[50%] h-full rounded-2xl text-[#9D9D9D] ' style={{ backgroundColor: mangaStyle.backgroundColor, color: mangaStyle.color }} />
                    < input type="button" value="Chapter" onClick={() => { setShow(!show), setTitle(!title) }}  className='flex items-center justify-center bg-#9D9D9D w-[50%] h-full rounded-2xl text-[#9D9D9D] ' style={{ backgroundColor: chapterStyle.backgroundColor, color: chapterStyle.color }} />
                </div>

                {show ? <MangaDetails /> : <ChaptersDetails />}



            </main>



        </main>

    )
}