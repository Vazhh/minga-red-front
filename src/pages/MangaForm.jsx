import { useEffect, useState } from "react";
import axios from "axios";
import apiURL from "../apiUrl";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import Swal from "sweetalert2";

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
  const manga = async () => {
    try {
      let selectedCategory = categories.find(
        (each) => each.name === category.current.value
      );
      let data = {
        title: title.current.value,
        category_id: selectedCategory?._id,
        description: description.current.value,
        cover_photo: photo.current.value,
      };
      // setTimeout(() => navigate("/"), 2000);
      let token = localStorage.getItem("token");
      let headers = { headers: { Authorization: `Bearer ${token}` } };
      await axios.post(apiURL + "/mangas", data, headers).then(()=>{
        Swal.fire({
          "icon":"success",
          "text":"Manga created"
        })
        navigate("/")
      }
      )
    } catch (error) {
      //console.log(error)
        Swal.fire({
          "icon":"error",
          "html":error.response.data.messages.map(each=>`<p>${each}</p>`).join("")
        })
      
      
    }
  };
  const title = useRef();
  const category = useRef();
  const description = useRef();
  const photo = useRef();
  return (
    <main className="md:relative pt-[15%] pb-[20%] bg-[#EBEBEB] flex flex-col  items-center w-full h-screen">
      <form className="flex flex-col w-full items-center mt-[48px]">
        <input
          ref={title}
          type="text"
          placeholder="Insert title"
          className="border-b-2 bg-transparent border-gray-400 w-[50%] h-[48px] font-roboto font-medium text-[19px] ps-[14px]"
        />
        <select
          defaultValue="0"
          ref={category}
          name="Insert category"
          className="mt-[32px] border-b-2  bg-[#EBEBEB] border-gray-400 w-[50%] h-[48px] font-roboto font-medium text-[19px] ps-[10px] pr-[14px] text-[#9D9D9D]"
        >
          <option value="0">
            Insert category
          </option>
          {categories?.map((category, i) => (
            <option key={i} id={category?._id}>
              {category?.name}
            </option>
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
          className="hover:cursor-pointer mt-[58px] w-[50%] h-[68px] bg-[#4338CA] rounded-full font-roboto font-bold text-[24px] text-white"
        />
      </form>
    </main>
  );
}
