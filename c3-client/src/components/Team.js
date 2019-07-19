import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 0px;
  height: 100vh;
  background-color: black;
  color: white;
  flex-direction: column;
  align-items: center;
  padding: 4em 0px 0px 0px;
`;

const Heading = styled.h1`
  color: rgb(255, 255, 255);
  margin: 0px 0px 0px 0px;
  font-size: 50px;
  font-family: 'Chakra Petch', sans-serif;
`;

const Underline = styled.div`
  border-bottom: 5px solid rgb(0, 149, 255);
`;

const Team = props => {
  return( 
    <Container className="about">
      <Underline>
        <Heading>
          Code Core Alumni
        </Heading>
      </Underline>
    </Container>
  )
}

export default Team; 