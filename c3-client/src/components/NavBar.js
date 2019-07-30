import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = styled.div`

`;

const Container = styled.div`
  padding: .7rem;
  background-color: rgb(0, 0, 0);
  display: flex;
`;

const Logo = styled.img`
  height: 40px;
  width: 40px;
  &:hover {
    cursor: pointer;
  }
`;


const Links = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(255, 255, 255);
  font-family: Helvetica;
  font-size: 18px;
`;

const NavItem = styled.div`
  display: inline;
  margin-left: 2rem;
  &:hover {
    border-bottom: 5px solid rgb(0, 149, 255);
    cursor: pointer;
  }
`;

const NavBar = (props) => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const offSet = () => {
    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        navbar.classList.remove("hide");
      } else {
        navbar.classList.remove("sticky");
        navbar.classList.add("hide");
      }
    }
  }

  useEffect(() => {
    offSet()
  }, [])

  return (
    <Nav id="navbar">
      <Container>
        <Logo
          src={require("../assets/images/c3.png")}
          alt="c3 Logo"
          onClick={scrollToTop}
        />
        <Links>
          <NavItem>
            <Link
              activeClass="active"
              to="team"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              THE TEAM
            </Link>
          </NavItem>
          <NavItem>
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              PORTFOLIO
            </Link>
          </NavItem>
          {/* 
          
          Possible future OAuth login
          
          <NavItem>
            <a href="https://github.com/login/oauth/authorize?client_id=d240d9f9a8908bc39b20&scope=user%20public_repo%20read:org">Alumni</a>
          </NavItem> */}
        </Links>
      </Container>
    </Nav>
  );
}

export default NavBar;