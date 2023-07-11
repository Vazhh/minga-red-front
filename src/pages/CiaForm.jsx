import React from 'react'
import profilePhoto from "/assets/vistaWeb/profilePhoto.png";
import { useNavigate } from 'react-router';
import { useRef } from "react";
import apiURL from "../apiUrl";
import axios from 'axios';
import Swal from "sweetalert2";


export default function CiaForm() {

    const navigate = useNavigate();
    const name = useRef();
    const website = useRef();
    const profile_image = useRef();
    const description = useRef();

    const ciaCreate = async () => {
      try {
        let data = {
          name: name.current.value,
          website: website.current.value,
          logo: profile_image.current.value,
          description: description.current.value
        };console.log(data)
        // setTimeout(() => navigate("/"), 2000);
        let token = localStorage.getItem("token");
        let headers = { headers: { Authorization: `Bearer ${token}` } };
        await axios.post(apiURL+"/companies", data, headers).then(()=> 
        {
          Swal.fire({
            "icon":"success",
            "text":"Manga created"
          })
          navigate("/")

        }
        )
      } catch (error) {
        //console.log(error)
          Swal.fire({
            "icon":"error",
            "html":error.response.data.messages.map(each=>`<p>${each}</p>`).join("")
          })
      }
    };

  return (
    <>
      <main className="md:relative  pb-[20%] bg-[#EBEBEB] flex flex-col  w-full h-screen">
        <div className="items-center flex flex-col  mt-24 ">
          <h1 className="font-roboto text-[36px] pb-4 ">New Company</h1>
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
            ref={website}
            placeholder="Web site"
            className="border-b-2 bg-transparent border-gray-400 w-[50%] h-[48px] font-roboto font-medium text-[19px] ps-[14px]"
          />
          <input
            type="text"
            ref={profile_image}
            placeholder="URL Profile image"
            className="border-b-2 bg-transparent border-gray-400 w-[50%] h-[48px] font-roboto font-medium text-[19px] ps-[14px]"
          />

            <input
            type="text"
            ref={description}
            placeholder="Description"
            className="border-b-2 bg-transparent border-gray-400 w-[50%] h-[48px] font-roboto font-medium text-[19px] ps-[14px]"
          />

{/* faltaria el active:true segun el schema del back */}
          <input type="button" value="send" onClick={ciaCreate} className="mt-[58px] w-[50%] h-[68px] bg-[#4338CA] rounded-full font-roboto font-bold text-[24px] text-white"/>
        </form>
      </main>
    </>
  )
}

