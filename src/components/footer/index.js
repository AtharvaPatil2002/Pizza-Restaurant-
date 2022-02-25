import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediawrap,
  SocialLogo,
  SocialIcons,
  SocialIconsLinks,
} from './footer.styling';


const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediawrap>
            <SocialLogo to='/'>Pizza</SocialLogo>
            <SocialIcons>
              <SocialIconsLinks
                href='/'
                target='_blank'
                aria-label='FaceBook'
                rel='noopener noreferrer'
              >
                <FaFacebook />
              </SocialIconsLinks>
              <SocialIconsLinks
                href='/'
                target='_blank'
                aria-label='Instagram'
                rel='noopener noreferrer'
              >
                <FaInstagram />
              </SocialIconsLinks>
              <SocialIconsLinks
                href='/'
                target='_blank'
                aria-label='Twitter'
                rel='noopener noreferrer'
              >
                <FaTwitter />
              </SocialIconsLinks>
              <SocialIconsLinks
                href='/'
                target='_blank'
                aria-label='LinkedIn'
                rel='noopener noreferrer'
              >
                <FaLinkedin />
              </SocialIconsLinks>
            </SocialIcons>
          </SocialMediawrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
