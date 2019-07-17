import React from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
`;

const Container = styled.div`
  padding: 1rem;
  background-color: rgb(0, 149, 255);
  display: flex;
`;

const Logo = styled.img`
  height: 40px;
  width: 40px;
  &:hover {
    cursor: pointer;
  }
`;

const Links = styled.ul`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled.li`
  display: inline;
  margin-left: 2rem;
  &:hover {
    color: rgb(255, 0, 0);
    cursor: pointer;
  }
`;

export default class NavBar extends React.Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <Nav>
        <Container>
          <Logo
            src={require("../assets/images/c3.png")}
            alt="c3 Logo"
            onClick={this.scrollToTop}
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
          </Links>
        </Container>
      </Nav>
    );
  }
}
