import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="social-link">
                    <p>This website is developed by Amrit. © {new Date().getFullYear()}</p>
                    {/* <a href="mailto:amritanand888@gmail.com" target="_blank">
                      <span><i className="bi bi-envelope"></i></span> Email
                    </a>
                    <a href="https://github.com/aamrits" target="_blank">
                      <span><i className="bi bi-github"></i></span> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/amrit-gandhi-b9b8416a/" target="_blank">
                    <span><i className="bi bi-linkedin"></i></span> LinkedIn 
                    </a> */}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer