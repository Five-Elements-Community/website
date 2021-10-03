import React from 'react';
import { TwitterComponent, RedditComponent, TelegramComponent, DiscordComponent, GithubComponent } from '../social-media/SocialMediaComponents';

const FooterComponent: React.FunctionComponent = () => (
  <footer className="bg-nice-gray text-white">
    <div className="container mx-auto py-12">
      <aside className="flex flex-wrap items-center my-10 justify-center sm:justify-between">
        <div>

          <p>
            The Five Elements Token is powered <br />
            by the community.
          </p>
        </div>
        <div className="mt-5">
          <ul className="flex flex-row space-x-4">
            <li>
              <TwitterComponent
                aClasses="" 
                iconClasses=""/>              
            </li>
            <li>
              <RedditComponent
                aClasses="" 
                iconClasses=""/>
            </li>
            <li>
              <TelegramComponent
                aClasses="" 
                iconClasses=""/>
            </li>
            <li>
              <DiscordComponent
                aClasses="" 
                iconClasses=""/>
            </li>
            <li>
              <GithubComponent
                aClasses="" 
                iconClasses=""/>
            </li>
          </ul>
        </div>
      </aside>
      <hr />
      <div className="mt-10 text-center">
        <p>&#169; 2021 Five Elements Token</p>
      </div>
    </div>    
  </footer>
);

export default FooterComponent;
