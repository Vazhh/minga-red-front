import star from "/assets/vistaWeb/star.png";
import { Link as Anchor } from "react-router-dom";

export default function TextBodyMain({ changeView, setChangeView }) {
  return (
    <div className="flex flex-col ms-5 mr-5 md:mt-[14.9%] mt-[60%] items-center">
      <h1 className="text-white flex font-roboto font-bold sm:text-4xl md:text-[32px] lg:text-[42px] xl:text-[50px] 2xl:text-[65px] text-center">
        Your favorite comic book store{" "}
        <img className="hidden md:inline w-8 h-8" src={star} alt="" />
      </h1>
      <p className="text-center ps-1 pr-1 mt-6 text-white font-roboto md:text-xl text-xs md:hidden">
        From classics to novelties, we have everything you need to immerse
        yourself in your favorite universes. Explore our catalog and live the
        adventure of your life.
      </p>
      <p className="text-center hidden md:inline ps-1 pr-1 md:mt-[0.9%] lg:mt-[1.4%] xl:mt-[1.5%] 2xl:mt-[2%] text-white font-roboto md:text-[15px] lg:text-[20px] xl:text-[23px] 2xl:text-[30px] md:w-[35%] lg:w-[38%] xl:w-[35%] 2xl:w-[34.8%]">
        Explore our catalog to live the adventure of your life.
      </p>
      <Anchor
        to={'/'}
        className="mt-6 text-white md:hidden bg-gradient-to-r from-indigo-700 to-indigo-500 w-[30%] h-[30px] sm:w-80 sm:h-16 flex flex-col justify-center items-center rounded-full text-1xl sm:text-2xl font-bold"
      >
        Started
      </Anchor>
      <Anchor to={'/signin'}
        className="md:w-[17%] lg:w-[17.5%] xl:w-[17%] h-[100%] md:h-[35px] xl:h-[50px] md:mt-[1%] hidden md:inline-flex text-white bg-gradient-to-r from-indigo-700 to-indigo-500 w-80 lg:h-[40px] 2xl:h-[67px] flex-col justify-center items-center rounded-md md:text-[100%] lg:text-[144%] xl:text-[160%] 2xl:text-[210%] font-bold"
      >
        Let's go!
      </Anchor>
    </div>
  );
}
