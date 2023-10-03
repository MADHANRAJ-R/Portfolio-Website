import React from 'react';
import './footer.css';
import emaillogo from '../../assets/email.png';
import linkedin from '../../assets/linkedin.png';
import githublogo from '../../assets/github.png';

const Footer = () => {
  return (
    
    <footer>
        <div class="footer-container">
            <h1>Developed by Madhanraj</h1>

            <div className="logocontainer">
            <a href="mailto:madhansr1509@gmail.com" target="_blank" rel="noreferrer" class="footer-icon">
                <img src={emaillogo} alt="Email" />
            </a>
            <a href="https://www.linkedin.com/in/madhanraj-r-46a724219" target="_blank" rel="noreferrer" class="footer-icon">
                <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/MADHANRAJ-R" target="_blank" rel="noreferrer" class="footer-icon">
                <img src={githublogo} alt="GitHub" />
            </a>
            </div>
        </div>
    </footer>

  )
}

export default Footer;