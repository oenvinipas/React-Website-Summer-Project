import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavBarContainer,
    NavBarLogo,
    MobileIcon,
    NavMenu,
    NavItems,
    NavLinks,
    NavBTN,
    NavBTNLink
} from './NavBarElements';


const NavBar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
    <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav scrollNav={scrollNav}>
                <NavBarContainer>
                    <NavBarLogo to="/" onClick={toggleHome}>
                        dolla
                    </NavBarLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItems>
                            <NavLinks
                            to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            >
                                About
                            </NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks
                            to="discover"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            >
                                Discover
                            </NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks
                            to="services"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            >
                                Services
                            </NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks
                            to="signup"
                            smooth={true}
                            duration={500} 
                            spy={true} 
                            exact="true" 
                            offset={-80}
                            >
                                Sign Up
                            </NavLinks>
                        </NavItems>
                    </NavMenu>
                    <NavBTN>
                        <NavBTNLink to="/signin">Sign In</NavBTNLink>
                    </NavBTN>
                </NavBarContainer>
            </Nav>
        </IconContext.Provider>
    </>
  );
}

export default NavBar