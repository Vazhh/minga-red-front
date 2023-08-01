import { useEffect } from "react"
import axios from "axios";
import apiURL from "../apiUrl";
import CardManga from "../componets/CardManga";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import mangaAction from "../store/actions/manga";

const {saveManga} = mangaAction;

export default function Mangas() {
    const store = useSelector(store=>store)
    const dispatch = useDispatch()
    const [title,setTitle] = useState("")// Title debe ser un variable global para que cuando el componenete se desmonte no se pierda el filtro
    const [mangas, setMangas] = useState([])
    const [prev, setPrev] = useState(null)
    const [next, setNext] = useState(null)
useEffect(
    ()=>{
        let token = localStorage.getItem("token");
        let headers = { headers: { Authorization: `Bearer ${token}` } };
        axios(apiURL+"/mangas?title="+ store.manga.text ,headers).then(res=>{
            console.log(res.data.response)
            setMangas(res.data.response),
            setPrev(res.data.prev),
            setNext(res.data.next)})
            .catch(err=>console.log(err));
    }, [store.manga.text]
)
  return (

<>
    <input type="text" id="" placeholder="search..." className="mt-[100px]" onChange={(event)=> dispatch(saveManga({title:event.target.value}))} defaultValue={(store.manga.text)}/>
    {/* Asi se hace con estados locales <input type="text" id="" placeholder="search..." className="mt-[100px]" onChange={(event)=> setTitle(event.target.value)}/>*/}
    <div className="flex">
          {mangas.map(each =>  <CardManga key={each._id} title={each.title}/>)}
          </div>
          <div>
          {prev && <input type="button" value={"previus page"} />}
          {next && <input type="button" value={"next page"} />}
          </div>
    </>

  )
}
