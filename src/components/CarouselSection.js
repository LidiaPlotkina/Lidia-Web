import React from "react";
import SectionHeading from "./SectionHeading";
import Carousel from "./Carousel";

export default function CarouselSection() {
    return (
        <>
            <section className="relative py-20 bg-gray-200" id="carousel-section">
                <div className="container mx-auto px-4 ">
                    <SectionHeading name={"Lidia's Work"} />
                    <hr className="mb-5 border-gray-400" />
                    <Carousel/>
                </div>
            </section>
        </>
    );
}