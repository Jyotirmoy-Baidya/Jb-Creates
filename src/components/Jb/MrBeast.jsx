import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

const AnimatedVideoDiv = () => {
    return (
        <motion.div
            initial={{ width: 0, marginLeft: "0px", marginRight: "0px" }}
            animate={{ width: '45vw', marginLeft: "15px", marginRight: "15px" }}
            transition={{ duration: 2, ease: [0.85, 0, 0.26, 1], delay: 1 }}
            style={{
                height: '250px',
                backgroundColor: '#4ade80', // Tailwind green-400
            }}
            className='relative rounded-full overflow-hidden'
        >
            <div className="absolute left-1/2 -translate-x-1/2 w-[45vw] overflow-hidden shadow-lg">
                <div className='absolute top-[116px] left-10 -translate-x-1/2  py-[5px] px-[5px] border border-white rounded-full'>
                    <FaPlay className='text-white text-[10px]' />
                </div>
                <div className='h-[0.5px] w-[20%] top-[126px] absolute left-[60px] bg-white'></div>
                <video
                    src="https://res.cloudinary.com/dxbszkdhk/video/upload/v1752784108/2025-07-18_01-57-15_rcohwj.mp4"
                    controls
                    autoPlay
                    muted
                    loop
                    className="w-full"
                />
            </div>
        </motion.div>
    );
};

const MrBeast = () => {
    return (
        <div className='overflow-hidden relative h-screen w-full bg-gradient-to-br from-[#c7f4ff] via-[#f7f5f5] to-[#edc8d2]'>
            <motion.div
                initial={{ top: "-60px" }}
                animate={{ top: "0px" }}
                transition={{ duration: 2, ease: [0.85, 0, 0.26, 1], delay: 1 }}
                className='absolute w-full z-[1]'>
                <div className='py-5 mx-auto max-w-7xl'>
                    <div className='flex items-center gap-10 jb-mr-beast-heading tracking-wide text-gray-950'>
                        <div className=''>Home</div>
                        <div className=''>About</div>
                        <div className=''>Videos</div>
                        <div className=''>Merch</div>

                        <div className='ml-auto'>
                            <button className='cursor-pointer relative  py-2 px-8 rounded-full  shadow-md backdrop-blur-lg bg-white/10 border-white border-4'>
                                Join
                                {/* <div className='absolute bg-gradient-to-br from-[#02bcff] via-[#dcabb8] to-[#ff89a9] w-[110%] h-[114%] -top-[3px] -left-1 z-[-1] rounded-full'></div> */}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className='absolute flex justify-center items-center h-full w-full'>
                <p className='text-[100px] uppercase  font-semibold jb-mr-beast-heading'>Mr <span className='text-[20px]'>.</span> B </p>
                <AnimatedVideoDiv />
                <span className='text-[100px] uppercase  tracking-[13px] font-semibold jb-mr-beast-heading ml-1'>east</span>
            </div>

            <motion.div className='flex absolute w-full z-[1]'
                initial={{ bottom: "-100px" }}
                animate={{ bottom: "40px" }}
                transition={{ duration: 2, ease: [0.85, 0, 0.26, 1], delay: 1 }}
            >
                <div className='relative flex gap-10 justify-between items-center max-w-7xl w-full mx-auto'>
                    <div className='w-[20%] text-[10px] text-black'>
                        I'm <span className='text-[18px] jb-mr-beast-heading mx-1'>MrBeast</span>
                        — I make wild videos, give away crazy prizes, and turn chaos into good. From planting trees to giving millions, it’s all about big fun with bigger impact. Hit play and join the madness.

                    </div>
                    <div className='h-[0.5px] w-[60%]  bg-amber-950/50 '></div>
                    <div className='w-[10%]'>
                        <button className='cursor-pointer relative  py-2 px-8 rounded-[20px]  backdrop-blur-lg bg-black text-white shadow-inner '>
                            Library
                        </button>
                    </div>
                </div>
            </motion.div>
        </div >
    )
}

export default MrBeast;
