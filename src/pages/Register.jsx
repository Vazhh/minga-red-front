import logo from "/assets/vistaWeb/logofooter.svg"
import register from "/assets/vistaWeb/register.png"
import { Link as Anchor, useNavigate } from "react-router-dom"
import { useRef } from "react"
import axios from "axios"
import apiUrl from '../apiUrl'
import Swal from "sweetalert2"

export default function Register() {

  const navigate = useNavigate()
  const email = useRef()
  const photo = useRef()
  const password = useRef()

  const register_data = () => {
    let data = {
      email: email.current.value,
      photo: photo.current.value,
      password: password.current.value
    }
    //console.log(data)
    axios.post(apiUrl+'/auth/register',data)
      .then(()=>Swal.fire({
        icon: 'success',
        text: 'sign in please!'
        }))
      .then(()=>navigate('/signin'))
      .catch(err=>Swal.fire({
        icon: 'error',
        text: 'sign in please!',
        html: err.response.data.messages.map(each=>`<p>${each}</p>`).join('')
      }))
  }
  return (
    <main className="md:relative bg-white flex flex-col justify-center items-center w-full h-screen">
      <div className="flex w-full">
        <div className="flex flex-col md:w-[50vw] w-full items-center justify-center">
          <img src={logo} className="w-[191px] h-[48px]" alt="" />
          <p className="font-semibold text-[32px]">
            Welcome <span className="text-[#4338CA]">back</span>!
          </p>
          <p className="font-semibold text-[12px] w-[50%] h-[28px] text-center">
            Discover manga, manhua and manhwa, track your progress, have fun,
            read manga.
          </p>
          <form className="flex flex-col w-full items-center mt-[48px]">
            <input
              ref={email}
              type="email"
              placeholder="Email"
              className="border-2 border-gray-400 w-[50%] h-[48px] rounded-[10px] font-roboto font-medium text-[12px] ps-[14px]"
            />
            <input
              ref={photo}
              type="url"
              placeholder="Photo"
              className="mt-[32px] border-2 border-gray-400 w-[50%] h-[48px] rounded-[10px] font-roboto font-medium text-[12px] ps-[14px]"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="mt-[32px] border-2 border-gray-400 w-[50%] h-[48px] rounded-[10px] font-roboto font-medium text-[12px] ps-[14px]"
            />
            <label className="flex mt-[20px]">
                <input type="checkbox" /><span className="text-[12px] font-roboto font-normal text-[#1F1F1F]">Send notification to my email</span>
            </label>
            <input
              type="button"
              value="Register"
              onClick={register_data}
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
