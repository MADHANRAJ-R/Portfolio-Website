import React from 'react'

import './home.css';
import resume from '../../assets/Madhanraj_Resume-.pdf';



const Home = () => {
 
  
  return (
    <section id="home">
        <div className="homeContent">
            <span className="hello">Hello,</span> <br />
            <span className="introduction">I'm <span className='myname'>Madhanraj</span> </span> <br />
            <span className="fullstacktextload">Fullstack Developer</span>
            <p className="description">I have skills in building and designing software. Currently, I am
             passionate about working on web applications using technologies such as React, Node.js, MongoDB, and
              Express.
              </p>
            <a href={resume} download="Madhanraj Resume"><button id="downloadButton" className="btn"> Download Resume</button> </a>    
        </div>
        
       
    </section>
  )
}

export default Home;