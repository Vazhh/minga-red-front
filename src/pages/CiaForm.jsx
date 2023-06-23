import React from 'react'
import profilePhoto from "/assets/vistaWeb/profilePhoto.png";
import { useRef } from "react";


export default function CiaForm() {

    const name = useRef();
    const web_site = useRef();
    const profile_image = useRef();
    const description = useRef();

    const authorCreate = ()=>{
        console.log(name)
        console.log(web_site)
        console.log(profile_image)
        console.log(description)

        let data = {
          name: name.current.value,
          web_site: web_site.current.value,
          profile_image: profile_image.current.value.split(',')[0],
          description: description.current.value.split(',')[1],
        };console.log(data)
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
            ref={web_site}
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
          <input type="button" value="send" onClick={authorCreate} className="mt-[58px] w-[50%] h-[68px] bg-[#4338CA] rounded-full font-roboto font-bold text-[24px] text-white"/>
        </form>
      </main>
    </>
  )
}

