import profilePhoto from "/assets/vistaWeb/profilePhoto.png";
import { Link as Anchor, useNavigate } from "react-router-dom";
import { useRef } from "react";
export default function AuthorForm() {
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
            placeholder="Name"
            className=" border-b-2 bg-transparent border-gray-400 w-[50%] h-[48px] font-roboto font-medium text-[19px] ps-[14px]"
          />
          <input
            type="text"
            placeholder="Last name"
            className="border-b-2 bg-transparent border-gray-400 w-[50%] h-[48px] font-roboto font-medium text-[19px] ps-[14px]"
          />
          <input
            type="text"
            placeholder="City,Country"
            className="border-b-2 bg-transparent border-gray-400 w-[50%] h-[48px] font-roboto font-medium text-[19px] ps-[14px]"
          />
          <input
            type="date"
            value=""
            className="border-b-2 bg-transparent border-gray-400 w-[50%] h-[48px] font-roboto font-medium text-[19px] ps-[14px]"
          />
          <input
            type="text"
            placeholder="url profile image"
            className="border-b-2 bg-transparent border-gray-400 w-[50%] h-[48px] font-roboto font-medium text-[19px] ps-[14px]"
          />

          <Anchor to={"/register"} className="mt-[58px] pt-4 w-[50%] h-[68px] bg-[#4338CA] rounded-full font-roboto font-bold text-[24px] text-white text-center ">
            Sign up
          </Anchor>

        </form>



      </main>
    </>
  )
} 
