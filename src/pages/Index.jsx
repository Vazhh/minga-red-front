import { useState } from "react";
import Carousel from "../componets/Carousel";
import TextBodyMain from "../componets/TextBodyMain";
import SignIn from "../pages/SignIn"

export default function Index({ data }) {
  const [changeView, setChangeView] = useState(false);
  return (
    
      changeView ? (
        <SignIn changeView={changeView} setChangeView={setChangeView}/>
      ) : (
        <main className="md:relative absolute w-full justify-center items-center">
          <TextBodyMain changeView={changeView} setChangeView={setChangeView}/>
          <Carousel
            character_photo={data[0].character_photo}
            cover_photo={data[0].cover_photo}
            name={data[0].name}
            description={data[0].description}
          />
          </main>
      )
    
  );
}
