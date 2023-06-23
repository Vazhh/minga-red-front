import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../apiUrl.js";
import left from "/assets/vistaWeb/left.svg";
import right from "/assets/vistaWeb/right.svg";

export default function Carousel() {
  const [categories, setCategories] = useState([]);
  useEffect(
    () => {
      axios(apiUrl + "/categories")
        .then((res) => {
          setCategories(res.data.response);
        })
        .catch((err) => console.log(err));
    },
    [] //si el array esta vacio el efecto se ejecuta por primera y unica vez cuando el componente se monta, si el array tienes alguna/s varible el efecto se va a ejecutar cada vez que se modifique el valor de esos parametros
  );
  const [counter, setCounter] = useState(0);
  const [mousedOver, setMousedOver] = useState(false);

  const next = () => {
    if (counter == categories.length-1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
      console.log(counter);
    }
  };
  const prev = () => {
    if (counter == 0) {
      setCounter(categories.length-1)
    }else{
      setCounter(counter - 1);
      console.log(counter);
    }
  };
  console.log(categories);
  // useEffect(() => {
  //   if (mousedOver) {
  //     const timer = setInterval(() => {
  //       setCounter((prevCount) => (prevCount + 1) % categories.length);
  //     }, 4000);
  //     return () => clearInterval(timer);
  //   } 
  // }, [mousedOver]);
  
  return (
    <div onMouseOver={() => setMousedOver(true)}
    onMouseOut={() => setMousedOver(false)} className="hidden md:inline-flex md:mt-[16.5%] lg:mt-[16.8%] xl:mt-[17%] 2xl:mt-[16.5%] xl:h-[380px] lg:h-[280px] md:h-[240px] bg-white w-full items-center justify-center">
      <div className="flex w-[90%] xl:h-[265px] lg:h-[195px] md:h-[167px] items-center justify-between rounded-md " style={{backgroundColor:categories[counter]?.hover}}>
        <img
          src={left}
          onClick={prev}
          className="ps-3 hover:cursor-pointer"
          alt=""
        />
        <div className="flex mb-[41px] md:mt-[1.5%] xl:mt-[0.085%] xl:mr-[50%] w-[100%]">
          <img
            src={categories[counter]?.character_photo}
            className="xl:w-[276px] xl:h-[306px] lg:w-[202px] lg:h-[225px] md:w-[174px] md:h-[193px]  "
            alt=""
          />
          <img
            src={categories[counter]?.cover_photo}
            className="xl:w-[180px] xl:h-[270px] lg:w-[131px] lg:h-[198px] md:w-[113px] md:h-[170px] xl:ms-[23%] lg:ms-[20%] md:ms-[10%]"
            alt=""
          />
        </div>

        <div className="text-white w-[95%] lg:w-[75%] md:w-[70%] h-[93px] flex flex-col justify-center xl:-ms-[29%] xl:mr-[11%] lg:mr-[11%] md:mr-[10%] md:ms-[4%]">
          <h1 className="font-bold md:text-[90%] lg:text-[100%] xl:text-2xl font-roboto" style={{color:categories[counter]?.color}}>
            {categories[counter]?.name.toUpperCase()}
          </h1>
          <p className="font-roboto md:text-[66%] lg:text-[80%] xl:text-sm" style={{color:categories[counter]?.color}}>
            {categories[counter]?.description}
          </p>
          {/* <p>{counter}</p> */}
        </div>
        <img
          src={right} 
          onClick={next}
          className="pr-3 hover:cursor-pointer"
          alt=""
        />
      </div>
    </div>
  );
}
