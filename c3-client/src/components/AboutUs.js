import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  flex-grow: 1;
  margin: 20px;
  height: 100px;
  background-color: white;
`;

const AboutUs = props => {
  return( 
    <Container>
      About Us
    </Container>
  )
}

export default AboutUs; 