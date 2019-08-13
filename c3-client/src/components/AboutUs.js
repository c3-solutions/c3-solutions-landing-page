import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 0px;
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

const Text = styled.div`
  max-width: 900px;
  font-size: 24px;
`;

const AboutUs = props => {
  return( 
    <Container className="about">
      <Underline>
        <Heading>
          About Us
        </Heading>
      </Underline>
      <Text>
        <p>
          We want to code! As graduates of the CodeCore web development bootcamp,
          we are looking for every opportunity to test our skills and learn new
          things. It's even more rewarding when we are able to put our skills to
          use to create valuable applications for the community. That's why we
          started C3 Solutions.
        </p>
        <p>
          So if you need a web application for your organization, but don't know
          how or where to start, let us guide you through the process with the
          form below. Somebody from the team will reach out to you to get the ball
          rolling.
        </p>
      </Text>
    </Container>
  )
}

export default AboutUs; 
