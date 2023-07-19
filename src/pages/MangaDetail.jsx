import naruto from '/assets/vistaMobile/naruto.png';
import good from '/assets/vistaMobile/good.png';
import bad from '/assets/vistaMobile/bad.png';
import wow from '/assets/vistaMobile/wow.png';
import love from '/assets/vistaMobile/love.png'
import line from '/assets/vistaMobile/Line.png'
export default function MangaDetail() {


    return (
        <main className="  pb-[20%] bg-[#EBEBEB] flex flex-col  w-screen h-full">
            <img className='px-4 flex items-center mx-auto mt-20' src={naruto} alt="" />
            <h1 className='px-4 pt-4 text-black font-poppins font-light	text-[40px] tracking-wide leading-[95.187%] '>Naruto: And That's Why You're Disqualified!! #8</h1>
            <div className='flex justify-between items-center font-poppins px-4 py-2'>
                <div className='text-xs text-[#EF8481] bg-[#FFE0DF] rounded-2xl h-[37px] w-[70px] justify-center flex items-center  font-poppins'>Shōnen</div>
                <h2 className='text-xl tracking-wider text-[#9D9D9D] '>Company Name</h2>
            </div>
            <div className='flex p-12 justify-between mt-4'>
                <img src={good} alt="" />
                <img src={bad} alt="" />
                <img src={wow} alt="" />
                <img src={love} alt="" />
            </div>
            <div className='flex bg-white px-2 w-[369px] h[80px] rounded-2xl justify-around  items-center mx-auto font-poppins'>
                <div className='flex flex-col p-4 items-center'>
                    <h2 className='text-2xl text[#424242] '>4.5/5</h2>
                    <h4 className='text-xs text[#9D9D9D] font-light'>Rating</h4>
                </div>
                <img src={line} alt="line" />
                <div className='flex flex-col p-4 items-center'>
                    <h2 className='text-2xl text[#424242] '>265</h2>
                    <h4 className='text-xs text[#9D9D9D] font-light'>chapters</h4>
                </div>
                <img src={line} alt="line" />
                <div className='flex flex-col items-center'>
                    <h2 className='text-2xl text[#424242] '>Eng</h2>
                    <h4 className='text-xs text[#9D9D9D] font-light'>Leanguage</h4>
                </div>
                
            </div>

        </main>
    )

}