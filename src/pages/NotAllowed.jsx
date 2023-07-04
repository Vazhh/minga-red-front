import not from "/assets/vistaWeb/not.png"
import React from 'react'

export default function NotAllowed() {
  return (
    <main className="md:relative justify-center bg-[#EBEBEB] flex items-center w-full h-screen">
      <img src={not} alt="" className="w-full h-full" />
    </main>
  )
}
