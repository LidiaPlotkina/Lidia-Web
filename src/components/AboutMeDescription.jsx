import React from "react";



export default function AboutMeDescription() {  
    return (
        <div className="m-4">
            <div className="rounded-md flex flex-col flex-wrap px-4 md:max-w-sm text-center py-8 space-y-3 box-border bg-aboutme-light border-2">
                <div className = "">
                    <h1 className = "text-4xl font-Cormorant font-thin">{"Hello, I am Lidia"}</h1>
                </div>
                <div className = "text-xl font-Cormorant font-normal">
                    <p>{ "Here we will see about me"}</p>
                </div>
            </div>
        </div>
    )
}