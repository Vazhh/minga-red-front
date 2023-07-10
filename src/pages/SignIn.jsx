import logo from "/assets/vistaWeb/logofooter.svg";
import google from "/assets/vistaWeb/Google.svg";
import imgsignin from "/assets/vistaWeb/singin.png";
import { Link as Anchor } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import Swal from "sweetalert2";

export default function SignIn() {
  const email = useRef(); //defino una referencia
  const password = useRef();

  const signin_data = () => {
    let data = {
      email: email.current.value, //accedo al valor de una referencia
      password: password.current.value,
    };
    //console.log(data)
    axios
      .post(apiUrl + "/auth/signin", data)
      .then((res) => {
        localStorage.setItem("token", res.data.response.token);
        localStorage.setItem("user", JSON.stringify(res.data.response.user));
      })
      .then(() =>
        Swal.fire({
          icon: "success",
          text:"Login success!"
        })
      )
      .then(() => window.location.replace("/"))
      .catch((err) =>
        Swal.fire({
          icon: "error",
          text: "sign in please!",
          html: err.response.data.messages
            .map((each) => `<p>${each}</p>`)
            .join(""),
        })
      );
  };

  return (
    <>
      <main className="md:relative flex items-center justify-center w-full h-screen">
        <div className="flex w-full">
          <img
            src={imgsignin}
            className="hidden md:flex  object-cover w-[50vw] h-screen"
            alt=""
          />
          <div className=" bg-white flex flex-col items-center justify-center md:w-[50vw] w-full">
            <img src={logo} className="w-[191px] h-[48px]" alt="" />
            <p className="font-semibold text-[32px]">
              Welcome <span className="text-[#4338CA]">back</span>!
            </p>
            <p className="font-semibold text-[12px] w-[50%] h-[28px] text-center">
              Discover manga, manhua and manhwa, track your progress, have fun,
              read manga.
            </p>
            <form className="flex flex-col w-full items-center mt-[59px]">
              <input
                ref={email} //asigno una referencia
                type="email"
                placeholder="Email"
                className="border-2 border-gray-400 w-[50%] h-[48px] rounded-[10px] font-roboto font-medium text-[12px] ps-[14px]"
              />
              <input
                ref={password}
                type="password"
                placeholder="Password"
                className="mt-[32px] border-2 border-gray-400 w-[50%] h-[48px] rounded-[10px] font-roboto font-medium text-[12px] ps-[14px]"
              />
              <input
                onClick={signin_data}
                type="button"
                value="Sign In"
                className="hover:cursor-pointer mt-[13px] w-[50%] h-[48px] bg-[#4338CA] rounded-[10px] font-roboto font-bold text-[14px] text-white"
              />

              <a
                href="https://accounts.google.com/v3/signin/identifier?dsh=S-1945593188%3A1688431387052498&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=AeDOFXh333ESPpierC-U9AFHbwabu7NXKW3GDPpiyQmMsS8m6FCT5GG60vBW8FSn5d5WsW6re4P4&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                type="button"
                className="hover:cursor-pointer flex items-center justify-center mt-[16px] font-roboto font-medium text-[14px] w-[50%] h-[48px] text-gray-400 border-2 border-gray-400 rounded-[10px]"
              >
                <img src={google} alt=""  className="mr-2"/>
                <p>Sign in with Google</p> 
              </a>
            </form>
            <p className="mt-[16px] font-roboto font-medium text-[14px]">
              you dont have an account yet?{" "}
              <Anchor to={"/register"} className="text-[#4338CA]">
                Sign up
              </Anchor>
            </p>
            <p className="mt-[17px] font-roboto font-medium text-[14px]">
              Go back to{" "}
              <Anchor to={"/"} className="text-[#4338CA] hover:cursor-pointer">
                home page
              </Anchor>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
