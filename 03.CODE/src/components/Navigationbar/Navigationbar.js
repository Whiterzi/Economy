import React, {useState} from "react";





const Navbar = (props) => {
    const [view , setview] = useState(false);
    const viewdiff = view ? {borderRight: '1px solid'} : {borderRight:'none'}  
    props.borderon && setview(true)

    const [navcolor, setnavcolor] = useState("black");
    const colorswitch = navcolor === "black" ? { color: '#000' } : { color: '#FFF' }
    


    const ScrollEventListener = () => {
      if (window.scrollY > 3440 && window.scrollY < 4400) {
        setnavcolor("white")
      } else {
        setnavcolor("black")
      }
    }
    window.addEventListener('scroll', ScrollEventListener);


    

    return (
      <div id="Navbar">

        <div id="navleft">
          <img src={require('../imgs/GreenMatchICON.png')} alt="ellipse" id="Navbarlogo"></img>
          {/* <p id="NavbarlogoText" style={colorswitch}>LOGO</p> */}
        </div>
  
        <div id="navright" style={colorswitch}>
          <div className="NavbarRightBlock" style={viewdiff} ><a style={colorswitch} href="#">需求媒合</a></div>
          <div className="NavbarRightBlock" style={viewdiff} ><a style={colorswitch} href="#main02point">關於永續</a></div>
          <div className="NavbarRightBlock" style={viewdiff} ><a style={colorswitch} href="#main03point">媒合流程</a></div>
          <div className="NavbarRightBlock" style={{ border: 'none' }} ><a style={colorswitch} href="#main4point">聯繫我們</a></div>
          <div className="NavbarRightBlock" style={{ border: 'none' }}>
            <a href="#">
              {
                navcolor === "black" ? (<img src={require('../imgs/user 1.png')} />) : (<img src={require('../imgs/user (1) 1.png')} />)
              }
            </a>
          </div>
        </div>
      </div>
    )
  }

  

  export default Navbar;