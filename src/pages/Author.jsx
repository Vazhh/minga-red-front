import React from 'react'

export default function Author() {
  return (
    <>

    {/* // <main className="md:relative justify-center bg-[#EBEBEB] flex items-center w-full h-screen">
    //   <div> Profile </div>
    // </main> */}

    {/* // PADRE */}
    <div className="relative mx-auto w-[430px] h-screen my-14">
  
      {/* AUTHOR PROFILE */}
      <div className="w-[396px] px-[30px] left-[17px] top-[98px] absolute justify-start items-center gap-[30px] inline-flex">
        <img className="w-[71px] h-[71px] rounded-[50px]" src="https://via.placeholder.com/71x71" />
        <div className="flex-col justify-center items-start gap-[5px] inline-flex">
          <div className="text-black text-xl font-normal">Lucas Ezequiel Silva</div>
          <div className="justify-center items-center gap-[5px] inline-flex">
            <div className="w-4 h-4 relative"></div>
            <div className="text-neutral-400 text-base font-normal">Caseros, Buenos Aires</div>
          </div>
          <div className="justify-center items-center gap-[5px] inline-flex">
            <div className="w-[18px] h-[18px] relative"></div>
            <div className="text-neutral-400 text-base font-normal">16/02/2000</div>
          </div>
        </div>
        <div className="w-6 h-6 relative"></div>
      </div>

      {/* LINE */}
      <div className="w-[385px] h-[0px] left-[23px] top-[230px] absolute border border-[#4338CA]"></div>

      {/* SWITCH */}
      <div className="w-[142px] h-6 left-[144px] top-[247px] absolute">
        
        <div className="w-12 h-6 left-[50px] top-0 absolute">
          <div className="w-12 h-6 left-0 top-0 absolute bg-emerald-500 rounded-2xl"></div>
          <div className="w-5 h-5 left-[26px] top-[2px] absolute bg-white rounded-full shadow"></div>
        </div>
        <div className="left-[124px] top-[5px] absolute text-center text-neutral-400 text-xs font-bold tracking-wide">old</div>
        <div className="left-0 top-[5px] absolute text-center text-neutral-400 text-xs font-bold tracking-wide">new</div>

      </div>      

      {/* TARJETAS */}
      <div className="w-[385px] h-[571.29px] left-[23px] top-[286px] absolute">

        <div className="w-[385px] h-[273.23px] left-0 top-[298.06px] absolute">
          <div className="w-[173.87px] h-[243.42px] left-0 top-0 absolute">
            <div className="w-[99.35px] h-[22.35px] left-0 top-[221.06px] absolute text-neutral-700 text-base font-normal">Evangelion</div>
            <img className="w-[173.87px] h-[211.13px] left-0 top-0 absolute rounded-[15px] shadow" src="https://via.placeholder.com/174x211" />
          </div>
          <div className="w-[173.87px] h-[273.23px] left-[211.13px] top-0 absolute">
            <div className="w-[173.87px] h-[52.16px] left-0 top-[221.06px] absolute text-neutral-700 text-lg font-normal">Kaguya-sama: Love is war</div>
            <img className="w-[173.87px] h-[211.13px] left-0 top-0 absolute rounded-[15px] shadow" src="https://via.placeholder.com/174x211" />
          </div>
        </div>
        
        <div className="w-[385px] h-[273.23px] left-0 top-0 absolute">
          <div className="w-[173.87px] h-[273.23px] left-0 top-0 absolute">
            <div className="w-[173.87px] h-[52.16px] left-0 top-[221.06px] absolute text-neutral-700 text-lg font-normal">Komi san Cant Communicate</div>
            <img className="w-[173.87px] h-[211.13px] left-0 top-0 absolute rounded-[15px] shadow" src="https://via.placeholder.com/174x211" />
          </div>
          <div className="w-[173.87px] h-[247.15px] left-[211.13px] top-0 absolute">
            <div className="w-[173.87px] h-[26.08px] left-0 top-[221.06px] absolute text-neutral-700 text-lg font-normal">Boruto</div>
            <img className="w-[173.87px] h-[211.13px] left-0 top-0 absolute rounded-[15px] shadow" src="https://via.placeholder.com/174x211" />
          </div>
        </div>

      </div>

      {/* BUTTON */}
      <div className="w-[194.63px] h-[32.88px] left-[117px] top-[873px] absolute">
        <div className="w-[194.63px] h-[32.88px] left-0 top-0 absolute bg-gradient-to-r from-indigo-700 to-indigo-500 rounded-[20px] shadow"></div>
        <div className="w-[193.37px] h-[15.34px] left-0 top-[8px] absolute text-center text-white text-xs font-normal">Manage!</div>
      </div>

    </div>
    </>
  )
}