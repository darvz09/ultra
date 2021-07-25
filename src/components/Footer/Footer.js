import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { Button } from '../../globalStyles';
import { FooterContainer,
    FooterSubHeading,
    FooterSubscription,
    FooterSubText,
    Form, 
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinksTitle,
    FooterLinks,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcon,
    SocialIconLinks,
    SocialIcons
    } from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join Our Exclusice membership to receive the least news and trends
                </FooterSubHeading>
                <FooterSubText>
                    You can Unsubcribe at any Time.
                </FooterSubText>
                <Form>
                    <FormInput name='email' type="email" placeholder="Your Email" />
                    <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinksTitle>About Us</FooterLinksTitle>
                        <FooterLinks to='/sigin-up'>How it Works</FooterLinks>
                        <FooterLinks to='/'>Testimonials</FooterLinks>
                        <FooterLinks to='/'>Careers</FooterLinks>
                        <FooterLinks to='/'>Investors</FooterLinks>
                        <FooterLinks to='/'>Terms of Services</FooterLinks>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinksTitle>Contact Us</FooterLinksTitle>
                        <FooterLinks to='/sigin-up'>Contact</FooterLinks>
                        <FooterLinks to='/'>Support</FooterLinks>
                        <FooterLinks to='/'>Destination</FooterLinks>
                        <FooterLinks to='/'>Sponsorships</FooterLinks>
                    </FooterLinksItems> 
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinksTitle>Videos</FooterLinksTitle>
                        <FooterLinks to='/sigin-up'>Submit Videos</FooterLinks>
                        <FooterLinks to='/'>Ambassadors</FooterLinks>
                        <FooterLinks to='/'>Agency</FooterLinks>
                        <FooterLinks to='/'>Influencer</FooterLinks>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinksTitle>Social Media</FooterLinksTitle>
                        <FooterLinks to='/sigin-up'>Instagram</FooterLinks>
                        <FooterLinks to='/'>facebook</FooterLinks>
                        <FooterLinks to='/'>Youtube</FooterLinks>
                        <FooterLinks to='/'>Twitter</FooterLinks>
                        <FooterLinks to='/'>LinkedIn</FooterLinks>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon />
                            DARVZ
                    </SocialLogo>    
                    <WebsiteRights>DARVz © 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLinks href={'https://www.facebook.com/'} target="_blank" area-label="Fecebook">
                            <FaFacebook />
                        </SocialIconLinks>
                        <SocialIconLinks href='/' target="_blank" area-label="Instagram">
                            <FaInstagram />
                        </SocialIconLinks>
                        <SocialIconLinks href='/' target="_blank" area-label="Youtube">
                            <FaYoutube />
                        </SocialIconLinks>
                        <SocialIconLinks href='/' target="_blank" area-label="Twitter">
                            <FaTwitter />
                        </SocialIconLinks>
                        <SocialIconLinks href='/' target="_blank" area-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLinks>
                    </SocialIcons>          
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
