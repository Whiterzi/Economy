/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Mainpage.scss';
import part1back from '../../imgs/waters.png';
import part2back from '../../imgs/Slice 1 (4) 1.png';
import part3back from '../../imgs/Slice 1 (3) 1 (1).png';
import part4back from "../../imgs/image 2.png";




const MainPages = () => {
  return (
    <>
      <div id='main01'>
        <img src={part1back} alt=""/>
      </div>    
      <div id='main02'>
        <div id='sustainability' />
        <div id="main02bar"/>
        <img src={part2back} alt=""/>
      </div>
      <div id="main03">
        <div id="how-it-works" />
        <img src={part3back} alt=""/>
        </div>
      <div id="main4">
        <div id='contact-us' />
        <img src={part4back} alt=""/>
        <ContactUS />
      </div>
      <div id='page-bottom'/>
    </>

  )
}

const ContactUS = () => {
  return (
    <div id='contact-main-frame'>
      <div id='contact-title'>
        Contact Us
      </div>
      <div id="contact-subtitle">
        想了解什麼?
      </div>
      <textarea id='tx-name' className="textarea" placeholder='name' />
      <textarea id='tx-company' className="textarea" placeholder='company' />
      <textarea id='tx-mail' className="textarea" placeholder='email address' />
      <textarea id='tx-quest' className="textarea higher-textarea" placeholder='question' />
      <div id='button-align'>
        <button id='save-button'>SAVE</button>
      </div>
    </div>
  )
}
export default MainPages;