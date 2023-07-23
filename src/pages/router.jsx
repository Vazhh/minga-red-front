import { createBrowserRouter, redirect } from "react-router-dom";
import Index from "./Index";
import Main from "../layouts/Main";
import SignIn from "./SignIn";
import Register from "./Register";
import MangaForm from "./MangaForm";
import AuthorForm from "./AuthorForm";
import ChapterForm from './ChapterForm';
import CiaForm from "./CiaForm";
import NotAllowed from "./NotAllowed";
import MangaDetail from "./MangaDetail";

const router = createBrowserRouter([
  // necesita que le pasemos un array de objetos, cada objeto tendra la propiedad PATH con la ruta ELEMENT con el elemento que renderiza esa PATH
  {
    path: "/", //ahorta con una ruta
    element: <Main />, //voy a renderizar un componente de tipo layout
    children: [
      //cuyos hijos van a ser TODAS las interfaces que tenga la app
      { path: "/", element: <Index /> }, // para ver index se concatena /main/index
      { path: "/signin", loader:()=>{
        let user = JSON.parse(localStorage.getItem('user'))
        return (user)&&redirect('/')
        }      
      , element: <SignIn /> },
      { path: "/register",loader:()=>{
        let user = JSON.parse(localStorage.getItem('user'))
        return (user)&&redirect('/')
        }
      , element: <Register /> },
      { path: "/manga-form",loader:()=>{
        let user = JSON.parse(localStorage.getItem('user'))
        // console.log(user)
        if(user){
          user = {role: user.role}
        }else{
          user = {role: 0}
        }
        return (user.role===0||user.role===3||user===null)&&redirect('/not-allowed')
        }
      , element: <MangaForm /> },
      { path: "/author-form",loader:()=>{
        let user = JSON.parse(localStorage.getItem('user'))
        // return (user.role!=0)&&redirect('/not-allowed')
        return ( !user || user.role===1 || user.role===2) && redirect('/not-allowed')
        }
      , element: <MangaForm /> },
      { path: "/:manga_id/chapther-form",loader:()=>{
        let user = JSON.parse(localStorage.getItem('user'))
        return ( !user || user.role===0 || user.role===3)&&redirect('/not-allowed')
        }
      , element: <ChapterForm /> },
      { path: "/cia-form", loader:()=>{
        let user = JSON.parse(localStorage.getItem('user'))
        return ( !user || user.role===1 || user.role===2) && redirect('/not-allowed')
        }, element: <CiaForm />},
      { path: "/not-allowed", element: <NotAllowed /> },
      { path: "/manga/:manga_id/:page", element: <MangaDetail /> }
    ],
  },
]);
export default router;