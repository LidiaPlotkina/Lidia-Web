import React from "react";
import Logo from "../Images/iconImage.png"


export default function LogoImage(props)
{
    return (
            <div className = "h-24 w-96">
                <img className="object-cover object-center h-20 w-full border-transparent border-2 bg-transparent" src={Logo} alt="" />
            </div>
    );
}

