import menu from "/assets/vistaWeb/Menu.svg";
import logo from "/assets/vistaWeb/Logo.svg";
import Display from "./Display";
import { useState } from "react";
import { Link as Anchor } from "react-router-dom";

export default function NavBar() {
  let options = [
    { to: "/", title: "Home" },
    { to: "/register", title: "Register" },
    { to: "/signin", title: "Sign In" },
    { to: "/manga-form", title: "Create Manga" },
    { to: "/author-form", title: "Create Author"},
    { to: "/cia-form", title: "Create company"},
  ];
  const [show, setShow] = useState(false);
  return (
    <>
      {/* <Display/> */}
      {/* {show ? <Display options={options}/> : null} */}
      {show && <Display options={options} show={show} setShow={setShow} />}
      <nav className="mt-1 z-10 flex justify-between w-full absolute ps-3 pr-5 sm:mt-3 sm:ps-3 sm:pr-5 2xl:mt-8 2xl:ps-11 2xl:pr-11">
        <img
          src={menu}
          onClick={() => setShow(!show)}
          className="bg-indigo-700 rounded-lg ps-1 hover:bg-slate-600 w-14 hover:cursor-pointer"
          alt=""
        />
        <img src={logo} className="w-14  left-3 sm:w-14  2xl:w-24  " alt="" />
      </nav>
    </>
  );
}
