import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavbarHeading from "./NavbarText";
import LogoImage from "./LogoImage";


export default function Navbar(props) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav
            className={`${props.transparent ? "top-0 absolute z-50 w-full" : "relative shadow-lg bg-white"} flex flex-wrap items-center justify-between px-2 py-3`}
        >
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <LogoImage />
                    <button
                        className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid
            border-transparent rounded bg-transparent block lg:hidden
            outline-none focus:outline-none" type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
                        <FontAwesomeIcon className={`${props.transparent ? "text-white" : "text-gray-800"}`} icon={faBars} size="lg" />
                    </button>
                </div>
                <div className={`${navbarOpen ? "block rounded shadow-lg" : "hidden"} 
        lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none`} id="example-navbar-warning">
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="flex items-center">
                            <a className={
                                `${props.transparent
                                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800" : "text-gray-800 hover:text-gray-600"}`}
                                href="#home">
                                <NavbarHeading transparent={props.transparent} name={"Home"} />
                            </a>
                        </li>
                        <li className="flex items-center">
                            <a className={
                                `${props.transparent
                                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800" : "text-gray-800 hover:text-gray-600"}`}
                                href="#about-me">
                                <NavbarHeading transparent={props.transparent} name={"About Me"} />
                            </a>
                        </li>
                        <li className="flex items-center">
                            <a className={
                                `${props.transparent
                                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800" : "text-gray-800 hover:text-gray-600"}`}
                                href="#blog-section">
                                <NavbarHeading transparent={props.transparent} name={"Booking"} />
                            </a>
                        </li>
                        <li className="flex items-center">
                            <a className={
                                `${props.transparent
                                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800" : "text-gray-800 hover:text-gray-600"}`}
                                href="#contact-me">
                                <NavbarHeading transparent={props.transparent} name={"Contact"} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}