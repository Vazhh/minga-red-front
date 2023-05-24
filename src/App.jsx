import { useState } from "react";
import backgroundHome from "./assets/vistaMobile/fondo.png";
import menu from "./assets/vistaWeb/Menu.svg";
import logo from "./assets/vistaWeb/Logo.svg";
import footer1 from "./assets/vistaWeb/footer1.png";
import footer2 from "./assets/vistaWeb/footer2.png";
import left from "./assets/vistaWeb/left.svg";
import right from "./assets/vistaWeb/right.svg";
import star from "./assets/vistaWeb/star.png";

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
            <div className="bg-purple flex  w-[90%] h-[265px] relative items-center justify-between rounded-md">
              <img src={left} className="ps-3" alt="" />

              <img src={footer1} className="w-[276px] h-[306px] mb-12" alt="" />
              <img src={footer2} className="w-[180px] h-[270px] mb-12" alt="" />

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

        <footer>
          <img src="" alt="" />
        </footer>
      </div>
    </>
  );
}

export default App;
