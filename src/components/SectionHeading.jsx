import React from "react";


export default function SectionHeading(props) {

    return (
        <>
            <h2 className="font-Montserrat text-3xl text-center py-2">{ props.name}</h2>
        </>
    );
}