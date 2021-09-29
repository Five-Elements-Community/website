import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faDiscord, faTelegram, faReddit } from '@fortawesome/free-brands-svg-icons';

const CommunityComponent: React.FunctionComponent = () => (
  <div className="container mx-auto text-center">
    <h2 className="text-3xl lg:text-5xl font-semibold">Join the Community</h2>
    <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
      <ul className="mt-4 leading-loose">
        <li>
          <a className="social-media-li" href="/">
            <FontAwesomeIcon icon={faTwitter} className="social-media-icon bg-twitter text-white" />
          </a>
        </li>
        <li>
          <a className="social-media-li" href="/">
            <FontAwesomeIcon icon={faReddit} className="social-media-icon bg-reddit text-white" />
          </a>
        </li>
        <li>
          <a className="social-media-li" href="/">
            <FontAwesomeIcon icon={faTelegram} className="social-media-icon bg-telegram text-white" />
          </a>
        </li>
        <li>
          <a className="social-media-li" href="/">
            <FontAwesomeIcon icon={faDiscord} className="social-media-icon bg-discord text-white" />
          </a>
        </li>
        <li>
          <a className="social-media-li" href="/">
            <FontAwesomeIcon icon={faGithub} className="social-media-icon bg-github text-white" />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default CommunityComponent;
