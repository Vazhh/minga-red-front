import logo from "/assets/vistaWeb/logofooter.svg";
import signin from "/assets/vistaWeb/singin.png"
export default function SignIn({ changeView, setChangeView }) {
  return (
    <>
      <main className="md:relative absolute bg-white flex flex-col  items-center w-full ">
        <div className="flex w-full">
        <img src={signin} className="hidden md:flex  object-cover w-[50vw]" alt="" />
        <div className="flex flex-col md:w-[50vw] w-full pt-[45%] pb-[40%] md:pb-[1%] items-center md:pt-[5%] lg:pt-[15%]">
        <img src={logo} className="mt-[10%] w-[191px] h-[48px]" alt="" />
        <p className="font-semibold text-[32px]">
          Welcome <span className="text-[#4338CA]">back</span>!
        </p>
        <p className="font-semibold text-[12px] w-[50%] h-[28px] text-center">
          Discover manga, manhua and manhwa, track your progress, have fun, read
          manga.
        </p>
        <form className="flex flex-col w-full items-center mt-[59px]">
          <input
            type="email"
            placeholder="Email"
            className="border-2 border-gray-400 w-[50%] h-[48px] rounded-[10px] font-roboto font-medium text-[12px] ps-[14px]"
          />
          <input
            type="password"
            placeholder="Password"
            className="mt-[32px] border-2 border-gray-400 w-[50%] h-[48px] rounded-[10px] font-roboto font-medium text-[12px] ps-[14px]"
          />
          <input
            type="button"
            value="Sign In"
            className="mt-[13px] w-[50%] h-[48px] bg-[#4338CA] rounded-[10px] font-roboto font-bold text-[14px] text-white"
          />
          <input
            type="button"
            value="Sign in with Google"
            className="mt-[16px] font-roboto font-medium text-[14px] w-[50%] h-[48px] text-gray-400 border-2 border-gray-400 rounded-[10px]"
          />
        </form>
        <p className="mt-[16px] font-roboto font-medium text-[14px]">
          you don't have an account yet?{" "}
          <span className="text-[#4338CA]">Sign up</span>
        </p>
        <p className="mt-[17px] font-roboto font-medium text-[14px]">
          Go back to{" "}
          <span className="text-[#4338CA] hover:cursor-pointer"
            onClick={() => {
              setChangeView(!changeView);
            }}
          >
            home page
          </span>
        </p>
        </div>
        </div>
      </main>
    </>
  );
}