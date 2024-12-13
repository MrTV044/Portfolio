import { Link } from "react-router";

export default function NavBar() {
  return (
    <>
      <nav>
        <ul className="flex gap-10 justify-center pt-5 pb-5 text-2xl font-thin bg-neutral-800 text-white">
          <li className=" hover:text-green-600 p-2">
            <Link to="/">Home</Link>
          </li>
          <li className=" hover:text-green-600 p-2">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className=" hover:text-green-600 p-2">
            <Link to="/experience">Experience</Link>
          </li>
          <li className=" hover:text-green-600 p-2">
            <a href="#contact-me-id">Contact Me</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
