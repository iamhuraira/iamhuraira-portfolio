import React from "react";
import style from "./Features.module.css";
import Gstyle from "../../styles/globalStyle.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";

const Card = (props) => {
  return (
    <>
      <div className={`${style.box} ${Gstyle.btn_shadow}`}>
        <Image src={props.image} alt='img' width={1000} height={1000} />
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
