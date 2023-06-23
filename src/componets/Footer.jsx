import footer from "/assets/vistaWeb/footermain.png";
import wave from "/assets/vistaWeb/wave.svg";
import logofooter from "/assets/vistaWeb/logofooter.svg";
import facebook from "/assets/vistaWeb/Facebook.svg";
import twitter from "/assets/vistaWeb/Twitter.svg";
import vimeo from "/assets/vistaWeb/Vimeo.svg";
import youtube from "/assets/vistaWeb/Youtube.svg";
import union from "/assets/vistaWeb/Union.svg";

export default function Footer() {
  return (
    <footer className="flex flex-col w-[100%] 2xl:-top-[252px]">
          <img src={footer} className="w-screen hidden  md:inline" alt="" />
          <img
            src={wave}
            alt=""
            className="absolute hidden md:inline mt-[10%]"
          />
          <div className="md:mt-[7%] flex flex-col items-center justify-around p-[1%] bg-white">
            <div className="p-1 w-full  md:flex-row flex-col md:justify-around flex items-center">
              <div className="flex p-2 md:p-0">
                <p className="md:text-2xl font-bold p-2 md:p-0 md:font-medium">
                  Home
                </p>
                <p className="md:ms-[50%] md:text-2xl font-bold p-2 md:p-0 md:font-medium">
                  Mangas
                </p>
              </div>

              <img
                src={logofooter}
                className="w-[40%] md:w-[20%] lg:w-[12%]"
                alt=""
              />

              <div className=" mt-[3%] md:mt-[0] flex flex-col w-[38%] lg:w-[15%] md:w-[20%] p-1">
                <div className="flex justify-between p-1">

                  <img src={facebook} alt="" />
                  <img src={twitter} alt="" />
                  <img src={vimeo} alt="" />
                  <img src={youtube} alt="" />
                </div>

                <a
                  href=""
                  className="bg-gradient-to-r from-indigo-700 to-indigo-500 mt-[6%] md:mt-[22px] md:text-xl md:h-[43px] text-white w-full flex justify-center items-center rounded-full"
                >
                  Donate <img src={union} className="ms-[5%]" alt="" />
                </a>
              </div>

            </div>
            <div className="bg-gradient-to-r from-indigo-700 to-indigo-500 hidden lg:inline-flex w-[85%] mb-[8%] h-[1px] mt-[3%] lg:w-[75%] justify-center items-center"></div>
          </div>
        </footer>
  )
}
