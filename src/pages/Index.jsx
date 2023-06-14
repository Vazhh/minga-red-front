import { useState } from "react";
import Carousel from "../componets/Carousel";
import TextBodyMain from "../componets/TextBodyMain";
import SignIn from "../pages/SignIn"

export default function Index() {
  const [changeView, setChangeView] = useState(false);
  return (
      changeView ? (
        <SignIn changeView={changeView} setChangeView={setChangeView}/>
      ) : (
        <main className="md:relative w-full h-screen md:h-full justify-center items-center bg-[url('/assets/vistaMobile/fondo.png')] bg-cover bg-top">
          <TextBodyMain changeView={changeView} setChangeView={setChangeView}/>
          <Carousel/>
          </main>
      )
    
  );
}
