import React from 'react';
import './community.scss';
import { TwitterComponent, RedditComponent, TelegramComponent, DiscordComponent, GithubComponent } from '../social-media/SocialMediaComponents';

const CommunityComponent: React.FunctionComponent = () => (
  <div className="communityBackground">  
    <div className="container mx-auto p-12 text-white">
      <p>Social</p>
      <hr className="progress" />
      <h1 className="font-semibold text-center my-10 text-4xl sm:text-5xl">Join the Community</h1>    
        <ul className="flex flex-wrap justify-center space-x-4">
          <li>
            <TwitterComponent
              aClasses="social-media-a hover:shadow-lg hover:border-transparent bg-twitter text-white" 
              iconClasses="social-media-icon"/>  
          </li>
          <li>
            <RedditComponent
              aClasses="social-media-a hover:shadow-lg hover:border-transparent bg-reddit text-white" 
              iconClasses="social-media-icon"/>             
          </li>
          <li>
            <TelegramComponent
              aClasses="social-media-a hover:shadow-lg hover:border-transparent bg-telegram text-white" 
              iconClasses="social-media-icon"/>
          </li>
          <li>
            <DiscordComponent
              aClasses="social-media-a hover:shadow-lg hover:border-transparent bg-discord text-white" 
              iconClasses="social-media-icon"/>
          </li>
          <li>
            <GithubComponent
              aClasses="social-media-a hover:shadow-lg hover:border-transparent bg-github text-white" 
              iconClasses="social-media-icon"/>
          </li>
        </ul>
    </div>
  </div>
);

export default CommunityComponent;
