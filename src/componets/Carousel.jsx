import left from "/assets/vistaWeb/left.svg";
import right from "/assets/vistaWeb/right.svg";

export default function Carousel({character_photo,cover_photo,name,description}) {
  return (
    <div className="hidden lg:inline-flex lg:mt-[19%] h-[380px] bg-white w-full items-center justify-center">
            <div className="bg-gradient-to-r from-indigo-700 to-indigo-500 flex w-[90%] h-[265px] items-center justify-between rounded-md">
              <img src={left} className="ps-3" alt="" />
              <div className="flex mb-12 mr-8">
                <img
                  src={character_photo}
                  className="w-[276px] h-[306px] mr-16"
                  alt=""
                />
                <img src={cover_photo} className="w-[180px] h-[270px]" alt="" />
              </div>

              <div className="text-white w-[25%] h-[93px] flex flex-col justify-center">
                <h1 className="font-bold text-2xl font-roboto">{name}</h1>
                <p className="font-roboto text-sm">{description}</p>
              </div>
              <img src={right} className="pr-3" alt="" />
            </div>
          </div>
  )
}

