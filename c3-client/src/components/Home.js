import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import AboutUs from "./AboutUs";
import Team from "./Team";

const Container = styled.main`
  padding: 0 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(0, 0, 0);
`;


const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  background-color: rgb(0, 0, 0);
`;

const Heading = styled.h1`
  color: white;
  font-size: 5em;
  margin: 40px 0px 0px 0px;
  font-family: 'Press Start 2P', cursive
`;

const Home = props => {
  return (
    <Container className="main">
      <div>
        <Logo>
          <img 
            style={{
              maxWidth: '300px'
            }}
            src={require("../assets/images/c3.png")}
            alt="C-Cubed"
          />
        <Heading>
          CUBED
        </Heading>
        </Logo>
      </div>
      <AboutUs />
      <ContactForm />
      <Team team={props.c3Members}/>
    </Container>
  );
};

export default Home;
