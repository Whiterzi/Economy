import React, { useState, useEffect } from "react";
import './Navigationbar.scss'
import { useLocation, useNavigate } from "react-router-dom";
import iconwhite from '../../imgs/user 1.png';




const Navbar = () => {
  // const [navcolorwhite, setnavcolor] = useState(false);
  const currentpath = useLocation().pathname
  const blockclass = `navbar-right-block ${currentpath === '/' && 'blockborder'}`
  const Navigate = useNavigate()


  const movetoSustainbility = () => {
    currentpath !== '/' && Navigate('/')
    setTimeout(() => {
      const SustainbilityAnchor = document.getElementById('sustainability')
      SustainbilityAnchor.scrollIntoView()
    }, 0)
  }
  const movetoHowItWorks = () => {
    currentpath !== '/' && Navigate('/')
    setTimeout(() => {
      const HowItWorks = document.getElementById('how-it-works')
      HowItWorks.scrollIntoView()
    })
  }
  const movetoContactUs = () => {
    currentpath !== '/' && Navigate('/')
    setTimeout(() => {
      const ContactUs = document.getElementById('contact-us')
      ContactUs.scrollIntoView()
    })
  }
  const movetoHomepage = () => {
    currentpath !== '/' && Navigate('/')
    setTimeout(() => {
      const Header = document.getElementById('root')
      Header.scrollIntoView()
    })
  }


  // useEffect(() => {
  //   if (currentpath === '/') {
  //     const observerTop = new IntersectionObserver((entries) => {
  //       console.log(entries[0].boundingClientRect.y)
  //       if(entries[0].boundingClientRect.y<=0  && entries[0].boundingClientRect.y>=-3000){
  //         setnavcolor(true);
  //       }else{
  //         setnavcolor(false)
  //       }
  //     }, { threshold: [0] })
  //     let targetbar = document.querySelector('#main02bar')
  //     observerTop.observe(targetbar)
  //   }
  // })

  return (
    <div className={`${currentpath === '/greenmatch' && 'greenbackground'}`} id="navbar">
      <div id="navleft">
        <div onClick={movetoHomepage}>
          <img id='home-logo' src={require('../../imgs/GreenMatchICON.png')} alt="ellipse"></img>
        </div>
      </div>
      <div id="navright">
        <div className={blockclass} onClick={() => { Navigate('/greenmatch') }}  >
          需求媒合
        </div>
        <div className={blockclass} onClick={movetoSustainbility}  >
          關於永續
        </div>
        <div className={blockclass} onClick={movetoHowItWorks}>
          媒合流程
        </div>
        <div className={`navbar-right-block`} onClick={movetoContactUs}>
          聯繫我們
        </div>
        <div className="navbar-right-block">
            <img id='right-icon' src={iconwhite} alt='icon' />
        </div>
      </div>
    </div>
  )
}



export default Navbar;