import React from 'react'

export default function Card({background, icon, heading}) {
  return (
    <div className={`lg:col-span-6 py-7 px-7 items-center border-2 flex ${background} gap-6 duration-400 hover:shadow-[5px_5px_0px_#30333a]`}>
        <div className='flex justify-center items-center border-2 bg-white text-[30px] p-5 w-20 h-20'>{icon}</div>
        <div>
            <p className='text-2xl font-bold'>{heading}</p>
            <p className='text-gray-600 mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

</p>
        </div>
    </div>
  )
}
