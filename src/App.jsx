import { useState } from "react";
import backgroundHome from "./assets/vistaMobile/fondo.png";
import menu from "./assets/vistaWeb/Menu.svg";
import logo from "./assets/vistaWeb/Logo.svg";
import footer1 from "./assets/vistaWeb/footer1.png";
import footer2 from "./assets/vistaWeb/footer2.png";
import left from "./assets/vistaWeb/left.svg";
import right from "./assets/vistaWeb/right.svg";
import star from "./assets/vistaWeb/star.png";
import footer from "./assets/vistaWeb/footermain.png";
import wave from "./assets/vistaWeb/wave.svg";
import logofooter from "./assets/vistaWeb/logofooter.svg";
import facebook from "./assets/vistaWeb/Facebook.svg"
import twitter from "./assets/vistaWeb/Twitter.svg"
import vimeo from "./assets/vistaWeb/Vimeo.svg"
import youtube from "./assets/vistaWeb/Youtube.svg"
import union from "./assets/vistaWeb/Union.svg"

function App() {
  return (
    <>
      <div className="flex flex-col relative items-center">
        <img src={backgroundHome} alt="" className="w-screen" />
        <nav className="flex justify-between w-full absolute ps-3  pr-5 sm:mt-3 sm:ps-3 sm:pr-5 2xl:mt-8 2xl:ps-11 2xl:pr-11">
          <img src={menu} className="w-14" alt="" />
          <img src={logo} className="w-14  left-3 sm:w-14  2xl:w-24  " alt="" />
        </nav>

        <main className="absolute w-full">
          <div className="flex flex-col ms-5 mr-5 lg:mt-[30%]  mt-[60%] items-center">
            <h1 className="text-white flex font-roboto font-bold sm:text-4xl 2xl:text-5xl text-center">
              Your favorite comic book store{" "}
              <img className="hidden lg:inline w-8 h-8" src={star} alt="" />
            </h1>
            <p className="text-center ps-1 pr-1 mt-6 text-white font-roboto text-xs lg:hidden">
              From classics to novelties, we have everything you need to immerse
              yourself in your favorite universes. Explore our catalog and live
              the adventure of your life.
            </p>
            <p className="text-center hidden lg:inline ps-1 pr-1 mt-6 text-white font-roboto text-base">
              Explore our catalog to live the adventure of your life.
            </p>
            <a
              href=""
              className="mt-6 text-white lg:hidden bg-purple w-60 sm:w-80 h-16 flex flex-col justify-center text-center rounded-full text-2xl font-bold"
            >
              Started
            </a>
            <a
              href=""
              className="mt-6 hidden lg:inline-flex text-white bg-purple w-80 h-16 flex-col justify-center text-center rounded-md text-2xl font-bold"
            >
              Let's go!
            </a>
          </div>

          {/* vista web */}
          <div className="hidden lg:inline-flex lg:mt-[19%] h-[380px] bg-white w-full items-center justify-center">
            <div className="bg-purple flex w-[90%] h-[265px] items-center justify-between rounded-md">
              <img src={left} className="ps-3" alt="" />
              <div className="flex mb-12 mr-8">
                <img
                  src={footer1}
                  className="w-[276px] h-[306px] mr-16"
                  alt=""
                />
                <img src={footer2} className="w-[180px] h-[270px]" alt="" />
              </div>

              <div className="text-white w-[25%] h-[93px] flex flex-col justify-center">
                <h1 className="font-bold text-2xl font-roboto">Shonen:</h1>
                <p className="font-roboto text-sm">
                  Is the manga that is aimed at adolescent boys. They are series
                  with large amounts of action, in which humorous situations
                  often occur. The camaraderie between members of a collective
                  or a combat team stands out.
                </p>
              </div>
              <img src={right} className="pr-3" alt="" />
            </div>
          </div>
        </main>

        <footer className="flex flex-col relative w-[100%] border-midnight border-[1px]">
          <img src={footer} className="w-screen hidden  lg:inline" alt="" />
          <img src={wave} alt="" className="absolute hidden lg:inline mt-[10%]" />
          <div className="lg:mt-[7%] flex flex-col items-center justify-around p-[3%]">
            <div className=" w-full  md:flex-row flex-col md:justify-around flex items-center">
              <div className="flex p-3 md:p-0">
                <p className="lg:text-2xl font-bold p-2 md:p-0 md:font-medium">Home</p>
                <p className="md:ms-[50%] lg:text-2xl font-bold p-2 md:p-0 md:font-medium">Mangas</p>
              </div>

              <img src={logofooter} className="w-[40%] md:w-[20%] lg:w-[12%]" alt="" />

              <div className=" mt-[3%] md:mt-[0] flex flex-col w-[60%] md:w-[20%] lg:w-[15%]">
                <div className="flex justify-between">
                  <img src={facebook} alt="" />
                  <img src={twitter} alt="" />
                  <img src={vimeo} alt="" />
                  <img src={youtube} alt="" />
                </div>
                
                  <a href="" className="bg-purple mt-[6px] md:mt-[22px] md:text-xl md:h-[43px] text-white w-full flex justify-center items-center rounded-full">Donate <img src={union} className="ms-[5%]" alt="" /></a>
                
              </div>
              
            </div>
            <div className="bg-midnight hidden lg:inline-flex w-[85%] mb-[8%] h-[1px] mt-[3%] lg:w-[75%] justify-center items-center"></div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
