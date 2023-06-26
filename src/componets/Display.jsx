import { Link as Anchor } from "react-router-dom";

export default function Display({ photo, email, options, show, setShow, signout }) {
  return (
    <div className="absolute flex flex-col md:fixed w-full h-full items-center text-white md:w-[420px] p-2 rounded-xl z-20 top-0 left-0 bg-indigo-700 ">
      <div className="w-[100%]">
        <div className="ps-[24px] pr-[29px] mt-[10%] flex justify-around">
          <div className="flex w-full">
            <img
              src={photo || "https://publicdomainvectors.org/tn_img/abstract-user-flat-4.webp"}
              className="h-[46px] w-[46px] rounded-full"
              alt=""
            />
            <div className="flex flex-col justify-center">
              <p className="font-inter text-[15px]">{email}</p>
            </div>
          </div>
          <h1
            onClick={() => setShow(!show)}
            className="rounded-[8px] w-[46px] h-[46px] text-[20px] hover:cursor-pointer hover:bg-white hover:text-indigo-700 flex flex-col items-center justify-center"
          >
            X
          </h1>
        </div>
        <div className="flex flex-col ps-[24px] mt-5 pr-[24px] w-full">
        {options?.map((each,index)=> each.title==='Sign Out' ? (
          <a key={index} onClick={signout} href='/' className="rounded-[8px] p-2 list-none h-[48px] hover:bg-white hover:text-indigo-700 hover:font-bold">{each.title}</a>
        ) : (
          <Anchor key={index} to={each.to} className="rounded-[8px] p-2 list-none h-[48px] hover:bg-white hover:text-indigo-700 hover:font-bold">{each.title}</Anchor>
        ))}          
        </div>
      </div>
    </div>
  );
}
