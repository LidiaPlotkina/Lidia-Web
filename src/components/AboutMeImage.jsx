import React from "react";
import aboutMeimage from "../Images/aboutMe.jpeg"

export default function AboutMeImage() {
    return (
        <>
            <div className = "px-4 py-4">
                <img className="max-w-full rounded-lg shadow-lg"
                    src={aboutMeimage}
                    alt="..." />
            </div>
        </>
    );
}