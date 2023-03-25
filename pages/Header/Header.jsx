import React, { useState } from "react"
import style from "./header.module.css"
import logo from '../../public/logoprofile.png'
// import { Link } from "react-router-dom"
import Script from "next/script"
import Image from "next/image"
import Gstyle from "../../styles/globalStyle.module.css"

import { IoCloseSharp } from "react-icons/io5"
import { HiMenu } from "react-icons/hi"

const Header = () => {
    // fixed Header
    
    // window.addEventListener("scroll", function () {
    //     const header = document.querySelector(".header")
    //     header.classList.toggle("active", window.scrollY > 100)
    // })
    // Toogle Menu
    const [Mobile, setMobile] = useState(false)
    return (
        <>
            <header className={style.header}>
                <div className={`${Gstyle.container} ${Gstyle.dflex}`}>
                    <div className={style.logo}>
                        <a href="#home">
                          <Image src={logo}/>  </a>
                    </div>

                    <div className={style.navlink}>
                        <ul className={Mobile ? `${style.navlinksmobile}` : `${style.link} ${Gstyle.fflex} ${Gstyle.uppercase}`} onClick={() => setMobile(false)}>
                            {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
                            <li>
                                <a href='#home'>home</a>
                            </li>
                            <li>
                                <a href='#features'>features</a>
                            </li>
                            <li>
                                <a href='#portfolio'>portfolio</a>
                            </li>
                            {/* <li>
                <a href='#resume'>resume</a>
              </li> */}
                            <li>
                                <a href='#clients'>clients</a>
                            </li>
                            {/* <li>
                <a href='#blog'>blog</a>
              </li> */}
                            <li>
                                <a href='#contact'>contact</a>
                            </li>
                            <li>
                                <button className={style.homebtn}><a href="#home">Hire Me</a></button>
                            </li>
                        </ul>

                        <button className={style.toggle} onClick={() => setMobile(!Mobile)}>
                            {Mobile ?<IoCloseSharp className={`${style.close} ${style.homebtn}`}/> : <HiMenu className={style.open}/> }
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header