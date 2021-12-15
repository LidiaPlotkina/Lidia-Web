import React, { Component, useState } from "react";
import { CarouselData } from "../data/CarouselData";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";

export default function Carousel() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    function prevSlide()
    {
        let newSlide = count === 0 ? CarouselData.length - 1 : count - 1;
        setCount(newSlide);
    }

    function nextSlide()
    {
        let newSlide = count === CarouselData.length - 1 ? 0 : count + 1;
        setCount(newSlide);
    }
    
    return (
        <>
            <div className="mt-8 mx-auto bg-gray-200">
                <div className="max-w-3xl h-96 md:h-144 flex mx-auto overflow-hidden relative bg-gray-200">
                    <AiOutlineLeft onClick={prevSlide} className='absolute left-0 text-3xl inset-y-1/2 text-gray-400 cursor-pointer' />
                    <AiOutlineRight onClick={nextSlide} className='absolute right-0 text-3xl inset-y-1/2 text-gray-400 cursor-pointer' />
                    {CarouselData.map((slide, index) => {
                        console.log(index)
                        return (
                            <img src={slide.image} alt="This is Carousel Slide"
                                key={index}
                                className={index === count ? "block  h-auto w-full object-contain" : "hidden"}
                            />
                        );
                    })};
                    
                    <div className="absolute w-full flex justify-center bottom-0">
                        {CarouselData.map((element, index) => {
                            return (
                            <div
                                className={
                                index === count
                                    ? "h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer"
                                    : "h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer"
                                }
                                key={index}
                                onClick={() => {
                                setCount(index);
                                }}
                            ></div>
                            );
                        })}
                    </div>
                </div>
                <div className="w-full flex justify-center my-4">
                        {CarouselData.map((slide, index) => {
                            console.log(index)
                            return (
                                <h2 key={index} className={index === count ? "text-xl font-Cormorant font-semibold block w-full h-auto object-cover text-center" : "hidden"}>{slide.data}</h2>
                            );
                        })}
                    </div>
            </div>
        </>
    );
}