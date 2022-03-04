/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Mainpage.css';
import Navbar from '../../components/Navigationbar';


const MainPages = ()=>{
    return(
    <>
    <Navbar/>
    <div style={{ height: '5137.5px' }}>

      {/* water png */}
      <div id="main01">
        <a href="#main02point"><div id="main01TEXT">當永續行動成為生活中的一部份</div></a>
        <div id="vector5" />
        <div id="vector7" />
      </div>
      {/* Sustanability */}
      <div id="main02">
        <a name="main02point">{ }</a>
        <div id="main02bar">
        </div>
      </div>

    </div>
    {/* How it works */}
    <div style={{ height: '2789px' }}>
      <div id="main03">
        <a name="main03point">{ }</a>
      </div>
    </div>
    {/* Contact Us */}
    <div id="main4">
      <a name="main4point">{ }</a>
      <div id="main4img" />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ContactUS />
      </div>
    </div>
    {/* buttom */}
    <div style={{width:'100%',height:'80px',background:'#C1AC95'}}></div>
  </>
    )
  }



  
  const ContactUS = ()=>{
    const TextAreaStyle = {marginTop:'20px',marginLeft:'150px',width:'730px',height:'50px',padding:'10px'}
    const ButtonStyle = {marginTop:'20px',marginLeft:'150px',width:'150px',height:'80px',textAlign:'center',verticalAlign:'middle'
    ,fontSize:'30px',background:'#C1AC95',border:'none',borderRadius:'15px',color:'#FFF',fontWeight:'bold'}
    return(
      <div style={{ width: '1000px', marginTop: '150px' }}>
            <div style={{ width: '100%', textAlign: 'center', fontSize: '50px' }}>Contact Us</div>
            <div style={{ width: '100%', textAlign: 'left', fontSize: '20px', paddingLeft: '150px', fontFamily: 'bold', marginTop: '50px' }}>想了解什麼?</div>
            <textarea style={TextAreaStyle} placeholder='name'></textarea>
            <textarea style={TextAreaStyle} placeholder='company'></textarea>
            <textarea style={TextAreaStyle} placeholder='email address'></textarea>
            <textarea style={{...TextAreaStyle , height:'150px'}} placeholder='question'></textarea>
            <button style={ButtonStyle}>SAVE</button>
          </div>
    )
  }

  

  export default MainPages;