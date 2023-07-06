import profilePhoto from "/assets/vistaWeb/profilePhoto.png";
import { useRef } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import apiURL from "../apiUrl";


export default function AuthorForm() {

  const authorCreate = async () => {
    try {
      let user = JSON.parse(localStorage.getItem("user"));
      let data = {
        user_id: user._id,
        name: name.current.value,
        last_name: last_name.current.value,
        city: location.current.value.split(',')[0],
        country: location.current.value.split(',')[1],
        date: date.current.value,
        photo: photo.current.value,
      }; console.log(data)

      let token = localStorage.getItem('token');
      let headers = { headers: { Authorization: `Bearer ${token}` } };
      await axios.post(apiURL + "/authors", data, headers).then(() => {
        Swal.fire({
          "icon": "success",
          "text": "Author created"
        })
      }
      )
    } catch (error) {
      console.log(error)
    }

  };

  const name = useRef();
  const last_name = useRef();
  const location = useRef();
  const date = useRef();
  const photo = useRef();
  return (
    <>
      <main className="md:relative  pb-[20%] bg-[#EBEBEB] flex flex-col  w-full h-screen">

        <div className="items-center flex flex-col  mt-24 ">
          <h1 className="font-roboto text-[36px] pb-4 ">New Author</h1>
          <img src={profilePhoto} alt="" />
        </div>

        <form className="flex flex-col w-full items-center mt-[28px]">
          <input
            type="text"
            ref={name}
            placeholder="Name"
            className=" border-b-2 bg-transparent border-gray-400 w-[50%] h-[48px] font-roboto font-medium text-[19px] ps-[14px]"
          />
          <input
            type="text"
            ref={last_name}
            placeholder="Last name"
            className="border-b-2 bg-transparent border-gray-400 w-[50%] h-[48px] font-roboto font-medium text-[19px] ps-[14px]"
          />
          <input
            type="text"
            ref={location}
            placeholder="City,Country"
            className="border-b-2 bg-transparent border-gray-400 w-[50%] h-[48px] font-roboto font-medium text-[19px] ps-[14px]"
          />
          <input
            type="date"
            ref={date}
            className="border-b-2 bg-transparent border-gray-400 w-[50%] h-[48px] font-roboto font-medium text-[19px] ps-[14px]"
          />
          <input
            type="text"
            ref={photo}
            placeholder="url profile image"
            className="border-b-2 bg-transparent border-gray-400 w-[50%] h-[48px] font-roboto font-medium text-[19px] ps-[14px]"
          />
          {/* faltaria el active:true segun el schema del back */}
          <input type="button" value="send" onClick={authorCreate} className="mt-[58px] w-[50%] h-[68px] bg-[#4338CA] rounded-full font-roboto font-bold text-[24px] text-white" />

        </form>
      </main>
    </>
  )
} 
