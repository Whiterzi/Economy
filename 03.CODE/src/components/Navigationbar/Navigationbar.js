import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import './Navigationbar.scss'
import { useLocation } from "react-router-dom";




const Navbar = (props) => {
    const [view , setview] = useState(false);
    const [navcolor, setnavcolor] = useState("black");


    const colorswitch = navcolor === "black" ? { color: '#000' } : { color: '#FFF' }
    const viewdiff = view ? {borderRight: '1px solid'} : {borderRight:'none'}  
    props.borderon && setview(true)


    const ScrollEventListener = () => {
      if (window.scrollY > 3440 && window.scrollY < 4400) {
        setnavcolor("white")
      } else {
        setnavcolor("black")
      }
    }
    window.addEventListener('scroll', ScrollEventListener);


    // add class & anchor & remove inline style
    
    
    const enrlwe = ()=>{

      const elemne = document.getElementById('main4')
      elemne.scrollIntoView()
    }

    return (
    
      <div id="Navbar">
        <div id="navleft">
          <NavLink to='/'>
          <img src={require('../../imgs/GreenMatchICON.png')} alt="ellipse" id="Navbarlogo"></img>
          {/* <p id="NavbarlogoText" style={colorswitch}>LOGO</p> */}
          </NavLink>
        </div>
  
        <div id="navright" style={colorswitch}>
          <div className="NavbarRightBlock" style={viewdiff} >
            {/* <a style={colorswitch} href="#">需求媒合</a> */}
            <NavLink to='/greenmatch'>需求媒合</NavLink>
            </div>
          <div className="NavbarRightBlock" style={viewdiff} ><a style={colorswitch} onClick={enrlwe}>關於永續</a></div>
          <div className="NavbarRightBlock" style={viewdiff} ><a style={colorswitch} href="#main03point">媒合流程</a></div>
          <div className="NavbarRightBlock" style={{ border: 'none' }} ><a style={colorswitch} href="#main4point">聯繫我們</a></div>
          <div className="NavbarRightBlock" style={{ border: 'none' }}>
            <a>
              {
                navcolor === "black" ? (<img src={require('../../imgs/user 1.png')} alt="hed1" />) : (<img src={require('../../imgs/user (1) 1.png')} alt="hed2" />)
              }
            </a>
          </div>
        </div>
      </div>
    )
  }

  

  export default Navbar;