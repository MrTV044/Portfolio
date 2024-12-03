import { NavLink, Outlet } from "react-router";

export default function NavBar() {
  return (
    <>
      <nav>
        <ul className="flex gap-10 justify-center pt-5 pb-5 text-2xl font-thin bg-neutral-800 text-white">
          <li className=" hover:text-green-600">
            <a href="/home">Home</a>
          </li>
          <li className=" hover:text-green-600">
            <a href="/portfolio">Portfolio</a>
          </li>
          <li className=" hover:text-green-600">
            <a href="/experience">Experience</a>
          </li>
          <li className=" hover:text-green-600">
            <a href="#contact-me-id">Contact Me</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
