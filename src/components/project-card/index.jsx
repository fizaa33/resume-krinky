import React, { useState } from 'react'
import OrangeButton from '../button'
import Modal from '../modal';

export default function ProjectCard({flex}) {
    const [showModal, setShowModal] = useState(false);
        return (
        <div className={`${flex} flex md:flex-row flex-col justify-between p-5 items-center `}>
            <div className='px-10 py-7 w-[100%] md:w-[50%]'>
                <img className='border-2 duration-400 hover:shadow-[5px_5px_0px_#30333a]' src="/img/project-1.jpg" alt="" />
            </div>
            <div className=' p-5 w-[100%] md:w-[47%]'>
                <span className=' uppercase rounded-full px-4 py-3 font-light text-sm bg-[#ffedd5]'>web design</span>
                <p className="font-bold text-3xl/12 my-7">Website Design for Marketing Agency Startup
                </p>
                <p className='text-gray-600 mb-6'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores

                </p>
<OrangeButton data ='view project' onClick={() => setShowModal(true)} />

            </div>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
     
      </Modal>
        </div>
    )
}
