import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons';


export default function Footer() {
    return (
        <>
            <footer className="relative bg-gray-300 pt-8 pb-6" id="contact-me">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full px-4 lg:w-6/12">
                            <h4 className="text-4xl font-Cormorant font-thin">Let's Keep in Touch!</h4>
                            <h5 className="text-xl font-Cormorant font-normal mt-0 mb-2 text-gray-700">Follow me on my Social Media</h5>
                            <div className="mt-6">
                                <a href="https://www.instagram.com/coachlidia/?hl=ru">
                                    <button className="bg-white text-blue-400 shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3 transform hover:scale-125 duration-500">
                                        <FontAwesomeIcon icon={ faInstagram} size = "lg"/>
                                    </button>
                                </a>
                                <a href="https://www.linkedin.com/in/1p2l3o4t5k6i7n8a/">
                                    <button className="bg-white text-blue-400 shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3 transform hover:scale-125 duration-500">
                                        <FontAwesomeIcon icon={ faLinkedinIn} size = "lg"/>
                                    </button>
                                </a>
                                <a href="mailto:lplotkina@gmail.com">
                                    <button className="bg-white text-blue-400 shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3 transform hover:scale-125 duration-500">
                                        <FontAwesomeIcon icon={faEnvelope } size = "lg"/>
                                    </button>
                                </a>
                                <a href="tel:+60-12-701-2300">
                                    <button className="bg-white text-blue-400 shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3 transform hover:scale-125 duration-500">
                                        <FontAwesomeIcon icon={faPhone } size = "lg"/>
                                    </button>
                                </a>
                                
                            </div>
                        </div>
                        <div className="w-full lg:w-4/12 px-4 py-6 lg:py-0 lg:text-right">
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#" className = "text-gray-700 hover:text-gray-900 text-lg uppercase font-Cormorant font-normal block pb-2">Home</a>
                                </li>
                                <li>
                                    <a href="#" className = "text-gray-700 hover:text-gray-900 text-lg uppercase font-Cormorant font-normal block pb-2">About Me</a>
                                </li>
                                <li>
                                    <a href="#" className = "text-gray-700 hover:text-gray-900 text-lg uppercase font-Cormorant font-normal block pb-2">Booking</a>
                                </li>
                                <li>
                                    <a href="#" className = "text-gray-700 hover:text-gray-900 text-lg uppercase font-Cormorant font-normal block pb-2">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-400" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-gray-600 font-semibold py-1">
                            Copyright © {new Date().getFullYear()}{" "}CoachLidia by{" "}
                            <a
                                href="#"
                                className="text-gray-600 hover:text-gray-900"
                            >
                            Lidia Plotkina
                            </a>.
                        </div>
                    </div>
                </div>
                </div>
            </footer>
        </>
    );
}