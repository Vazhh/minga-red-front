import naruto from '/assets/vistaMobile/naruto.png';
import good from '/assets/vistaMobile/good.png';
import bad from '/assets/vistaMobile/bad.png';
import wow from '/assets/vistaMobile/wow.png';
import love from '/assets/vistaMobile/love.png'
export default function MangaDetail() {


    return (
        <main className="  pb-[20%] bg-[#EBEBEB] flex flex-col  w-full h-screen">
            <img className='px-4 flex items-center mx-auto mt-20' src={naruto} alt="" />
            <h1 className='px-4 pt-4 text-black font-poppins font-light	text-[40px] tracking-wide leading-[95.187%] '>Naruto: And That's Why You're Disqualified!! #8</h1>
            <div className='flex justify-between items-center font-poppins px-4 py-2'>
                <div className='text-xs text-[#EF8481] bg-[#FFE0DF] rounded-2xl h-[37px] w-[70px] justify-center flex items-center  font-poppins'>Shōnen</div>
                <h2 className='text-xl tracking-wider text-[#9D9D9D] '>Company Name</h2>
            </div>
            <div className='flex p-10 justify-between mt-4'>
                <img src={good} alt="" />
                <img src={bad} alt="" />
                <img src={wow} alt="" />
                <img src={love} alt="" />
            </div>
            <div className='flex '>
                <div className='flex flex-col p-4'>
                    <h2>4.5/5</h2>
                    <h4>Rating</h4>
                </div>
                <hr className='bg-black border-r-4 border-solid w-0 h-10'/>
                <div className='flex flex-col'>
                <h2>4.5/5</h2>
                    <h4>Rating</h4>
                </div>
                <hr />
                <div className='flex flex-col' ></div>
            </div>

        </main>
    )

}