import React from 'react'
import { NavLink } from 'react-router-dom'

const Augustas = () => {
    return (
        <div className='h-screen w-full'>
            <div className='h-full w-full flex justify-center items-center bg-black'>
                <NavLink to={'/augustas/green-card'} className="flex items-end h-16 w-36">
                    <button className='cursor-pointer hover:bg-green-700/20 border-2 rounded-lg border-green-500 text-white w-full h-full font-medium text-lg font-sans'>
                        Green-card
                    </button>
                </NavLink>
            </div>
        </div>
    )
}

export default Augustas