import logo from "/assets/vistaWeb/logofooter.svg";
export default function SignIn({ changeView, setChangeView }) {
  return (
    <>
      <div className="md:relative absolute bg-white flex flex-col justify-center items-center w-full md:h-screen">
        <img src={logo} className="w-[191px] h-[48px]" alt="" />
        <p className="font-semibold text-[32px]">
          Welcome <span className="text-[#4338CA]">back</span>!
        </p>
        <p></p>
        <button
          className="bg-gradient-to-r from-indigo-700 to-indigo-500 w-[20%] justify-center w-full items-center"
          onClick={() => {
            setChangeView(!changeView);
          }}
        >
          Go to home
        </button>
      </div>
    </>
  );
}
