import React from 'react';
import '../layout/footer.scss';
import { TwitterComponent, RedditComponent, TelegramComponent, DiscordComponent, GithubComponent } from '../social-media/SocialMediaComponents';

const FooterComponent: React.FunctionComponent = () => (
  <footer className="svgTest p-10 text-white">
    <div className="container mx-auto">
      <aside className="flex flex-wrap items-center my-10 sm:justify-between">
        <div>

          <p>
            Five elements token is powered <br />
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
