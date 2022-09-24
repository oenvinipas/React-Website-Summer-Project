import React from 'react';
import {
    SideBarContainer,
    Icon,
    CloseIcon,
    SideBarWrapper,
    SideBarMenu,
    SideBarLink,
    SideBTNWrap,
    SideBarRoute
} from './SideBarElements';

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SideBarWrapper>
            <SideBarMenu>
                <SideBarLink to="about" onClick={toggle}>About</SideBarLink>
                <SideBarLink to="discover" onClick={toggle}>Discover</SideBarLink>
                <SideBarLink to="services" onClick={toggle}>Services</SideBarLink>
                <SideBarLink to="signup" onClick={toggle}>Sign Up</SideBarLink>
            </SideBarMenu>
            <SideBTNWrap>
                <SideBarRoute to="/signin">Sign In</SideBarRoute>
            </SideBTNWrap>
        </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar