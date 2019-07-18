import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import AboutUs from "./AboutUs";

const Container = styled.main`
  margin-top: 80px;
  padding: 0 20px;
  height: 100%;
  display: flex;
`;

const Home = props => {
  return (
    <Container>
      <AboutUs />
      <ContactForm />
    </Container>
  );
};

export default Home;
