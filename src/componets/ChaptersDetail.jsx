import naruto from '/assets/vistaMobile/naruto.png'
export default function ChaptersDetails() {
return (
    <div className='flex justify-center items-center mx-auto mt-8 w-[300px] bg-white justify-around '>
                <img src={naruto} alt="" className='w-14'/>
                <div className=' flex  flex-col items-center'>
                    <h1>Chapter #1</h1>
                    <div>
                        <img src="" alt="" />
                        <h2>169</h2>
                    </div>
                       
                </div>
                <input type="button" value="read" className="flex   h-[68px] bg-[#4338CA] rounded-2xl font-roboto font-bold text-[24px] text-white cursor-pointer"/>
     
            </div>
)
}