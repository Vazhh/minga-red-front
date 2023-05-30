import NavBar from "../componets/NavBar"
import Footer from "../componets/Footer"

export default function Main({children}) {
  return (
    <>
    <NavBar/>
    {/*vistas dinamicas(por ahora solo index)*/}
    {children}
    <Footer/>
    </>
  )
}
