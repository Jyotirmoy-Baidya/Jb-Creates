import React, { useState } from 'react'
import { GoArrowLeft } from 'react-icons/go'
import { IoHeartOutline } from 'react-icons/io5'
import { ChevronLeft, ChevronRight } from "lucide-react";


const images = [
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4731271a-b0c7-4609-a398-2ac6a8b92399/AS+M+NP+DF+TIGHT+TOP+LS.png", // Front
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a3cf102b-188a-4f46-9f6d-b7e13df723f4/AS+M+NP+DF+TIGHT+TOP+LS.png", // Back
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/344c3ae9-54c5-4ef4-8b8e-f90ec4931d4d/AS+M+NP+DF+TIGHT+TOP+LS.png", // Side
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e416d2f7-86e4-4697-9084-5584af179112/AS+M+NP+DF+TIGHT+TOP+LS.png", // Collar closeup
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1246acc6-d6a7-4e2e-a394-f0a737c3284e/AS+M+NP+DF+TIGHT+TOP+LS.png", // Logo closeup
];

const ProductDetails1 = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="grid grid-cols-5 gap-3 mt-2 mx-auto">
            {/* Thumbnails */}
            <div className="flex flex-col col-span-1 justify-between items-center ">
                {images.map((img, idx) => (
                    <div key={idx} className='relative'>
                        <img

                            src={img}
                            alt={`Thumbnail ${idx}`}
                            onClick={() => setSelectedImage(idx)}
                            className={`w-[68px] h-[68px] object-cover rounded-md cursor-pointer`}
                        />
                        {
                            selectedImage === idx &&
                            <div className='absolute top-0 w-full h-full bg-gray-500/40 z-1 rounded-md'></div>
                        }
                    </div>

                ))}
            </div>

            {/* Main Image */}
            <div className="col-span-4 relative flex-1 flex items-center justify-center">


                <img
                    src={images[selectedImage]}
                    alt="Main Jersey"
                    className="max-h-[500px] object-contain rounded-xl"
                />

                <div className='absolute bottom-4 right-4 flex gap-3'>
                    <button
                        onClick={() =>
                            setSelectedImage((prev) => (prev - 1 + images.length) % images.length)
                        }
                        className="bg-white p-1 rounded-full shadow-md hover:bg-gray-100"
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        onClick={() => setSelectedImage((prev) => (prev + 1) % images.length)}
                        className=" bg-white p-1 rounded-full shadow-md hover:bg-gray-100"
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

const ProductDetails2 = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full max-w-md mx-auto mt-2">
            <div className="relative bg-gray-100 rounded-xl overflow-hidden">
                {/* Image */}
                <img
                    src={images[activeIndex]}
                    alt={`Jersey view ${activeIndex + 1}`}
                    className="w-full object-cover"
                />

                {/* Dots */}
                <div className="bg-gray-600/50 backdrop-blur-lg py-2 px-3 rounded-full w-fit left-1/2 -translate-x-1/2 absolute bottom-4 flex justify-center items-center gap-2">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === idx
                                ? "bg-white w-6"
                                : "bg-gray-300/50"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}



const ProductDetailsCard = () => {


    return (
        <div className='w-full bg-white'>
            <div className='h-screen p-3'>
                <header className='w-full '>
                    <div className='flex justify-between py-2'>
                        <div className='flex'>
                            <button className='p-2 border border-gray-500/50 rounded-full'>
                                <GoArrowLeft />
                            </button>
                        </div>
                        <div className='flex'>
                            <p className='mt-[1px] text-lg font-semibold '>Product Details</p>
                        </div>
                        <div className='flex'>
                            <button className='p-2 border border-gray-500/50 rounded-full'>
                                <IoHeartOutline />
                            </button>
                        </div>
                    </div>
                </header>
                <ProductDetails1 />
            </div>

            <div className='h-screen p-3'>
                <header className='w-full '>
                    <div className='flex justify-between py-2'>
                        <div className='flex'>
                            <button className='p-2 border border-gray-500/50 rounded-full'>
                                <GoArrowLeft />
                            </button>
                        </div>
                        <div className='flex'>
                            <p className='mt-[1px] text-lg font-semibold '>Product Details</p>
                        </div>
                        <div className='flex'>
                            <button className='p-2 border border-gray-500/50 rounded-full'>
                                <IoHeartOutline />
                            </button>
                        </div>
                    </div>
                </header>
                <ProductDetails2 />
            </div>
        </div>
    )
}

export default ProductDetailsCard