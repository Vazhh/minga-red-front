import { useEffect, useState } from "react";
import axios from "axios";
import apiURL from "../apiUrl";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Mangaform() {
  const [categories, setCategories] = useState([]);
  useEffect(
    () => {
      axios(apiURL + "/categories")
        .then((res) => {
          setCategories(res.data.response);
        })
        .catch((err) => console.log(err));
    },
    [] //si el array esta vacio el efecto se ejecuta por primera y unica vez cuando el componente se monta, si el array tienes alguna/s varible el efecto se va a ejecutar cada vez que se modifique el valor de esos parametros
  );
  console.log(categories);
  const navigate = useNavigate();
  const manga = () => {
    console.log(title);
    console.log(category);
    console.log(description);
    console.log(photo);
    let data = {
      title: title.current.value,
      category_id: category.current.value,
      description: description.current.value,
      cover_photo: photo.current.value,
    };
    setTimeout(() => navigate("/"), 2000);
    console.log(data)
  };
  const title = useRef();
  const category = useRef();
  const description = useRef();
  const photo = useRef();
  return (
    <main className="md:relative pt-[20%] pb-[20%] bg-[#EBEBEB] flex flex-col  items-center w-full">
      <form className="flex flex-col w-full items-center mt-[48px]">
        <input
          ref={title}
          type="text"
          placeholder="Insert title"
          className="border-b-2 bg-transparent border-gray-400 w-[50%] h-[48px] font-roboto font-medium text-[19px] ps-[14px]"
        />
        <select
          ref={category}
          name="Insert category"
          className="mt-[32px] border-b-2  bg-[#EBEBEB] border-gray-400 w-[50%] h-[48px] font-roboto font-medium text-[19px] ps-[10px] pr-[14px] text-[#9D9D9D]"
        >
          <option value="" selected>
            Insert category
          </option>
          {categories?.map((category, i) => (
            <option key={i}>{category?.name}</option>
          ))}
        </select>
        <input
          ref={description}
          type="text"
          placeholder="Insert description"
          className="mt-[32px] border-b-2 bg-transparent border-gray-400 w-[50%] h-[48px] font-roboto font-medium text-[19px] ps-[14px]"
        />
        <input
          ref={photo}
          type="url"
          placeholder="Insert cover photo"
          className="mt-[32px] border-b-2 bg-transparent border-gray-400 w-[50%] h-[48px] font-roboto font-medium text-[19px] ps-[14px]"
        />
        <input
          onClick={manga}
          type="button"
          value="Send"
          className="mt-[58px] w-[50%] h-[68px] bg-[#4338CA] rounded-full font-roboto font-bold text-[24px] text-white"
        />
      </form>
    </main>
  );
}