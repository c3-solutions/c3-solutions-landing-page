import React from "react";
import styled from "styled-components";

const Container = styled.main`
  padding: 0 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(0, 0, 0);
`;

const Section = styled.div`
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

const Portfolio = props => {
  return (
    <Container className="portfolio">
      <Section>
        <Underline>
          <Heading>
            Portfolio
          </Heading>
        </Underline>
      <Text>
        <p>
          No projects to show.
        </p>
      </Text>
    </Section>
    </Container>
  );
};

export default Portfolio;
