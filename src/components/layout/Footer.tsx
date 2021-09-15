import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faDiscord, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="shadow bg-earth">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">We are five elements.</p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="/">Nfts</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Join the Community</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a className="social-media-li" href="/">
              <FontAwesomeIcon icon={faTwitter} className="social-media-icon" />              
            </a>
          </li>     
          <li>
            <a className="social-media-li" href="/">
              <FontAwesomeIcon icon={faDiscord} className="social-media-icon" />
            </a>
          </li>
          <li>
            <a className="social-media-li" href="/">
              <FontAwesomeIcon icon={faTelegram} className="social-media-icon" />
            </a>
          </li>               
          <li>          
            <a className="social-media-li" href="/">
              <FontAwesomeIcon icon={faGithub} className="social-media-icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
