import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer-icons">
    <div className='media'>
      <div>
        <a href="https://github.com/aspecker/5oclock-dc">
        <img src="/assets/images/github-logo-icon-2.png" alt="github"/>

        </a>
      </div>
      <div>
        <img src="/assets/images/instagram.svg" alt="instagram"/>
      </div>
      <div>
        <a href="mailto:adriansander@hotmail.com?subject=5 O' Clock DC" target="_blank">
        <img src="/assets/images/mail.png" alt="email"/>
        </a>
      </div>
    </div>
  </footer>

)

export default Footer;
