import React from 'react'
import { NavLink } from 'react-router-dom'

const Abraham = () => {
    return (
        <div className='h-screen w-full'>
            <div className='h-full w-full flex justify-center items-center bg-black'>
                <NavLink to={'/abraham/product-details'} className="flex items-end h-16 w-36">
                    <button className='cursor-pointer hover:bg-white/20 border-2 rounded-lg border-white text-white w-full h-full font-medium text-lg font-sans'>
                        Product Details
                    </button>
                </NavLink>
            </div>
        </div>
    )
}

export default Abraham