import profilePhoto from "/assets/vistaWeb/profilePhoto.png";
import { Link as Anchor, useNavigate } from "react-router-dom";
import { useRef } from "react";
export default function AuthorForm() {
    return (
        <>
          <main className="md:relative pt-[15%] pb-[20%] bg-[#EBEBEB] flex flex-col  items-center w-full h-screen">
            
              <div className=" bg-white flex flex-col md:w-[50vw] w-full pt-[15%] pb-[0] md:pb-[5%] items-center md:pt-[5%] lg:pt-[8%] xl:pt-[10%]">
                <h1>New Author</h1>
                <img src={profilePhoto} alt="" />

                <form className="flex flex-col w-full items-center mt-[59px] justify-around h-full">
                  <input
                    type="text"
                    placeholder="Name"
                    className=" border-b-2 border-gray-400 w-[50%] h-[48px]  font-roboto font-medium text-[12px] ps-[14px]"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="border-b-2 border-gray-400 w-[50%] h-[48px]  font-roboto font-medium text-[12px] ps-[14px]"
                  />
                  <input
                  
                    type="text"
                    placeholder="City,Country"
                    className="border-b-2 border-gray-400 w-[50%] h-[48px]  font-roboto font-medium text-[12px] ps-[14px]"
                  />
                  <input
                    type="date"
                    value=""
                    className="border-b-2 text-gray-400 border-gray-400 w-[50%] h-[48px]  font-roboto font-medium text-[12px] ps-[14px]"
                  />
                  <input
                    type="text"
                    placeholder="url profile image"
                    className="border-b-2 border-gray-400 w-[50%] h-[48px]  font-roboto font-medium text-[12px] ps-[14px]"
                  />
                  
                  <Anchor  to={"/register"} className="text-white bg-[#4338CA] rounded-lg ">
                    Sign up
                  </Anchor>
                
                </form>
                
             
            </div>
          </main>
        </>
    )
} 
