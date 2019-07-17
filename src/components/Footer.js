import React from "react";
import styled from "styled-components";

const Container = styled.section`
  position: absolute;
  bottom: 0px;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: rgb(0, 149, 255);
  text-align: center;
`;

const Text = styled.h5`
  font-size: 20px;
  color: rgb(0, 0, 0);
  margin: 0px;
  padding: 10px;
`;

const Footer = props => {
  return (
    <Container>
      <Text>C3 © 2019</Text>
    </Container>
  );
};

export default Footer;
