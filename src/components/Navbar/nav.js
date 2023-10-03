import React, { useState } from 'react';
import './nav.css';
import menu from '../../assets/menulogo.png'

import githugImg from '../../assets/github.png';
import {Link} from 'react-scroll';
const Navbar = () => {
  const [showmenu,setshowmenu]=useState(false);
  return (
    <nav className='navbar'>
        <p className="name"> &lt;MADAN /&gt; </p>
        <div className='desktopmenu'>
          
          <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={100} className="desktopmenulistitem">Home</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={100} className="desktopmenulistitem">About</Link>
          <Link activeClass='active' to='skillsection' spy={true} smooth={true} offset={-50} duration={100} className="desktopmenulistitem">Skills</Link>
          <Link activeClass='active' to='projectsection' spy={true} smooth={true} offset={-50} duration={100} className="desktopmenulistitem">Project</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={100} className="desktopmenulistitem">Contact</Link>
            

        </div>
        <a href='https://github.com/MADHANRAJ-R' target='_blank' rel='noopener noreferrer'>
          <button className='githubBtn'>
            <img src={githugImg} alt='' className='githubImg' />
              GitHub
          </button>
        </a>
          
        
          
        

        <img src={menu} alt="Menu" className="mobilemenu" onClick={()=>setshowmenu(!showmenu)} />
        <div className='navmenu' style={{display:showmenu?'flex':'none'}}>

          <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={100} className="listitem">Home</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="listitem"onClick={()=>{setshowmenu(false)}}>About</Link>
          <Link activeClass='active' to='skillsection' spy={true} smooth={true} offset={-50} duration={500} className="listitem"onClick={()=>{setshowmenu(false)}}>Skills</Link>
          <Link activeClass='active' to='projectsection' spy={true} smooth={true} offset={-50} duration={500} className="listitem"onClick={()=>{setshowmenu(false)}}>Project</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listitem"onClick={()=>{setshowmenu(false)}}>Contact</Link>

        </div>

    </nav>
  )
}

export default Navbar;