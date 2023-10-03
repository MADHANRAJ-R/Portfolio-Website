import React from 'react';
import './project.css';
import project1 from '../../assets/weatherImg1.png'
import project2 from '../../assets/todoimg.png'
import project3 from '../../assets/portfolioImg.png'

const Project = () => {
  
  return (
    <section id="projectsection">
        <h1 className='prh1'>Projects</h1>
        <div className="prcontainer">

           <div className="container">
              <img src={project1} alt="project1img" className="projectImg" />
              <p className='prpara'>Weather Forecast API</p>
              <div className="demogit">
                 <a href="https://weather-api-react-alpha.vercel.app/" target='_blank' rel='noopener noreferrer'>
                  <button className="demo">Demo</button>
                </a>
                <a href="https://github.com/MADHANRAJ-R/weather-api-react.git" target='_blank' rel='noopener noreferrer'>
                  <button className="github">GitHub</button>
                </a>
                 
               </div>
            </div>
            <div className="container">
              <img src={project2} alt="project1img" className="projectImg" />
              <p className='prpara'>MERN Stack ToDo Application</p>
              <div className="demogit">
                 <a href="https://to-do-mern-app-client.vercel.app/" target='_blank' rel='noopener noreferrer'>
                  <button className="demo">Demo</button>
                </a>
                <a href="https://github.com/MADHANRAJ-R/ToDo-MERN-App.git" target='_blank' rel='noopener noreferrer'>
                 <button className="github">GitHub</button>
                 </a>
               </div>
            </div>
            <div className="container">
              <img src={project3} alt="project1img" className="projectImg" />
              <p className='prpara'>Portfolio Website</p>
              <div className="demogit">
                 <button className="demo blockbtn">Demo</button>
                 <a href="https://github.com/MADHANRAJ-R/Portfolio-Website.git" target='_blank' rel='noopener noreferrer'>

                 <button className="github">GitHub</button>
                 </a>
               </div>
            </div>
        </div>
        

    </section>
  )
}

export default Project