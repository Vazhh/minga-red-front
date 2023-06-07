import React from "react";
import login from "/assets/vistaWeb/login.jpg";

export default function Display({ options, show, setShow }) {
  return (
    <div className="items-center w-full text-white md:w-[420px] p-2 rounded-xl absolute z-20 top-0 left-0 bg-indigo-700 flex flex-col h-full">
      <div className="w-[100%]">
        <div className="ps-[24px] pr-[29px] mt-[10%] flex justify-around">
          <div className="flex w-full">
            <img
              src={login}
              className="h-[46px] w-[46px] rounded-full"
              alt=""
            />
            <div className="flex flex-col ms-1">
              <p className="font-inter text-[15px]">
                Robinson Gerardo Aguirre Duque
              </p>
              <p className="font-inter text-[12px]">xerarduDev@gmail.com</p>
            </div>
          </div>
          <h1
            onClick={() => setShow(!show)}
            className="w-[14px] h-[14px] hover:cursor-pointer"
          >
            X
          </h1>
        </div>
        <div className="items-center ps-[24px] mt-5 pr-[24px]">
          <li className="rounded-[8px] p-2 list-none h-[48px] hover:bg-white hover:text-indigo-700 hover:font-bold">
            <a href="">Home</a>
          </li>
          <li className="rounded-[8px] p-2 list-none h-[48px] hover:bg-white hover:text-indigo-700 hover:font-bold">
            <a href="">Mangas</a>
          </li>
          <li className="rounded-[8px] p-2 list-none h-[48px] hover:bg-white hover:text-indigo-700 hover:font-bold">
            <a href="">My Mangas</a>
          </li>
          <li className="rounded-[8px] p-2 list-none h-[48px] hover:bg-white hover:text-indigo-700 hover:font-bold">
            <a href="">Favorites</a>
          </li>
          <li className="rounded-[8px] p-2 list-none h-[48px] hover:bg-white hover:text-indigo-700 hover:font-bold">
            <a href="">Logout</a>
          </li>
        </div>
      </div>
    </div>
  );
}
