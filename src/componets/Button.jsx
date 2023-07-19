export default function Button({ onClick ,value }) {
  return (
    <input type="button" value={value} onClick={onClick } className="mt-[58px] w-[50%] h-[68px] bg-[#4338CA] rounded-full font-roboto font-bold text-[24px] text-white"/>
  )
}