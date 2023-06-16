import { useEffect, useState } from "react"
import axios from "axios"
import apiURL from "../apiUrl"

export default function Mangaform() {
    const [categories, setCategories] = useState([]);
  useEffect(
    () => {
      axios(apiURL + '/categories')
        .then((res) => {
          setCategories(res.data.response);
        })
        .catch((err) => console.log(err));
    },
    [] //si el array esta vacio el efecto se ejecuta por primera y unica vez cuando el componente se monta, si el array tienes alguna/s varible el efecto se va a ejecutar cada vez que se modifique el valor de esos parametros
  );
  console.log(categories) 
  return (
    <main className="md:relative pt-[20%] pb-[20%] bg-[#EBEBEB] flex flex-col  items-center w-full">
        <form className="flex flex-col w-full items-center mt-[48px]">
            <input
              type="text"
              placeholder="Insert title"
              className="border-b-2 bg-transparent border-gray-400 w-[50%] h-[48px] font-roboto font-medium text-[19px] ps-[14px]"
            />
            <select
              name="Insert category"
              className="mt-[32px] border-b-2  bg-[#EBEBEB] border-gray-400 w-[50%] h-[48px] font-roboto font-medium text-[19px] ps-[10px] pr-[14px] text-[#9D9D9D]"
            >
                <option value="" selected>Insert category</option>
                {categories?.map((category,i)=><option key={i}>{category?.name}</option>)}
            </select>
            <input
              type="text"
              placeholder="Insert description"
              className="mt-[32px] border-b-2 bg-transparent border-gray-400 w-[50%] h-[48px] font-roboto font-medium text-[19px] ps-[14px]"
            />
            <input
              type="url"
              placeholder="Insert cover photo"
              className="mt-[32px] border-b-2 bg-transparent border-gray-400 w-[50%] h-[48px] font-roboto font-medium text-[19px] ps-[14px]"
            />
            <input
              type="button"
              value="Send"
              className="mt-[58px] w-[50%] h-[68px] bg-[#4338CA] rounded-full font-roboto font-bold text-[24px] text-white"
            />
          </form>  
    </main>
  )
}
