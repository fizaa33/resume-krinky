import React from 'react'

function OrangeButton({data, onClick, link}) {
  return (
    <a href={link} className='bg-[#EA580C] text-sm font-medium tracking-[2px] text-white px-3 py-[10px] shadow-box  hover:shadow-box-hover hover:bg-[#0f172a] uppercase transition duration-550 cursor-pointer'
    onClick={onClick}>{data}</a>
  )
}

export default OrangeButton