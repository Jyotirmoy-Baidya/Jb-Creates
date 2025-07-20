import { Calendar } from 'lucide-react'
import React from 'react'
import { IoArrowUp } from 'react-icons/io5'
import { LuInfo } from 'react-icons/lu'
import { PiMoneyWavyLight } from 'react-icons/pi'

const arrBar = ["h-[100px]", "h-[134px]", "h-[114px]", "h-[164px]", "h-[120px]", "h-[84px]", "h-[44px]", "h-[194px]", "h-[154px]", "h-[164px]", "h-[114px]", "h-[134px]", "h-[154px]", "h-[94px]", "h-[54px]"]

const BarComp = ({ length }) => {
    return (
        <span className={`w-[14px] ${length} rounded-t-[7px] bg-gradient-to-b from-[#25d187] to-[#1f1f1f] bg-gray-200`}></span>
    )
}

const AugustasGreenCard = () => {
    return (
        <div className='h-screen w-full bg-black'>
            <section className='h-full w-full flex justify-center items-center'>

                {/* Card */}
                <div className='h-[390px] w-[390px] flex border-2 border-gray-500/20 p-2 rounded-xl  bg-[#0f0f0f] card-layout'>

                    <div className='flex flex-col h-full w-full'>
                        {/* Header  */}
                        <div className='flex justify-between h-fit w-full card-header'>
                            <div className='flex gap-[5px] items-center bg-[#1f1f1f] pt-[3px] pb-[4px] px-[6px] rounded-[5px] border border-gray-500/10'>
                                <PiMoneyWavyLight className='text-[#219e68] text-lg pt-[1px]' />
                                <div className='text-[13px] text-[#ababab]'>Revenue</div>
                            </div>

                            <div className='flex gap-[6px]'>
                                <div className='flex gap-[5px] items-center bg-[#1f1f1f] pt-[3px] pb-[4px] px-[6px] rounded-[5px] border border-gray-500/10'>
                                    <Calendar className='text-[#ababab] pt-[1px]' size={15} />
                                    <div className='text-[13px] text-[#ababab]'>June</div>
                                </div>
                                <div className='flex gap-[5px] items-center bg-[#1f1f1f] pt-[3px] pb-[4px] px-[6px] rounded-[5px] border border-gray-500/10'>
                                    <div className='text-[13px] text-[#ababab] tracking-tighter'>2 - 18</div>
                                </div>
                            </div>
                        </div>

                        {/* Body  */}
                        <div className='grow flex flex-col gap-[24px] card-content'>
                            <div className='flex items-end justify-between'>
                                <div className='flex mt-[10px]'>
                                    <p className='text-3xl font-medium mt-[6px] text-white'>$46,911</p>
                                    <div className='h-full'>
                                        <div className='rounded-[5px] border border-gray-500/10 ml-2 flex items-center bg-[#1f1f1f] text-[#219e68] pt-[2px] px-[4px] pb-[1px]'>
                                            <IoArrowUp className='text-[12px]' />
                                            <div className='text-[10px] pb-[1px]'>40.7%</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='text-[10px] text-gray-400 flex items-center gap-[2px]'>
                                    $13,565 more than last month <LuInfo />
                                </div>
                            </div>
                            <div className='rounded-[5px] p-[4px] card-graph bg-[#1f1f1f] relative grow'>
                                <div className='absolute top-1 left-2 text-[12px] text-gray-400'>$3,000</div>
                                <div className='flex graph-bars'>
                                    <div className='flex items-end h-[230px] gap-2'>
                                        <div className='text-gray-500 text-[12px]'>$0</div>
                                        {
                                            arrBar.map((ele, i) => (
                                                <React.Fragment key={i}>
                                                    <BarComp length={ele} />
                                                </React.Fragment>
                                            ))
                                        }
                                    </div>
                                </div>

                                <div className="border-t border-gray-400/40 flex justify-between text-sm text-gray-500 mt-1 pr-1 pl-4">
                                    <span>2 Jun</span>
                                    <span>18 Jun</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AugustasGreenCard