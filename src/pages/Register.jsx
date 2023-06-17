import logo from "/assets/vistaWeb/logofooter.svg";
import register from "/assets/vistaWeb/register.png";
import { Link as Anchor } from "react-router-dom";

export default function Register() {
  return (
    <main className="md:relative bg-white flex flex-col  items-center w-full h-screen">
      <div className="flex w-full">
        <div className="flex flex-col md:w-[50vw] w-full pt-[9%] pb-[0%] md:pb-[0%] items-center md:pt-[10%] lg:pt-[7%] xl:pt-[6%]">
          <img src={logo} className="mt-[10%] w-[191px] h-[48px]" alt="" />
          <p className="font-semibold text-[32px]">
            Welcome <span className="text-[#4338CA]">back</span>!
          </p>
          <p className="font-semibold text-[12px] w-[50%] h-[28px] text-center">
            Discover manga, manhua and manhwa, track your progress, have fun,
            read manga.
          </p>
          <form className="flex flex-col w-full items-center mt-[48px]">
            <input
              type="email"
              placeholder="Email"
              className="border-2 border-gray-400 w-[50%] h-[48px] rounded-[10px] font-roboto font-medium text-[12px] ps-[14px]"
            />
            <input
              type="url"
              placeholder="Photo"
              className="mt-[32px] border-2 border-gray-400 w-[50%] h-[48px] rounded-[10px] font-roboto font-medium text-[12px] ps-[14px]"
            />
            <input
              type="password"
              placeholder="Password"
              className="mt-[32px] border-2 border-gray-400 w-[50%] h-[48px] rounded-[10px] font-roboto font-medium text-[12px] ps-[14px]"
            />
            <label className="flex mt-[20px]">
                <input type="checkbox" /><span className="text-[12px] font-roboto font-normal text-[#1F1F1F]">Send notification to my email</span>
            </label>
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
            Already have an account?{" "}
            <Anchor to={'/signin'} className="text-[#4338CA]">Log in</Anchor>
          </p>
          <p className="mt-[17px] font-roboto font-medium text-[14px]">
            Go back to{" "}
            <Anchor
              className="text-[#4338CA] hover:cursor-pointer"
              to={'/'}
            >
              home page
            </Anchor>
          </p>
        </div>
        <img
          src={register}
          className="hidden md:flex  object-cover w-[50vw] h-screen"
          alt=""
        />
      </div>
    </main>
  );
}
