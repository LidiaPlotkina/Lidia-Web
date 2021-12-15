import React from "react";

export default function NavbarHeading(props) {
    return (
        <h1 className={
            `${props.transparent
                ? "lg:text-black lg:hover:text-gray-700 text-gray-800"
                : "text-gray-800 hover:text-gray-600"} 
                px-3 py-4 lg:py-2 flex items-center text-xl uppercase font-Cormorant font-semibold`}>{props.name}</h1>
    );
}