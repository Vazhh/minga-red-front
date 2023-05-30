import menu from "/assets/vistaWeb/Menu.svg";
import logo from "/assets/vistaWeb/Logo.svg";

export default function NavBar() {
  return (
    <nav className="flex justify-between w-full absolute ps-3  pr-5 sm:mt-3 sm:ps-3 sm:pr-5 2xl:mt-8 2xl:ps-11 2xl:pr-11">
          <img src={menu} className="w-14" alt="" />
          <img src={logo} className="w-14  left-3 sm:w-14  2xl:w-24  " alt="" />
        </nav>
  )
}
