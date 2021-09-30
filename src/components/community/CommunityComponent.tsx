import React from 'react';
import './community.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faDiscord, faTelegram, faReddit } from '@fortawesome/free-brands-svg-icons';

const CommunityComponent: React.FunctionComponent = () => (
  <div className="container">
    <p>Social</p>
    <hr/>
    <h1 className="text-5xl font-semibold text-center my-12">Join the Community</h1>
    <div className="">
      <ul className="flex flex-row flex-wrap justify-center">
        <li>
          <a className="social-media-li hover:shadow-lg hover:border-transparent bg-twitter text-white" href="/">
            <FontAwesomeIcon icon={faTwitter} className="social-media-icon" />
          </a>
        </li>
        <li>
          <a className="social-media-li hover:shadow-lg hover:border-transparent bg-reddit text-white" href="/">
            <FontAwesomeIcon icon={faReddit} className="social-media-icon" />
          </a>
        </li>
        <li>
          <a className="social-media-li hover:shadow-lg hover:border-transparent bg-telegram text-white" href="/">
            <FontAwesomeIcon icon={faTelegram} className="social-media-icon" />
          </a>
        </li>
        <li>
          <a className="social-media-li hover:shadow-lg hover:border-transparent bg-discord text-white" href="/">
            <FontAwesomeIcon icon={faDiscord} className="social-media-icon" />
          </a>
        </li>
        <li>
          <a className="social-media-li hover:shadow-lg hover:border-transparent bg-github text-white" href="/">
            <FontAwesomeIcon icon={faGithub} className="social-media-icon" />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default CommunityComponent;
