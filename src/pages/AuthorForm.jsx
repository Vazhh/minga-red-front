import profilePhoto from "/assets/vistaWeb/profilePhoto.png";
import { Link as Anchor, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

export default function AuthorForm() {

  const authorCreate = ()=>{
    console.log(name)
    console.log(last_name)
    console.log(city)
    console.log(country)
    console.log(date)
    console.log(photo)

    let data = {
      name: name.current.value,
      last_name: last_name.current.value,
      city: city.current.value,
      country: country.current.value,
      date: date.current.value,
      photo: photo.current.value,
    };
  };
  
  const name = useRef();
  const last_name = useRef();
  const city = useRef();
  const country = useRef();
 /*  const arrayCityPlace =place,split('city,country'); console.log(place) */
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
            ref={city,country}
            placeholder="City,Country"
            className="border-b-2 bg-transparent border-gray-400 w-[50%] h-[48px] font-roboto font-medium text-[19px] ps-[14px]"
          />
          <input
            type="date"
            ref={Date}
            value=""
            className="border-b-2 bg-transparent border-gray-400 w-[50%] h-[48px] font-roboto font-medium text-[19px] ps-[14px]"
          />
          <input
            type="text"
            ref={photo}
            placeholder="url profile image"
            className="border-b-2 bg-transparent border-gray-400 w-[50%] h-[48px] font-roboto font-medium text-[19px] ps-[14px]"
          />
{/* faltaria el active:true segun el schema del back */}
          <input type="button" value="send" onClick={authorCreate} className="mt-[58px] w-[50%] h-[68px] bg-[#4338CA] rounded-full font-roboto font-bold text-[24px] text-white"/>

        </form>



      </main>
    </>
  )
} 
