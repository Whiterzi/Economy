import React, { useState, useEffect } from "react";
import './Navigationbar.scss'
import { useLocation , useNavigate} from "react-router-dom";




const Navbar = () => {
  const [navcolor, setnavcolor] = useState(false);
  const currentpath = useLocation().pathname
  const blockclass = `navbarrightblock ${currentpath === '/' && 'blockborder'} ${navcolor && 'textwhite' }`
  const Navigate = useNavigate()


  const movetoSustainbility = ()=>{
    currentpath!=='/' && Navigate('/')
    setTimeout(()=>{
      const SustainbilityAnchor = document.getElementById('sustainability')
      SustainbilityAnchor.scrollIntoView()  
    },0)    
  }
  const movetoHowItWorks = ()=>{
    currentpath!=='/' && Navigate('/')
    setTimeout(()=>{
      const HowItWorks = document.getElementById('how-it-works')
      HowItWorks.scrollIntoView()
    })
  }
  const movetoContactUs = ()=>{
    currentpath!=='/' && Navigate('/')
    setTimeout(()=>{
      const ContactUs = document.getElementById('contact-us')
      ContactUs.scrollIntoView()
  })
  }
  const movetoHomepage = ()=>{
    currentpath!=='/' && Navigate('/')
    setTimeout(()=>{
      const Header = document.getElementById('root')
      Header.scrollIntoView()
    })
  }

  
  useEffect(()=>{
    if(currentpath==='/'){
      const observer = new IntersectionObserver((entries)=>{
        console.log(entries[0].boundingClientRect)
        if((entries[0].boundingClientRect.y>-60 && entries[0].boundingClientRect.y<0)&& !navcolor ){
          setnavcolor(true)
        }else if(navcolor && (entries[0].boundingClientRect.y<=-60 || entries[0].boundingClientRect.y>=0)){
          setnavcolor(false)
        }
      },{threshold:[0,0.5,1]})
      const targetbar = document.querySelector('#main02bar')
      observer.observe(targetbar)
    }
  })

  return (
    <div className={`${currentpath === '/greenmatch' && 'greenbackground'}`} id="Navbar">
      <div id="navleft">
        <div onClick={movetoHomepage}>
          <img src={require('../../imgs/GreenMatchICON.png')} alt="ellipse" id="Navbarlogo"></img>
        </div>
      </div>
      <div id="navright">
        <div className={blockclass} onClick={()=>{Navigate('/greenmatch')}}  >
          需求媒合
        </div>
        <div className={blockclass} onClick={movetoSustainbility}  >
          關於永續
        </div>
        <div className={blockclass} onClick={movetoHowItWorks}>
          媒合流程
        </div>
        <div className={`navbarrightblock ${navcolor && 'textwhite'}`} onClick={movetoContactUs}>
          聯繫我們
        </div>
        <div className="navbarrightblock">
          {
            !navcolor ? (<img src={require('../../imgs/user 1.png')} alt="hed1" />) : (<img src={require('../../imgs/user (1) 1.png')} alt="hed2" />)
          }
        </div>
      </div>
    </div>
  )
}



export default Navbar;