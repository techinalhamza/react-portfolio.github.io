import React from 'react'
import { useState } from 'react';
import './Navbar.css'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (


        <>
            <div className="header py-[3rem]   m-auto  h-8 flex items-center justify-between  mt-8">
                <div className="logo text-3xl font-bold text-white">port<span className='text-[#0EA4EC]'>folio</span></div>
                <div className={showMenu ? "list active " : "list "}>
                    <ul className='flex  px-4 cursor-pointer' >
                        <a href="#"><li>home</li></a>
                        <a href="#"><li>about</li></a>
                        <a href="#"><li>skills</li></a>
                        <a href="#"><li>projects</li></a>
                        <a href="#"><li>contact</li></a>
                        <a href="#"><li>certificate</li></a>
                    </ul>
                </div>
                <div className="btn flex gap-2 text-2xl">
                    <FaGithubSquare />
                    <FaLinkedin />
                    <a href="" className='hamburger'  onClick={(e) =>  {
                        e.preventDefault()
                        setShowMenu(!showMenu) 
                     }} >
                        {showMenu ? <RxCross2 /> : <GiHamburgerMenu /> }
                    </a>


                </div>
            </div>
        </>
    )
}

export default Navbar