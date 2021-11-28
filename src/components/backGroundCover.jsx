import React from "react";
import heroImage from "../Images/cover.jpeg"

export default function BackGroundCover() {
    return (
        <div className="absolute top-0 w-full h-full bg-auto bg-center bg-no-repeat bg-gray-100" style={{ backgroundImage: `url(${heroImage})` }}>
            <span id="blackOverlay" className="w-full h-full absolute bg-opacity-30 bg-black"></span>
        </div>
      );
}