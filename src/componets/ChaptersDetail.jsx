import { useEffect, useState } from 'react';
import apiURL from '../apiUrl.js';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import iconComment from '/assets/vistaMobile/iconComment.png'
import { Link as Anchor } from 'react-router-dom';

export default function ChaptersDetails() {
    const { manga_id, page } = useParams()
    const [chapters, setChapters] = useState([])
    useEffect(
        () => {
            let token = localStorage.getItem("token");
            let headers = { headers: { Authorization: `Bearer ${token}` } };
            axios(apiURL + '/chapters?manga_id=' + manga_id + '&page=' + page, headers)
                
                .then(res => setChapters(res.data.response))
                .catch(error => console.log(error))
        }, []

    )
    console.log(chapters)
    return (
        <>
            {
                chapters?.map((each, index) => (
                    <div className='flex justify-center items-center mx-auto mt-8 w-[384px] justify-around '>
                        <img src={each?.cover_photo} alt="image-chapter" className='w-20' />
                        <div className=' flex  flex-col items-center'>
                            <h1>{each?.title}</h1>
                            <div className='flex'>
                                <img src={iconComment} alt="" />
                                <h2>169</h2>
                            </div>

                        </div>
                        <Anchor to={'/chapter/' + each.manga_id._id + '/' + page}  className="flex justify-center  items-center w-[100px] md:w-[150px] h-[60px] md:h-[68px] bg-[#4338CA] rounded-full font-roboto font-bold text-[24px] text-white cursor-pointer" >Read</Anchor>

                    </div>
                ))
            }
        </>
    )
}