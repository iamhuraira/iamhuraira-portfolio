import React from "react"
import style from "./Features.module.css";

import Gstyle from "../../styles/globalStyle.module.css"
import Hstyle from "../../styles/Home.module.css"
import data from "./Features-Api"
import Card from "./Card"

const Features = () => {
  return (
    <>
      <section className={`${style.features} ${Gstyle.top}`} id='features'>
        <div className={Gstyle.container}>
          <div className={Gstyle.heading}>
            <h4>Features</h4>
            <h1>What I Do</h1>
          </div>

          <div className={`${Hstyle.content} ${Gstyle.grid}`}>
            {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} link={val.link}/>
            })}

            {/*<div className='box btn_shadow'>
              <img src='https://img.icons8.com/glyph-neue/64/000000/polyline.png' alt='' />
              <h2>Personal Portfolio April</h2>
              <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.</p>
              <a href=''>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>*/}
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
