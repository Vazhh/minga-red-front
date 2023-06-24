import { useState } from "react";
import Carousel from "../componets/Carousel";
import TextBodyMain from "../componets/TextBodyMain";
import { useParams } from "react-router-dom";
import fondo from "/assets/vistaMobile/fondo.png"



export default function Index() {
  const {manga_id,ch_id,author_id} = useParams()
  console.log(manga_id)
  console.log(ch_id)
  console.log(author_id)
  return (
      
        <main className="w-full h-screen md:h-full justify-center items-center bg-[url('/assets/vistaMobile/fondo.png')] md:bg-[url('/assets/vistaWeb/fondoRecortado.png')] md:bg-contain md:bg-no-repeat bg-top bg-cover">
          {/* <img src={fondo} alt="" /> */}
          <TextBodyMain/>
          <Carousel/>
          </main>
          
      
    
  );
}
