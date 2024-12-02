import { NavLink, Outlet } from "react-router";

export default function NavBar() {
  return (
    <>
      <nav>
        <ul className="flex gap-10 justify-center pt-5 pb-5 text-2xl font-thin bg-neutral-800 text-white">
          <li className=" hover:text-green-600">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className=" hover:text-green-600">
            <NavLink to="/portfolio"> Portfolio</NavLink>
          </li>
          <li className=" hover:text-green-600">
            <NavLink to="/experience"> Experience</NavLink>
          </li>
          <li className=" hover:text-green-600">
            <NavLink to="#contact-me-id">Contact Me</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
