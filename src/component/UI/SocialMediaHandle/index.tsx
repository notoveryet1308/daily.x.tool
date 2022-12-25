import { TwitterLogo, LinkedinLogo, GithubLogo } from 'phosphor-react';

import { StyledSocialMedia } from './style';

const SocialMediaHandle = () => {
  return (
    <StyledSocialMedia>
      <a
        href='https://www.linkedin.com/in/rahul1308/'
        className='social-link'
        target='_blank'
      >
        <LinkedinLogo className='linked-logo ph-icon' />
      </a>
      <a
        href='https://github.com/notoveryet1308'
        className='social-link'
        target='_blank'
      >
        <GithubLogo className='github-logo ph-icon' />
      </a>
      <a
        href='https://twitter.com/rahulraz1308'
        className='social-link'
        target='_blank'
      >
        <TwitterLogo className='twitter-logo ph-icon' />
      </a>
    </StyledSocialMedia>
  );
};

export default SocialMediaHandle;
