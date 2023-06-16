import { createBrowserRouter } from "react-router-dom";
import Index from "./Index";
import Main from "../layouts/Main";
import SignIn from "./SignIn";
import Register from "./Register";

const router = createBrowserRouter([
  // necesita que le pasemos un array de objetos, cada objeto tendra la propiedad PATH con la ruta ELEMENT con el elemento que renderiza esa PATH
  {
    path: "/", //ahorta con una ruta
    element: <Main />, //voy a renderizar un componente de tipo layout
    children: [
      //cuyos hijos van a ser TODAS las interfaces que tenga la app
      { path: "/", element: <Index /> }, // para ver index se concatena /main/index
      { path: "/signin", element: <SignIn /> },
      { path: "/register", element: <Register /> },
      { path: "/manga/:manga_id", element: <Index /> },
      { path: "/chapter/:ch_id/:author_id", element: <Index /> },
    ],
  },
]);
export default router;
