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
  useEffect(() => {
    if (mousedOver) {
      const timer = setInterval(() => {
        setCounter((prevCount) => (prevCount + 1) % categories.length);
      }, 4000);
      return () => clearInterval(timer);
    } 
  }, [mousedOver]);
  
  return (
    <div onMouseOver={() => setMousedOver(true)}
    onMouseOut={() => setMousedOver(false)} className="hidden md:inline-flex md:mt-[19%] h-[380px] bg-white w-full items-center justify-center">
      <div className="flex w-[90%] h-[265px] items-center justify-between rounded-md " style={{backgroundColor:categories[counter]?.hover}}>
        <img
          src={left}
          onClick={prev}
          className="ps-3 hover:cursor-pointer"
          alt=""
        />
        <div className="flex mb-[41px] mr-[12%]">
          <img
            src={categories[counter]?.character_photo}
            className="w-[276px] h-[306px] "
            alt=""
          />
          <img
            src={categories[counter]?.cover_photo}
            className="w-[180px] h-[270px]"
            alt=""
          />
        </div>

        <div className="text-white w-[25%] h-[93px] flex flex-col justify-center">
          <h1 className="font-bold text-2xl font-roboto" style={{color:categories[counter]?.color}}>
            {categories[counter]?.name.toUpperCase()}
          </h1>
          <p className="font-roboto text-sm" style={{color:categories[counter]?.color}}>
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
