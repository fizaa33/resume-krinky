import React from "react";

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex  justify-center items-center z-1000">
      <div className="bg-white w-[90%] max-w-6xl h-[75vh] mt-10 overflow-y-auto shadow-lg relative p-6 flex justify-between md:flex-row flex-col">
        {/* Close Button */}
        <button
  className="absolute top-0 right-0 bg-black text-white border-2 border-white rounded-full h-10 w-10 flex items-center justify-center hover:shadow-lg cursor-pointer"
  onClick={onClose}
>
  ✕
</button>


        
        <div className='grid grid-cols-2 gap-5 w-[100%] md:w-[55%]'>
        <img className="col-span-1" src="/img/project-1.jpg" alt="" />
        <img className="col-span-1"  src="/img/project-1.jpg" alt="" />
        <img  className="col-span-1" src="/img/project-1.jpg" alt="" />
        <img  className="col-span-1" src="/img/project-1.jpg" alt="" />
      </div>
      <div className='md:w-[45%] w-[100%] md:mt-0 mt-10 px-0 md:px-10'>
      <h2 className="text-2xl font-bold mb-5 ">
          Website Design for Marketing Agency Startup
        </h2>
        <hr className='text-gray-300' />
        <p className="text-gray-600 mt-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-gray-600 mt-4">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex gap-10">
            <div className="font-bold">
<p className="my-4 mt-8">Type:</p>
<p className="my-4">Language:</p>
<p className="my-4">Platform:</p>
<p className="my-4">Country:</p>
<p className="my-4">Live Url:</p>
            </div>
            <div className="text-gray-600">
<p className="my-4 mt-8">Website</p>
<p className="my-4">Talwind css</p>
<p className="my-4">WordPress</p>
<p className="my-4">USA</p>
<p className="my-4">www.example.com

</p>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
}
