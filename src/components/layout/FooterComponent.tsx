import React from 'react';
import '../layout/footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faDiscord, faTelegram, faReddit } from '@fortawesome/free-brands-svg-icons';

const FooterComponent: React.FunctionComponent = () => (
  <div>
    <footer className="p-20">
      <div className="flex">
        <div className="flex-1 px-3">
          <h2 className="text-lg font-semibold">About Us</h2>
          <p className="mt-5">
            We are five elements. <br />
            We are Anonymous. <br />
            We are Legion. <br />
            We do not forgive. <br />
            We do not forget. <br />
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
    </footer>
    <hr />
    <div className="text-center text-white bg-black">
      <p>Copyright &#169; 2021. Five Elements Token</p>
    </div>
  </div>
);

export default FooterComponent;
