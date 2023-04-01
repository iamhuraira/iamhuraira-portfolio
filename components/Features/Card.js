import React from "react";
import style from "./Features.module.css";
import Gstyle from "../../styles/globalStyle.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const Card = (props) => {
  return (
    <>
      <div className={`${style.box} ${Gstyle.btn_shadow}`}>
        <img src={props.image} alt='' style={{width:'30px', height:'30px'}} />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <a href={props.link} target="_blank">
         <AiOutlineArrowRight />
        </a>
      </div>
    </>
  )
}

export default Card
