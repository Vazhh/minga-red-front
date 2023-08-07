import like from '/assets/vistaMobile/good.png';
import dislike from '/assets/vistaMobile/bad.png';
import wow from '/assets/vistaMobile/wow.png';
import love from '/assets/vistaMobile/love.png'
import line from '/assets/vistaMobile/Line.png'
import { useSelector } from 'react-redux';

export default function TitleManga() {
    const manga = useSelector(store => store.manga.manga)
    const images = [like, dislike, wow, love];
    return (
        

        <main>
            <div className='w-[90%] mx-auto sm:w-[80%] md:w-[45%]  '>
                <h1 className=' pt-4 text-black font-poppins font-light	text-[40px] tracking-wide leading-[95.187%] '>{manga.title}</h1>
                <div className='flex justify-between items-center  font-poppins md:m-2   py-2'>
                    <div className='text-xs  rounded-2xl h-[37px] w-[70px] justify-center flex items-center  font-poppins' style={{ backgroundColor: manga.category_id?.hover, color: manga.category_id?.color }} >{manga?.category_id?.name}</div>
                    <h2 className='text-xl tracking-wider text-[#9D9D9D] '>{manga.author_id?.name.toUpperCase()}</h2>
                </div>
            </div>

            <div className='flex justify-between items-center w-[300px] sm:w-[400px] mx-auto my-8'>
                {images.map((image, index) => (
                    <img 
                        key={index} 
                        src={image} 
                        alt="" 
                        className='cursor-pointer transition-transform hover:scale-110 hover:shadow-md rounded-full' 
                    />
                ))}
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
        </main>);
}
