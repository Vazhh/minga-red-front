import NavBar from "../componets/NavBar"
import Footer from "../componets/Footer"
import { Outlet } from "react-router-dom"

export default function Main() {
  return (
    <div className=" absolte flex flex-col h-full w-full items-center">
    <NavBar/>
    {/*vistas dinamicas(por ahora solo index)*/}
    <Outlet />
    <Footer/>
    </div>
  )
}
