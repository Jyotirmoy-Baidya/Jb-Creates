import { RxArrowTopRight } from "react-icons/rx"
import "./FurnitureLandingPage.css"
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-j1LocsT9RW36Qe1vQ4m15DQaaVSPhSdNaQ&s',
    'https://images.stockcake.com/public/f/4/8/f48a2ba7-69c3-4e45-a691-a36f9b5a7397_large/serene-corner-chair-stockcake.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_sk39M1CQ_d53Sd1G8zfWxZ9YqIm21UXYQ&ss',
    'https://ak1.ostkcdn.com/images/products/is/images/direct/bd6fa0625df77619aad97ad1d67136329f39cf14/Modern-reading-chair.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-j1LocsT9RW36Qe1vQ4m15DQaaVSPhSdNaQ&s',
    'https://images.stockcake.com/public/4/8/b/48b70f6f-0f8b-41d6-a156-bca92a0c7d1d_medium/peaceful-morning-corner-stockcake.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-j1LocsT9RW36Qe1vQ4m15DQaaVSPhSdNaQ&s',
    'https://images.stockcake.com/public/f/4/8/f48a2ba7-69c3-4e45-a691-a36f9b5a7397_large/serene-corner-chair-stockcake.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_sk39M1CQ_d53Sd1G8zfWxZ9YqIm21UXYQ&ss',
    'https://ak1.ostkcdn.com/images/products/is/images/direct/bd6fa0625df77619aad97ad1d67136329f39cf14/Modern-reading-chair.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-j1LocsT9RW36Qe1vQ4m15DQaaVSPhSdNaQ&s',
];


const FurnitureLandingPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCount = 3;
    const total = images.length;

    // Auto advance every second
    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const next = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, total - visibleCount));
    };

    const prev = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };
    return (
        <>
            <main className="h-screen w-full overflow-hidden bg-black">
                <div className="relative flex w-[1122px]">
                    <motion.div
                        initial={{ left: "-100%" }}
                        animate={{ left: "0%" }}
                        transition={{ duration: 2.5, ease: [0.85, 0, 0.26, 1], delay: 1 }}
                        className="absolute flex flex-col w-1/2 h-screen pl-4 py-4">
                        <div className="pl-1 px-4">
                            <div className="flex justify-between py-[14px] px-10 border border-amber-200/10 rounded-full bg-[#181818]">
                                <div className="text-[#d9cdbc] hover:text-white text-xs cursor-pointer">Home</div>
                                <div className="text-[#d9cdbc] hover:text-white text-xs cursor-pointer">Product</div>
                                <div className="text-[#d9cdbc] hover:text-white text-xs cursor-pointer">About</div>
                                <div className="text-[#f2c17c] hover:text-white text-xs cursor-pointer">Pricing</div>
                            </div>
                        </div>

                        <div className="text-[#fff7e5] text-[40px] pt-24 pl-1 leading-[43px]">
                            MODERN DESIGNS.
                            <br />
                            EFFORTLESS COMFORT.
                            <br />
                            LASTING QUALITY.
                        </div>

                        <div className="absolute top-[390px] left-[325px] ">
                            <div className="relative w-[355px] overflow-hidden">
                                {/* <div className="h-[113px] w-[113px] overflow-hidden rounded-[20px]">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-j1LocsT9RW36Qe1vQ4m15DQaaVSPhSdNaQ&s" alt="" className="w-full object-cover" />
                            </div>
                            <div className="h-[113px] w-[113px] overflow-hidden rounded-[20px]">
                                <img src="https://images.stockcake.com/public/f/4/8/f48a2ba7-69c3-4e45-a691-a36f9b5a7397_large/serene-corner-chair-stockcake.jpg" alt="" />
                            </div>
                            <div className="h-[113px] w-[113px] overflow-hidden rounded-[20px]">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_sk39M1CQ_d53Sd1G8zfWxZ9YqIm21UXYQ&ss" alt="" className="object-cover h-full" />
                            </div> */}
                                {/* Carousel */}
                                <motion.div
                                    className="flex gap-2 overflow-hidden transition-transform duration-500 ease-in-out"
                                    animate={{ x: `-${currentIndex * 119}px` }}
                                    style={{ width: `${(images.length / visibleCount) * 100}%` }}
                                    transition={{ duration: 1.5, ease: [0.95, 0, 0.26, 1] }}
                                >
                                    {images.map((src, index) => (
                                        <div
                                            key={index}
                                            className="h-[113px] w-[113px] overflow-hidden rounded-[20px]"
                                        >
                                            <img
                                                src={src}
                                                alt={`img-${index}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>

                        <div className="absolute top-[520px] left-[405px] flex gap-2">
                            {/* Left Arrow Button */}
                            <button className="w-14 h-8 pb-1 border border-gray-500 rounded-full flex items-center justify-center hover:bg-gray-700 transition"
                                onClick={prev}>
                                <span className="text-white text-xl">←</span>
                            </button>

                            {/* Right Arrow Button */}
                            <button className="w-14 h-8 pb-1 border border-gray-500 rounded-full flex items-center justify-center hover:bg-gray-700 transition"
                                onClick={next}>
                                <span className="text-white text-xl">→</span>
                            </button>
                        </div>


                        <div className="absolute top-[530px] left-[20px] w-[340px] text-[#fff6e5a0]">
                            Contemporary chairs crafted for your lifestyle, designed to bring effortless elegance into your everyday spaces
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ left: '102%' }}
                        animate={{ left: '50%' }}
                        transition={{ duration: 2.5, ease: [0.85, 0, 0.26, 1], delay: 1 }}
                        className="absolute w-[]  h-screen pr-4 py-4">
                        <div className="relative h-[627px] w-[545px] overflow-hidden">
                            <div className="clipped-div">
                                <img src="https://img.freepik.com/free-photo/picture-frame-by-velvet-armchair_53876-132788.jpg?semt=ais_hybrid&w=740" alt="" className="absolute -bottom-10" />
                            </div>
                            <motion.div
                                whileHover="hover"
                                className="cursor-pointer absolute right-0 top-0 z-[1] flex items-center justify-between p-1 rounded-[17px] bg-[#fff8ea] w-[143px] h-[38px]">
                                <div className="pl-5 font-medium font-sans text-sm">Contact us</div>
                                <motion.div
                                    variants={{
                                        hover: { rotate: 720 },
                                    }}
                                    transition={{ duration: 0.6, ease: 'easeInOut' }} className="h-fit flex justify-center items-center py-[8px] px-[8px] rounded-full bg-black">
                                    <RxArrowTopRight className="text-white" />
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </main>


        </>
    )
}

export default FurnitureLandingPage