import React from "react"
import style from "./Home.module.css"
import Gstyle from "../../styles/globalStyle.module.css"
import boy from "../../public/boy.png"
import skill1 from "../../public/node.png"
import skill2 from "../../public/nextjs.png"
import skill3 from "../../public/react.png"
import { SiUpwork } from "react-icons/si"
import { BsInstagram } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"
import { GrNode } from "react-icons/gr"
import { FaReact } from "react-icons/fa"
import { SiNextdotjs } from "react-icons/si"

import Image from "next/image"
import { Typewriter } from "react-simple-typewriter"


const HeroSection = () => {

  const url = {
    upwork: "https://www.upwork.com",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com"
  }
  

  return (
    <>
      <section className={style.hero} id='HeroSection'>
        <div className={`${Gstyle.container} ${Gstyle.fflex} ${style.fflex}   ${Gstyle.top}`} >
          <div className={`${style.left} ${Gstyle.top}`}>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <br/><span>Abu Huraira</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Professional Coder.", " MERN Stack Developer.", " Expert Front-End Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>

            <div className={`${style.hero_btn} ${Gstyle.dflex}`}>
              <div className={`${style.col_1} ${style.colorSocial}`}>
                <h4>FIND WITH ME</h4>
                <div className={Gstyle.button} >
                  <button className={Gstyle.btn_shadow} >
                    <a href={url.upwork} target='_blank'><SiUpwork /></a>
                  </button>
                  <button className={Gstyle.btn_shadow}>
                    <a href={url.linkedin}><AiFillLinkedin/></a>
                  </button>
                  <button className={Gstyle.btn_shadow}>
                    <a href={url.instagram}><BsInstagram/></a>
                  </button>
                </div>
              </div>
              <div className={`${style.col_1} ${style.colorbtn}`}>
                <h4>BEST SKILL ON</h4>
                <button className={Gstyle.btn_shadow}>
                  <GrNode />
                </button>
                <button className={Gstyle.btn_shadow}>
                  <SiNextdotjs />
                </button>
                <button className={Gstyle.btn_shadow}>
                  <FaReact />
                </button>
              </div>
            </div>
          </div>
          <div className={style.right}>
            <div className={style.right_img}>
              <Image src={boy} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
