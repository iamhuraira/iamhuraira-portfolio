import React from "react"

import Gstyle from "../../styles/globalStyle.module.css"


const Footer = () => {
  return (
    <>
      <footer>
        <div className={`${Gstyle.conatiner} ${Gstyle.textcenter}`}>
          {/* <div className='img'>
            <img src='logoprofile.png' alt='' />
          </div> */}
          <p>© 2023. All rights reserved by Abu Huraira.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
