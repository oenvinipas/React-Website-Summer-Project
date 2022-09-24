import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'

 const toggleHome = () => {
        scroll.scrollToTop();
    }

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>

                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/">How it Works</FooterLink>
                            <FooterLink to="/">Testimonials</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                            <FooterLink to="/">Terms and Services</FooterLink>
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/">Contact</FooterLink>
                            <FooterLink to="/">Support</FooterLink>
                            <FooterLink to="/">Destinations</FooterLink>
                            <FooterLink to="/">Sponsorships</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>


                <FooterLinksWrapper>
                    <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to="/">Submit Video</FooterLink>
                                <FooterLink to="/">Ambassadors</FooterLink>
                                <FooterLink to="/">Agency</FooterLink>
                                <FooterLink to="/">Influencer</FooterLink>
                    </FooterLinkItems>
                    
                    <FooterLinkItems>
                            <FooterLinkTitle>Business</FooterLinkTitle>
                                <FooterLink to="/">Meet the Team</FooterLink>
                                <FooterLink to="/">Are we Hiring</FooterLink>
                                <FooterLink to="/">Start Now</FooterLink>
                                <FooterLink to="/">Consultation</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>

            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        dolla
                    </SocialLogo>
                    <WebsiteRights>dolla © { new Date().getFullYear() } All rights reserved</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer