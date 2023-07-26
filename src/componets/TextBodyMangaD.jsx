import naruto from '/assets/vistaMobile/naruto.png';
import good from '/assets/vistaMobile/good.png';
import bad from '/assets/vistaMobile/bad.png';
import wow from '/assets/vistaMobile/wow.png';
import love from '/assets/vistaMobile/love.png'
import line from '/assets/vistaMobile/Line.png'
import { useEffect, useState } from 'react';
import apiURL from '../apiUrl';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import mangaAction from '../store/actions/manga';
const {saveManga}=mangaAction


export default function MangaDetail() {
    //const [manga,setManga]= useState({}) //estos estados son locales, se remplazarán por globales para optimiar el rendimeinto de la app
    const dispatch=useDispatch()
    //const store= useSelector(store=>store)
    //const manga= store.manga.manga
    //console.log(store)
    const manga=useSelector(store=>store.manga.manga)
    console.log(manga)
    useEffect(
        () => {
            let token = localStorage.getItem("token");
            let headers = { headers: { Authorization: `Bearer ${token}` } };
            axios(apiURL + '/mangas/' + manga_id, headers)
                //.then(res => setManga(res.data.response))
                .then(res=>dispatch(saveManga({manga:res.data.response})))
                .catch(error => console.log(error))
        }, []
    )
    const { manga_id, page } = useParams()
    return (
        <main className="  pb-[20%] bg-[#EBEBEB] p-4 flex flex-col  w-screen h-full" >
            <img className='px- flex items-center mx-auto mt-20 w-[90%] h-[352px] sm:w-[500px] md:w-[700px] object-contain ' src={manga.cover_photo} alt="" />
            <h1 className='px-4 sm:px-[14%] pt-4 text-black font-poppins font-light	text-[40px] tracking-wide leading-[95.187%] '>{manga.title}</h1>
            <div className='flex justify-between items-center sm:px-[10%] w-[90%] font-poppins md:m-2  px-4 py-2'>
                <div className='text-xs  rounded-2xl h-[37px] w-[70px] justify-center flex items-center  font-poppins' style={ {backgroundColor:manga.category_id?.hover, color:manga.category_id?.color } } >{manga?.category_id?.name}</div>
                <h2 className='text-xl tracking-wider text-[#9D9D9D] '>{manga.author_id?.name.toUpperCase()}</h2>
            </div>
            <div className='flex  justify-between items-center  w-[300px] sm:w-[400px] mx-auto my-8'>
                <img src={good} alt="" />
                <img src={bad} alt="" />
                <img src={wow} alt="" />
                <img src={love} alt="" />
            </div>
            <div className='flex bg-white px-2 w-[369px] h[80px] rounded-2xl justify-around  items-center mx-auto font-poppins'>
                <div className='flex flex-col p-4 items-center'>
                    <h2 className='text-2xl text[#424242] '>4.5/5</h2>
                    <h4 className='text-xs text[#9D9D9D] font-light'>Rating</h4>
                </div>
                <img src={line} alt="line" />
                <div className='flex flex-col p-4 items-center'>
                    <h2 className='text-2xl text[#424242] '>265</h2>
                    <h4 className='text-xs text[#9D9D9D] font-light'>chapters</h4>
                </div>
                <img src={line} alt="line" />
                <div className='flex flex-col items-center'>
                    <h2 className='text-2xl text[#424242] '>Eng</h2>
                    <h4 className='text-xs text[#9D9D9D] font-light'>Leanguage</h4>
                </div>

            </div>
            <div className='flex justify-between items-center mt-10 mx-auto w-[390px] h-[45px]  border-2 rounded-2xl shadow-[0px_0px_7px_0px_rgba(0,0,0,0.15)] '>
                <input type="button" value="Manga" className='flex items-center justify-center bg-gradient-to-r from-indigo-700 to-indigo-500 w-[50%] h-full rounded-2xl text-white ' />
                < input type="button" value="Chapter" div className='flex items-center justify-center bg-#9D9D9D w-[50%] h-full rounded-2xl text-[#9D9D9D] ' />
            </div>
            



        </main>
    );

}