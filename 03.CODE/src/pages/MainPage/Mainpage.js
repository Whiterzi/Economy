/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Mainpage.scss';




const MainPages = () => {
  return (
    <>
      <div style={{ height: '5137.5px' }}>
        {/* water png */}
        <div id="main01">
          <div id="main01text">當永續行動成為生活中的一部份</div>
          <div id="vector5" />
          <div id="vector7" />
        </div>
        {/* Sustanability */}
        <div id="main02">
          <div id='sustainability' />
          <div id="main02bar">
          </div>
        </div>
      </div>
      {/* How it works */}
      <div style={{ height: '2789px' }} id='how-it-works'>
        <div id="main03" />
      </div>
      {/* Contact Us */}
      <div id="main4">
        <div id='contact-us' />
        <div id="main4img" />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ContactUS />
        </div>
      </div>
      {/* buttom */}
      <div style={{ width: '100%', height: '80px', background: '#C1AC95' }}></div>
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
      <textarea className="textarea" placeholder='name' />
      <textarea className="textarea" placeholder='company' />
      <textarea className="textarea" placeholder='email address' />
      <textarea className="textarea higher-textarea" placeholder='question' />
      <button id='save-button'>SAVE</button>
    </div>
  )
}
export default MainPages;