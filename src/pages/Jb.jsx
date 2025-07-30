import React from 'react'
import { NavLink } from 'react-router-dom'

const Jb = () => {
    return (
        <div className="h-screen w-full bg-black">
            <div className='flex justify-center items-center h-full w-full'>
                <div className='grid gap-5 grid-cols-3 '>
                    <NavLink to={'/jb/mrbeast'} className="flex items-end h-16 w-36">
                        <button className='cursor-pointer hover:bg-green-700/20 border-2 rounded-lg border-green-500 text-white w-full h-full font-medium text-lg font-sans'>
                            MR. Beast
                        </button>
                    </NavLink>

                    <NavLink to={'/jb/furniture-landing-page'} className="flex items-end h-16 w-36">
                        <button className='cursor-pointer hover:bg-green-700/20 border-2 rounded-lg border-green-500 text-white w-full h-full font-medium text-lg font-sans'>
                            Furniture
                        </button>
                    </NavLink>

                    <NavLink to={'/jb/n8n-post'} className="flex items-end h-16 w-36">
                        <button className='cursor-pointer hover:bg-green-700/20 border-2 rounded-lg border-green-500 text-white w-full h-full font-medium text-lg font-sans'>
                            N8N
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Jb