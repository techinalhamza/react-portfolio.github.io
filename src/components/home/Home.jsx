import React from 'react'
import './Home.css'
import { FaFacebook, FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import Typical from 'react-typical'
const Home = () => {
    return (
        <>
            <div className="hero flex w-full max-w-[85vw] m-auto b-slate-800 ">

                <div className="hero-content   h-full  brder flex justify-center flex-col gap-2 ">
                    <div className="social flex text-[#0EA4EC] gap-2 text-sm">
                        <FaFacebook />
                        <RiInstagramFill />
                        <RiWhatsappFill />
                        <FaLinkedin />
                        <FaSquareGithub />
                    </div>
                    <h6 className='text-xl'>hello, it's me</h6>
                    <h1 className='text-[3rem] font-bold'>hamza abbasi</h1>
                    <h4 className='text-xl'>

                        <Typical
                            className="text-[#0EA4EC]"
                            steps={[
                                "and i'am  web developer", 5000,
                                "and i'am  web designer", 5000,
                                "and i'am  UiUx designer", 5000,
                                "and i'am  react developer", 5000
                            ]}
                            loop={Infinity}

                        />
                    </h4>
                    <p>I Specialize In Creating Interactive Websites With Web Animations,</p>
                    <div className="button">
                        <a href="#">
                            <button className='hero-btn hire'>Hire Me</button>
                        </a>
                        <a href="#">
                            <button className='hero-btn cv bg-[#0EA4EC] '>Cv Download</button>
                        </a>
                    </div>
                </div>
                <div className="hero-img flex items-center justify-center order   ">

                    <div className="img-container">
                        <div className="img"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home