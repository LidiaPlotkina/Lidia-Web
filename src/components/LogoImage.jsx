import React from "react";
import Logo from "../Images/iconImage.png"


export default function LogoImage(props)
{
    return (
            <div className = "h-20 w-80">
                <img className="object-cover object-center h-20 w-full border-transparent border-2 bg-transparent hover:border-2 hover:border-gray-300" src={Logo} alt="" />
            </div>
    );
}
