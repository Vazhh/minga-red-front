import { useNavigate,useParams } from "react-router-dom"
import { useRef } from "react";
import axios from "axios"
import apiURL from '../apiUrl'
import Swal from "sweetalert2"
import Button from "../componets/Button";

export default function ChapterForm() {

    const title = useRef();
    const order = useRef();
    const pages = useRef();
    const navigate = useNavigate()
    const { manga_id } = useParams()

    const chapterCreate = async () => {
      // try {
        let data = {
          title: title.current.value,
          order: order.current.value?.trim(),
          pages: pages.current.value.split(','),
          manga_id
        };
        
        let token = localStorage.getItem('token');
        let headers = { headers: { Authorization: `Bearer ${token}` } };
        await axios.post(apiURL+'/chapters',data,headers)
        .then(()=>Swal.fire({
            icon: 'success',
            text: 'chapter added!'
            }))
        .then(()=>navigate('/'))
        .catch(err=> {console.log(err.response)
            Swal.fire({
            icon: 'error',
            html: err.response.data?.messages?.map(each=>`<p>${each}</p>`).join('')
        })})

    };
    
  return (
    <>
    <main className="md:relative pb-[20%] bg-[#EBEBEB] flex flex-col  items-center w-full h-screen">
              <div className="items-center flex flex-col  mt-24 ">
          <h1 className="font-roboto text-[36px] pb-4 ">New chapter</h1>
        </div>   
        
        <form className="flex flex-col w-full items-center mt-[48px]">
          <input
            type="text"
            ref={title}
            placeholder="Insert title"
            className="mt-[32px] border-b-2 bg-transparent border-gray-400 w-[50%] h-[48px] font-roboto font-medium text-[19px] ps-[14px]"
          />
          <input
            type="number"
            ref={order}
            placeholder="Insert order"
            className="mt-[32px] border-b-2 bg-transparent border-gray-400 w-[50%] h-[48px] font-roboto font-medium text-[19px] ps-[14px]"
          />
          <input
            type="text"
            ref={pages}
            placeholder="Insert pages"
            className="mt-[32px] border-b-2 bg-transparent border-gray-400 w-[50%] h-[48px] font-roboto font-medium text-[19px] ps-[14px]"
          />
{/* faltaria el active:true segun el schema del back */}
          <Button onClick={chapterCreate} value='Send' />
        </form>
      </main>
    </>    
  )
}