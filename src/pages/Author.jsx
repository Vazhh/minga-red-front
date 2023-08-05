import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import apiUrl from "../apiUrl";
import ProfileAuthor from '../componets/ProfileAuthor';
import SwitchAuthor from '../componets/SwitchAuthor';
import actions from "../store/actions/me_authors";
import manga_actions from "../store/actions/mangas_news";
const { saveProfile } = actions;
const { save_mangas_me } = manga_actions;

export default function AuthorProfile() {
  const dispatch = useDispatch();
  const profile = useSelector((store) => store.authors.profile);
  const logo = useSelector((store) => store.mangasnews.logo);
  const all = useSelector((store) => store.mangasnews.all);
  const news = useSelector((store) => store.mangasnews.news);
  const olds = useSelector((store) => store.mangasnews.olds);
const [showNews,setShowNews] = useState(true)

  let token = localStorage.getItem('token');
  let headers = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
	axios.get(apiUrl + "/authors/me", headers)
	  .then((res) => {
		// console.log(res); // Verificar el contenido de la respuesta
		dispatch(saveProfile(res.data.response.profile))
	  })
	  .catch((err) => console.log(err));
    axios.get(apiUrl + "/mangas/news", headers)
      .then((res) => { 
	// console.log(res); // Verificar el contenido de la respuesta
	  dispatch(save_mangas_me(res.data.response))
	})
      .catch((err) => console.log(err));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="flex flex-col pt-20 w-full md:w-11/12 2xl:w-[1375px] min-h-screen items-center justify-start">
      <ProfileAuthor
        photo={profile?.photo}
        name={profile?.name}
        last_name={profile?.last_name}
        city={profile?.city}
        country={profile?.country}
        date={profile?.date}
      />
			<div className="flex-grow flex flex-col justify-center items-center pt-4">
				{logo ? (
					<>
						<img src={apiUrl+logo} className="w-[300px] h-[300px]" />
						<span className="text-[18px] mt-4">You don't have mangas, please create a new one to read!</span>
					</>
				) : (
					all.length>0 ? (
						<SwitchAuthor mangas={all} />
					) : (
						<>
							<div className="flex">
								<span>news</span>
								<div onClick={()=>setShowNews(!showNews)} className="flex justify-between items-center w-[48px] h-[24px] rounded-full bg-[#12B28C] mx-3">
									{showNews ? (
										<>
											<span className="w-[20px] h-[20px] mx-[1px] rounded-full bg-white" />
											<span className="w-[20px] h-[20px] mx-[1px] rounded-full bg-[#12B28C]" />
										</>
									) : (
										<>
											<span className="w-[20px] h-[20px] mx-[1px] rounded-full bg-[#12B28C]" />
											<span className="w-[20px] h-[20px] mx-[1px] rounded-full bg-white" />
										</>
									)}
								</div>
								<span>olds</span>
							</div>
							{showNews ? (
								<SwitchAuthor mangas={news} />
							) : (
								<SwitchAuthor mangas={olds} />
							)}
						</>
					)
				)}
			</div>
    </main>
  );
}

// import React from 'react'


// export default function Author() {
//   return (
//     <>

//     {/* // PADRE */}
//     <main className="flex flex-col pt-20 w-full md:w-11/12 2xl:w-[1375px] min-h-screen items-center justify-start">
  
//       {/* AUTHOR PROFILE */}
//       <div className="w-[396px] px-[30px] left-[17px] top-[98px] absolute justify-start items-center gap-[30px] inline-flex">
//         <img className="w-[71px] h-[71px] rounded-[50px]" src="https://via.placeholder.com/71x71" />
//         <div className="flex-col justify-center items-start gap-[5px] inline-flex">
//           <div className="text-black text-xl font-normal">Lucas Ezequiel Silva</div>
//           <div className="justify-center items-center gap-[5px] inline-flex">
//             <div className="w-4 h-4 relative"></div>
//             <div className="text-neutral-400 text-base font-normal">Caseros, Buenos Aires</div>
//           </div>
//           <div className="justify-center items-center gap-[5px] inline-flex">
//             <div className="w-[18px] h-[18px] relative"></div>
//             <div className="text-neutral-400 text-base font-normal">16/02/2000</div>
//           </div>
//         </div>
//         <div className="w-6 h-6 relative"></div>
//       </div>

//       {/* LINE */}
//       <div className="w-[385px] h-[0px] left-[23px] top-[230px] absolute border border-[#4338CA]"></div>

//       {/* SWITCH */}
//       <div className="w-[142px] h-6 left-[144px] top-[247px] absolute">
        
//         <div className="w-12 h-6 left-[50px] top-0 absolute">
//           <div className="w-12 h-6 left-0 top-0 absolute bg-emerald-500 rounded-2xl"></div>
//           <div className="w-5 h-5 left-[26px] top-[2px] absolute bg-white rounded-full shadow"></div>
//         </div>
//         <div className="left-[124px] top-[5px] absolute text-center text-neutral-400 text-xs font-bold tracking-wide">old</div>
//         <div className="left-0 top-[5px] absolute text-center text-neutral-400 text-xs font-bold tracking-wide">new</div>

//       </div>   

//       {/* TARJETAS */}
//       <div className="w-[385px] h-[571.29px] left-[23px] top-[286px] absolute">

//         <div className="w-[385px] h-[273.23px] left-0 top-[298.06px] absolute">
//           <div className="w-[173.87px] h-[243.42px] left-0 top-0 absolute">
//             <div className="w-[99.35px] h-[22.35px] left-0 top-[221.06px] absolute text-neutral-700 text-base font-normal">Evangelion</div>
//             <img className="w-[173.87px] h-[211.13px] left-0 top-0 absolute rounded-[15px] shadow" src="https://via.placeholder.com/174x211" />
//           </div>
//           <div className="w-[173.87px] h-[273.23px] left-[211.13px] top-0 absolute">
//             <div className="w-[173.87px] h-[52.16px] left-0 top-[221.06px] absolute text-neutral-700 text-lg font-normal">Kaguya-sama: Love is war</div>
//             <img className="w-[173.87px] h-[211.13px] left-0 top-0 absolute rounded-[15px] shadow" src="https://via.placeholder.com/174x211" />
//           </div>
//         </div>
        
//         <div className="w-[385px] h-[273.23px] left-0 top-0 absolute">
//           <div className="w-[173.87px] h-[273.23px] left-0 top-0 absolute">
//             <div className="w-[173.87px] h-[52.16px] left-0 top-[221.06px] absolute text-neutral-700 text-lg font-normal">Komi san Cant Communicate</div>
//             <img className="w-[173.87px] h-[211.13px] left-0 top-0 absolute rounded-[15px] shadow" src="https://via.placeholder.com/174x211" />
//           </div>
//           <div className="w-[173.87px] h-[247.15px] left-[211.13px] top-0 absolute">
//             <div className="w-[173.87px] h-[26.08px] left-0 top-[221.06px] absolute text-neutral-700 text-lg font-normal">Boruto</div>
//             <img className="w-[173.87px] h-[211.13px] left-0 top-0 absolute rounded-[15px] shadow" src="https://via.placeholder.com/174x211" />
//           </div>
//         </div>

//       </div>

//       {/* BUTTON */}
//       <div className="w-[194.63px] h-[32.88px] left-[117px] top-[873px] absolute">
//         <div className="w-[194.63px] h-[32.88px] left-0 top-0 absolute bg-gradient-to-r from-indigo-700 to-indigo-500 rounded-[20px] shadow"></div>
//         <div className="w-[193.37px] h-[15.34px] left-0 top-[8px] absolute text-center text-white text-xs font-normal">Manage!</div>
//       </div>

//     </main>
//     </>
//   )
// }