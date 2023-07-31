import left from "/assets/vistaWeb/ArrowIzq.svg";
import right from "/assets/vistaWeb/ArrowDer.svg";
import coment from "/assets/vistaWeb/coment.png"
import { useParams } from "react-router";
import axios from "axios";
import apiURL from "../apiUrl";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import chapterActions from "../store/actions/chapter";

export default function Page() {
  const { id, page } = useParams();
  let token = localStorage.getItem("token");
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  let [pages, setPages] = useState([]);
  let [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  let [nextChapter, setNextChapter] = useState("");
  let dispatch = useDispatch();
  const { saveData } = chapterActions;

  useEffect(
    () => {
      axios(apiURL + `/chapters/${id}`, headers)
        .then((res) => {
          console.log(res);
          setPages(res.data.response.pages);
          setNextChapter(res.data.next);
          dispatch(
            saveData({
              title: res.data.response.title,
              order: res.data.response.order,
            })
          );
        })
        .catch((err) => console.log(err));
    },
    [nextChapter] //si el array esta vacio el efecto se ejecuta por primera y unica vez cuando el componente se monta, si el array tienes alguna/s varible el efecto se va a ejecutar cada vez que se modifique el valor de esos parametros
  );

  const store = useSelector((store)=> store)
  console.log(store.chapter)

  const next = () => {
    if (currentPage !== pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(0);
      navigate("/chapter/" + nextChapter + "/1");
    }
  };

  console.log(currentPage);
  console.log(nextChapter);
  const prev = () =>
    currentPage !== 0
      ? setCurrentPage(currentPage - 1)
      : setCurrentPage(pages.length - 1);

  return (
    <main className="flex flex-col items-center justify-center w-full">
      <div className="w-full bg-indigo-700 flex justify-center items-center h-[8.5vh] sm:h-[8vh] md:h-[9vh] lg:h-[9vh] 2xl:h-[12vh]">
        <p>Capitulo No: {store.chapter.order} </p> - <p> {store.chapter.title}</p>
      </div>

      <div className="mt-5 mb-5 relative flex w-full h-full items-center justify-center">
        <img src={pages[currentPage]} alt="" className="w-full md:w-[40%]" />
        <div className="absolute flex justify-between h-full w-full md:w-[40%]">
          <div
            onClick={prev}
            className="w-[50vw] hover:cursor-pointer flex justify-start"
          >
            <img src={left} className="ps-5  w-[10%] " alt="" />
          </div>
          <div
            onClick={next}
            className="w-[50vw] hover:cursor-pointer flex justify-end"
          >
            <img src={right} className="pr-5 w-[10%]" alt="" />
          </div>
        </div>
      </div>
      <p className="flex justify-center mb-5"><img src={coment} alt="" className="w-[5%]"/> 42</p>
    </main>
  );
}
