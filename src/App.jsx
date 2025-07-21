import React, { useState, useEffect } from "react";
import "./App.css";
import OrangeButton from "./components/button";
import Card from "./components/service-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faDesktop, faWarning, faColumns, faMessage, faEnvelope, faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "./components/project-card";
import {Swiper,  SwiperSlide } from "swiper/react";
import { fab, faFacebookF, faTwitter, faInstagram, faPinterest, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import "swiper/css"; 
import "swiper/css/pagination"; 
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [navbarBg, setNavbarBg] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setNavbarBg("bg-white shadow-xs");
      } else {
        setNavbarBg("bg-transparent");
      }
    };



    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "HTML", icon: faColumns , color : 'bg-[#9BD3D0]'},
    { name: "CSS", icon: faColumns, color: 'bg-[#FEC447]' },
    { name: "React JS", icon: faColumns, color : 'bg-[#FECCB5]' },
    { name: "Angular", icon: faColumns, color : 'bg-[#92B5FF]' },
    { name: "iOS App", icon: faColumns, color : 'bg-[#C4D39B]' },
    { name: "App Dev", icon: faColumns, color : 'bg-[#D2CEFF]' },
  ];

  return (
    <>
    
     <div className={`  fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarBg}`}>
      <div className="flex justify-between items-center p-6 max-w-[1300px] mx-auto">

      
      <img src="img/logo.svg" alt="Logo" />
      
      {/* Menu Button */}
      <button
        className="lg:hidden ml-auto p-2 text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      
      <ul
        className={`flex bg-white lg:bg-transparent flex-col lg:flex-row p-10 lg:p-0 gap-10 uppercase font-medium lg:w-auto w-[90%] lg:top-auto top-20 left-[5%] absolute lg:relative transition-all duration-300 ${isOpen ? "block" : "hidden"} lg:flex lg:mx-auto`}
      >
        <li><a href="#home" className="active"><span className="hover:text-secondary-orange hover:underline underline-offset-8 font-medium tracking-wider">Home</span></a></li>
        <li><a href="#services"><span className="font-medium tracking-wider hover:underline hover:text-[#EA580C] underline-offset-8">Services</span></a></li>
        <li><a href="#skills"><span className="font-medium tracking-wider hover:underline hover:text-[#EA580C] underline-offset-8">Skills</span></a></li>
        <li><a href="#portfolio"><span className="font-medium tracking-wider hover:underline hover:text-[#EA580C] underline-offset-8">Portfolio</span></a></li>
        <li><a href="#contact"><span className="font-medium tracking-wider hover:underline hover:text-[#EA580C] underline-offset-8">Contact</span></a></li>
      </ul>
      
      <div dir="rtl" className="hidden lg:block w-80 ">
      <OrangeButton data="Contact now" link={'#contact'} />
      </div>    
    </div>
</div>
      <main className="wrapper relative overflow-hidden">
        <section id="home" className="home-section max-w-[1300px] mx-auto pt-[50px] pb-[50px] lg:pt-[200px] lg:pb-[100px] bg-orange-50    flex flex-col lg:flex-row justify-around px-5">
          <div className="w-160 h-190 rounded-[50px] absolute bg-[#ffedd5] rotate-45 -top-32 -right-16 z-1"></div>
          <div className="tracking-wider pt-30 lg:w-[50%] w-[100%] z-10 text-center lg:text-left">
            <p className="uppercase font-semibold mb-10 tracking-widest">👋, My name is Krinky</p>
         <div className="flex items-center gap-5">
         <h1 className="text-[40px] lg:text-[60px] font-bold ">I'm a Developer
            </h1>
            {/* <div className="w-max">
    <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-5xl  text-[40px] lg:text-[60px] font-bold">
Developer    </h1>
  </div> */}
         </div>
            <p className="text-gray-600 mb-8 mt-5">Based in Los Angeles, California.</p>
          <OrangeButton data="let's start" link={'#contact'} />
          </div>
          <div className="z-10 lg:w-[50%] w-[100%] mt-15 lg:mt-0">
            <img className="w-[100%]" src="/img/home-banner.png" alt="" />
          </div>
        </section>
        <div className="bg-slate-900 py-9 ">
          <div className="max-w-[1300px] mx-auto flex gap-25 justify-between px-6 overflow-hidden">
          <img src="/img/brand-1.svg" alt="" />
          <img src="/img/brand-2.svg" alt="" />
          <img src="/img/brand-3.svg" alt="" />
          <img src="/img/brand-4.svg" alt="" />
          <img src="/img/brand-5.svg" alt="" />
        </div>
        </div>
        <div className="bg-white">
        <div className="flex flex-col max-w-[1300px] mx-auto lg:flex-row justify-between py-20 px-8  tracking-wide">
          <div className="w-[100%] lg:w-[50%]">
            <img src="/img/aboutme-banner.png" alt="" />
          </div>
          <div className="w-[100%] lg:w-[50%] py-15 ps-5">
            <p className="font-bold text-4xl/12">I'm a Freelancer Front-end Developer with over 3 years of experience.</p>
            <p className="text-gray-600 my-5 text-base/7 md:text-lg/7">I'm a Freelancer Front-end Developer with over 3 years of experience. I'm from San Francisco. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.</p>
            <div className="flex gap-13">
              <div >
                <p className="text-secondary-orange font-bold text-3xl pb-1">285+</p>
                <span className="text-gray-600">Project Completed</span>
              </div>
              <div>
                <p className="text-secondary-orange font-bold text-3xl pb-1">190+</p>
                <span className="text-gray-600">Happy Clients</span>
              </div>
            </div>
            <div className="py-8 flex gap-5">
            <OrangeButton data='contact me' link={'#contact'}  />
              <a href="#portfolio" className='hover:bg-[#EA580C] text-sm font-medium tracking-[2px] text-white px-3 py-[10px] hover:shadow-box  shadow-box-hover bg-[#0f172a] uppercase transition duration-550 cursor-pointer'>Portfolio</a>
            </div>
          </div>
        </div>
</div>
        <section id="services" className="home-section pt-[90px] pb-[90px]  lg:pt-[90px] lg:pb-[90px] relative overflow-hidden bg-[url(/img/bg-effect-1.png)] bg-cover bg-no-repeat">
        <div className="max-w-[1300px] mx-auto">
          <p className="uppercase text-center text-5xl tracking-wide font-bold">my services</p>
          <div className="grid lg:grid-cols-12 md:grid-cols-2 gap-5 grid-cols-1 items-center mt-10 p-5 lg:p-10">
            <Card background='bg-[#9BD3D0]' icon={<FontAwesomeIcon icon={faPhone} />} heading='Web Design' />
            <Card background='bg-[#FEC447]' icon={<FontAwesomeIcon icon={faDesktop} />} heading='Web Design' />
            <Card background='bg-[#FECCB5]' icon={<FontAwesomeIcon icon={faWarning} />} heading='Web Design' />
            <Card background='bg-[#92B5FF]' icon={<FontAwesomeIcon icon={faColumns} />} heading='Web Design' />
            <Card background='bg-[#C4D39B]' icon={<FontAwesomeIcon icon={faWarning} />} heading='Web Design' />
            <Card background='bg-[#D2CEFF]' icon={<FontAwesomeIcon icon={faColumns} />} heading='Web Design' />
          </div>
          </div>
        </section>

        <section id="skills" className="home-section pt-[100px]   bg-white relative overflow-hidden px-10">
          <div className="max-w-[1300px] mx-auto flex md:flex-row flex-col justify-between items-center gap-10">

         
          <div className="w-[100%] md:w-[50%] ">
            <p className="uppercase md:text-5xl text-4xl tracking-wide font-bold">my skills</p>
           
    <div className="grid gap-4 grid-cols-12 mt-15">
      {skills.map((skill, index) => (
        <div key={index} className={`duration-400 hover:shadow-[5px_5px_0px_#30333a] flex items-center p-4 gap-2 border-2 ${skill.color} col-span-6`}>
          <div className="w-10 h-10 p-5 border-2 bg-white text-[22px] flex justify-center items-center">
            <FontAwesomeIcon icon={skill.icon} />
          </div>
          <span className="font-bold">{skill.name}</span>
        </div>
      ))}
    </div>

          </div>
          <div className="w-[100%] md:w-[50%] px-5 lg:mt-0 mt-10">
            <img className="lg:mx-0 mx-auto" src="/img/skills.png" alt="" />
          </div>
          </div>
        </section>
        <div className="bg-slate-900 py-10  px-5">
          <div className="max-w-[1300px] mx-auto flex md:flex-row flex-col justify-center gap-5 items-center  md:justify-between ">
            <p className=" text-[25px] md:text-[30px] lg:text-[35px] m-0 text-white font-[600]">Intrested working with me?</p>
            <a href="#contact" className='bg-[#facc15] text-sm font-medium tracking-[2px]  px-3 py-[10px] shadow-[5px_5px_0px_#ca8a04]   hover:bg-[#EA580C] hover:text-white uppercase transition duration-550 cursor-pointer md:me-20 hover:shadow-[5px_5px_0px_#facc15]'>Contact now</a>
          </div>
          </div>
        <section id="portfolio" className="home-section py-[90px] bg-orange-50 relative overflow-hidden">
          <div className="max-w-[1300px] mx-auto">

        
        <p className="uppercase text-center md:text-5xl text-4xl tracking-wide pb-5 font-bold ">Latest projects</p>
        <ProjectCard  />
        <ProjectCard flex={'md:flex-row-reverse flex-col'} />
        <ProjectCard />
        <ProjectCard flex={'md:flex-row-reverse flex-col'} />
          </div>
        </section>
        <div className="bg-white py-[90px]">
          <div className="max-w-[1300px] mx-auto">

          
        <p className="uppercase text-center md:text-5xl text-4xl tracking-wide pb-10 font-bold ">testimonial</p>
        <div className="relative p-5">
      <Swiper
        spaceBetween={20}
        breakpoints={{
          768: { slidesPerView: 1 },
          1000: { slidesPerView: 2 }
        }}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Pagination]}
        className="mySwiper w-full h-[270px]"
      >
        {[...Array(5)].map((_, index) => (
          <SwiperSlide key={index} className="relative overflow-visible">
            <div className="duration-400 hover:shadow-[5px_5px_0px_#30333a] transition-all p-8 items-center border-2 gap-10 bg-white ">
              <div className="flex gap-7">
                <img className="border-2 h-27" src="/img/avatar-1.jpg" alt="" />
                <div>
                  <p className="text-gray-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Itaque ratione eius, quos doloribus minus pariatur esse iure
                    aut? Voluptates molestiae.
                  </p>
                  <p className="text-lg font-bold mt-3 mb-1">
                    Jennifer Lutheran
                  </p>
                  <p className="text-sm text-gray-600">CEO at pxdraft</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
    </div>
        </div>

        <section id="contact" className="home-section pt-[90px] bg-slate-900 relative overflow-hidden ">
      <div className="flex flex-col max-w-[1300px] mx-auto lg:flex-row  justify-between px-5 pb-[100px]">
      <div className="w-[100%] lg:w-[50%] bg-white p-10">
            <p className="text-3xl font-bold">Get in touch</p>
            <p className="text-gray-600 text-lg my-3">Our friendly team would love to hear from you.

</p>
<div className="grid grid-cols-12 gap-5">
  <div className=" col-span-12 lg:col-span-6 ">
    <p className="text-gray-600 my-3 lg:me-3">First name</p>
    <input type="text" className="border-1 p-2 w-[100%]" placeholder="Name *" />
  </div>
  <div className=" col-span-12 lg:col-span-6 ">
    <p className="text-gray-600 my-3 lg:me-3">Your Email</p>
    <input type="text" className="border-1 p-2 w-[100%]" placeholder="Email *" />
  </div>
</div>
<p className="text-gray-600 my-3 lg:me-3">Subject</p>
<input type="text" className="border-1 p-2 w-[100%]" placeholder="Subject *" />
<p className="text-gray-600 my-3 lg:me-3">Your message</p>
<textarea type="text" className="border-1 p-2 w-[100%] h-[130px] mb-5" placeholder="Your Message *" />
<a className='bg-[#facc15] text-sm font-medium tracking-[2px] px-3 py-[10px] shadow-[5px_5px_0px_#ca8a04] hover:shadow-[5px_5px_0px_#facc15]  hover:bg-[#EA580C] hover:text-white uppercase transition duration-550 cursor-pointer'>Send message</a>
          </div>
          <div className="w-[100%] lg:w-[35%] lg:mt-0 mt-10">
            <img className="w-[100%]" src="/img/contact-bg.png" alt="" />
            <div className="flex gap-5 items-center">
              <div className="h-15 w-15 bg-[#9BD3D0] flex justify-center items-center text-3xl text-slate-900 mt-10 mb-5">
              <FontAwesomeIcon icon={faEnvelope} />

              </div>
              <div>
                <p className="uppercase text-gray-300">Phone</p>
                <p className="font-semibold text-[18px] text-gray-100">+01 123 654 8096

</p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className="h-15 w-15 bg-[#FEC447] flex justify-center items-center text-3xl text-slate-900 mt-5 mb-5">
              <FontAwesomeIcon icon={faPhone} />

              </div>
              <div>
                <p className="uppercase text-gray-300">Mail</p>
                <p className="font-semibold text-[18px] text-gray-100">info@domainname.com
</p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className="h-15 w-15 bg-[#FECCB5] flex justify-center items-center text-3xl text-slate-900 mt-5 mb-5">
              <FontAwesomeIcon icon={faLocationDot} />

              </div>
              <div>
                <p className="uppercase text-gray-300">Visit My Studio
                </p>
                <p className="font-semibold text-[18px] text-gray-100">Warnwe Park Streetperrine, <br />
                FL 33157 New York Citys

</p>
              </div>
            </div>
          </div>
      </div>
      <div className="flex-col md:justify-between flex md:flex-row gap-5 p-5 border-t-1 border-gray-600 max-w-[1300px] mx-auto">
<div className="flex gap-5 text-gray-100  items-center lg:m-0 m-auto">
<FontAwesomeIcon className="cursor-pointer hover:text-secondary-orange" icon={faFacebookF} />
<FontAwesomeIcon className="cursor-pointer hover:text-secondary-orange" icon={faTwitter} />
<FontAwesomeIcon className="cursor-pointer hover:text-secondary-orange" icon={faInstagram} />
<FontAwesomeIcon className="cursor-pointer hover:text-secondary-orange" icon={faLinkedinIn} />
<FontAwesomeIcon className="cursor-pointer hover:text-secondary-orange" icon={faPinterest} />

</div>
<div className="lg:m-0 m-auto">
  <span className="text-gray-400">© 2023 copyright all right reserved by pxdraft</span>
</div>
      </div>
        </section>
      </main>
    </>
  );
}

export default App;

