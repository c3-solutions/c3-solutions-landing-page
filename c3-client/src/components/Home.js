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

const Home = props => {
  return (
    <Container className="main">
      <AboutUs />
      <Team team={props.c3Members}/>
      <ContactForm />
    </Container>
  );
};

export default Home;
