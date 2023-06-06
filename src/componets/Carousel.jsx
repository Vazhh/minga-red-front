import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../apiUrl.js";
import left from "/assets/vistaWeb/left.svg";
import right from "/assets/vistaWeb/right.svg";

export default function Carousel() {
  const [categories, setCategories] = useState([])
  useEffect(
    () => {
      axios(apiUrl+'/categories')
        .then((res) => {setCategories(res.data.response)})
        .catch((err) => console.log(err));
    },
    [] //si el array esta vacio el efecto se ejecuta por primera y unica vez cuando el componente se monta, si el array tienes alguna/s varible el efecto se va a ejecutar cada vez que se modifique el valor de esos parametros
  )
  const [counter, setCounter] = useState(0);
  const next = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  const prev = () => {
    setCounter(counter - 1);
    console.log(counter);
  };
  console.log(categories);
  return (
    <div className="hidden lg:inline-flex lg:mt-[19%] h-[380px] bg-white w-full items-center justify-center">
      <div className="bg-gradient-to-r from-indigo-700 to-indigo-500 flex w-[90%] h-[265px] items-center justify-between rounded-md">
        <img src={left} onClick={prev} className="ps-3" alt="" />
        <div className="flex mb-12 mr-8">
          <img
            src={categories[counter]?.character_photo}
            className="w-[276px] h-[306px] mr-16"
            alt=""
          />
          <img src={categories[counter]?.cover_photo} className="w-[180px] h-[270px]" alt="" />
        </div>

        <div className="text-white w-[25%] h-[93px] flex flex-col justify-center">
          <h1 className="font-bold text-2xl font-roboto">{categories[counter]?.name.toUpperCase()}</h1>
          <p className="font-roboto text-sm">{categories[counter]?.description}</p>
          <p>{counter}</p>
        </div>
        <img src={right} onClick={next} className="pr-3" alt="" />
      </div>
    </div>
  );
}
