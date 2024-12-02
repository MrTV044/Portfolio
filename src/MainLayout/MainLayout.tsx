import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import "./MainLayout.css";
import Footer from "../components/contact-me";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer/>
    </>
  );
}
