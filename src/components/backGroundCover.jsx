import React from "react";
import heroImage from "../Images/cover.jpeg"

export default function BackGroundCover() {
    return (
        <div className="absolute top-0 w-screen h-full bg-auto bg-top bg-no-repeat bg-gray-100" style={{ backgroundImage: `url(${heroImage})` }}>
            <span id="blackOverlay" className="w-screen h-full absolute bg-opacity-5 bg-black "></span>
        </div>
      );
}