import menu from "/assets/vistaWeb/Menu.svg";
import logo from "/assets/vistaWeb/Logo.svg";
import Display from "./Display";
import { useState,useEffect } from "react";
import axios from "axios"
import apiURL from "../apiUrl"

function header() {
  let token = localStorage.getItem('token')
  let headers = { headers:{ 'Authorization':`Bearer ${token}` } }
  return headers
}

async function signout(event) {
  event.preventDefault()
  try {
    await axios.post(
      apiURL+'/auth/signout',		//url a consumir
      null,					            //objeto con data a enviar
      header()				          //objeto con autorización
    )
    } catch (error) {
      console.log(error)
  }
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  window.location.replace('/')
}

export default function NavBar() {
  const [options,setOptions] = useState([
    { to: "/", title: "Home" }
  ])
  const [photo,setPhoto] = useState()
  const [email,setEmail] = useState()
  useEffect(() => {
    let token = localStorage.getItem('token')
    //console.log(token);
    if (token) {
      let headers = header()
      axios.post(apiURL+'/auth/token',null,headers)
        .then(res=> {
           setOptions([
            { to: "/", title: "Home" },
            { to: "/manga-form", title: "Create Manga" },
            { to: "/author-form", title: "Create Author"},
            { to: "/:manga_id/chapther-form", title: "Create Chapter"},
            { to: "/cia-form", title: "Create company"},
            { to: "/", title: "Sign Out" }
          ])
          setPhoto(res.data.response.user.photo)
          setEmail(res.data.response.user.email)
        })
        .catch(()=> {
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          setOptions([
            { to: "/", title: "Home" },
            { to: "/register", title: "Register" },
            { to: "/signin", title: "Sign In" },
          ])
        })
    } else {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      setOptions([
        { to: "/", title: "Home" },
        { to: "/register", title: "Register" },
        { to: "/signin", title: "Sign In" }
      ])
    }
  },[])
  const [show, setShow] = useState(false)

  return (
    <>
      {/* <Display/> */}
      {/* {show ? <Display options={options}/> : null} */}
      {show && <Display signout={signout} photo={photo} email={email} options={options} show={show} setShow={setShow} />}
      <nav className="mt-1 z-10 flex justify-between w-full absolute ps-3 pr-5 sm:mt-3 sm:ps-3 sm:pr-5 2xl:mt-8 2xl:ps-11 2xl:pr-11">
        <img
          src={menu}
          onClick={() => setShow(!show)}
          className="bg-indigo-700 rounded-lg ps-1 hover:bg-slate-600 w-14 hover:cursor-pointer"
          alt=""
        />
        <img src={logo} className="w-14  left-3 sm:w-14  2xl:w-24  " alt="" />
      </nav>
    </>
  );
}