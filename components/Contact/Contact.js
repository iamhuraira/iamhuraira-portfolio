import React, { useState } from "react"
// import contact1 from "./contact1.png"
import { SiUpwork } from "react-icons/si"
import { BsInstagram } from "react-icons/bs"
import { AiFillLinkedin, AiOutlineArrowRight } from "react-icons/ai"
import style from "./Contact.module.css";
import Gstyle from "../../styles/globalStyle.module.css"
import Hstyle from "../../styles/Home.module.css"
import info from "./info"

const Contact = () => {
  const url = {
    upwork: "https://www.upwork.com",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com"
  }
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",})

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
    )
  }
  return (
    <>
      <section className={style.Contact} id='contact'>
        <div className={`${Gstyle.container} ${Gstyle.top}`}>
          <div className={`${Gstyle.heading} ${Gstyle.textcenter}`}>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className={`${Hstyle.content} ${Gstyle.dflex} ${style.d_flex}`}>
            <div className={style.left}>
              <div className={`${style.box} ${Gstyle.box_shodow}`}>
                <div className={`${style.img}`}>
                  <img src='contact1.png' alt='' />
                </div>
                <div className={style.details}>
                  <h1>{info.name}</h1>
                  <p>{info.job}</p>
                  <p>{info.desc}</p> <br />
                  <p>Phone: {info.phone}</p>
                  <p>Email: {info.email}</p> <br />
                  <span>FIND WITH ME</span>
                  <div className={`${Gstyle.button} ${Gstyle.fflex }`} >
                    <button className={Gstyle.btn_shadow} >
                      <a href={url.upwork} target='_blank'><SiUpwork /></a>
                    </button>
                    <button className={Gstyle.btn_shadow}>
                      <a href={url.linkedin} target='_blank'><AiFillLinkedin /></a>
                    </button>
                    <button className={Gstyle.btn_shadow}>
                      <a href={url.instagram} target='_blank'><BsInstagram /></a>
                    </button>
                  </div>
              
                
                </div>
              </div>
            </div>

            <div className={`${style.right} ${Gstyle.box_shodow}`}>
              <form onSubmit={formSubmit}>
                <div className={Gstyle.fflex}>
                  <div className={`${style.input} ${Gstyle.row}`} >
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                  <div className={`${style.input} ${Gstyle.row}`}>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className={style.input}>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className={style.input}>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className={style.input}>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className={Gstyle.btn_shadow}>
                  SEND MESSAGE  <AiOutlineArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
