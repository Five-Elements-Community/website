import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faDiscord, faTelegram, faReddit } from '@fortawesome/free-brands-svg-icons';

const FooterComponent = () => (
  <div>
  <footer className="p-20 bg-gradient-to-b from-yellow-400 via-red-500 to-pink-500">
    <div className="flex">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">
          We are five elements. <br/> 
          We are Anonymous. <br/> 
          We are Legion. <br/> 
          We do not forgive. <br/> 
          We do not forget. <br/> 
        </p>
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
        <h2 className="text-lg font-semibold">Community</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a className="social-media-li" href="/">
              <FontAwesomeIcon icon={faTwitter} className="social-media-icon" />              
            </a>
          </li> 
          <li>          
            <a className="social-media-li" href="/">
              <FontAwesomeIcon icon={faReddit} className="social-media-icon" />
            </a>
          </li>
          <li>
            <a className="social-media-li" href="/">
              <FontAwesomeIcon icon={faTelegram} className="social-media-icon" />
            </a>
          </li>    
          <li>
            <a className="social-media-li" href="/">
              <FontAwesomeIcon icon={faDiscord} className="social-media-icon" />
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
  <hr/>
  <div className="text-center text-white bg-black">
    <p>Copyright &#169; 2021. Five Elements Token</p>
  </div>
  </div>
);

export default FooterComponent;
