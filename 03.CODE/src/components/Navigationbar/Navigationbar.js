import React, { useState, useEffect } from "react";
import './Navigationbar.scss'
import { useLocation, useNavigate } from "react-router-dom";
import iconwhite from '../../imgs/user 1.png';
import iconblack from '../../imgs/user (1) 1.png';




const Navbar = () => {
  const [navcolorwhite, setnavcolor] = useState(false);
  const currentpath = useLocation().pathname
  const blockclass = `navbar-right-block ${currentpath === '/' && 'blockborder'} ${navcolorwhite && 'textwhite'}`
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


  useEffect(() => {
    if (currentpath === '/') {
      const observer = new IntersectionObserver((entries) => {
        // console.log(entries[0].boundingClientRect)
        if ((entries[0].boundingClientRect.y > -60 && entries[0].boundingClientRect.y < 0) && !navcolorwhite) {
          setnavcolor(true)
        } else if (navcolorwhite && (entries[0].boundingClientRect.y <= -60 || entries[0].boundingClientRect.y >= 0)) {
          setnavcolor(false)
        }
      }, { threshold: [0, 0.5, 1] })
      const targetbar = document.querySelector('#main02bar')
      observer.observe(targetbar)
    }
  })

  return (
    <div className={`${currentpath === '/greenmatch' && 'greenbackground'}`} id="navbar">
      <div id="navleft">
        <div onClick={movetoHomepage}>
          <img src={require('../../imgs/GreenMatchICON.png')} alt="ellipse"></img>
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
        <div className={`navbar-right-block ${navcolorwhite && 'textwhite'}`} onClick={movetoContactUs}>
          聯繫我們
        </div>
        <div className="navbar-right-block">
          {
            <img src={!navcolorwhite ? iconwhite : iconblack} alt='icon' />
          }
        </div>
      </div>
    </div>
  )
}



export default Navbar;