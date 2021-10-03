import React from 'react';
import '../social-media/social-media.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faDiscord, faTelegram, faReddit } from '@fortawesome/free-brands-svg-icons';

type SocialMediaProps = {
  aClasses?: string;
  iconClasses?: string;
};

const TwitterComponent: React.FunctionComponent<SocialMediaProps> = ({ aClasses, iconClasses }) => (
  <a className={aClasses} target="_blank" rel="noopener noreferrer" href="https://twitter.com/5elementstoken">
    <FontAwesomeIcon icon={faTwitter} className={iconClasses} />
  </a>
);

const RedditComponent: React.FunctionComponent<SocialMediaProps> = ({ aClasses, iconClasses }) => (
  <a className={aClasses} target="_blank" rel="noopener noreferrer" href="https://www.reddit.com/r/fiveelementstoken/">
    <FontAwesomeIcon icon={faReddit} className={iconClasses} />
  </a>
);

const TelegramComponent: React.FunctionComponent<SocialMediaProps> = ({ aClasses, iconClasses }) => (
  <a className={aClasses} target="_blank" rel="noopener noreferrer" href="/">
    <FontAwesomeIcon icon={faTelegram} className={iconClasses} />
  </a>
);

const DiscordComponent: React.FunctionComponent<SocialMediaProps> = ({ aClasses, iconClasses }) => (
  <a className={aClasses} target="_blank" rel="noopener noreferrer" href="/">
    <FontAwesomeIcon icon={faDiscord} className={iconClasses} />
  </a>
);

const GithubComponent: React.FunctionComponent<SocialMediaProps> = ({ aClasses, iconClasses }) => (
  <a className={aClasses} target="_blank" rel="noopener noreferrer" href="https://github.com/fiveelementstoken">
    <FontAwesomeIcon icon={faGithub} className={iconClasses} />
  </a>
);

export { TwitterComponent, RedditComponent, TelegramComponent, DiscordComponent, GithubComponent };
