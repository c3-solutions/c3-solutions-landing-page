import React from "react";
import styled from "styled-components";
import RosterCard from './RosterCard';

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

const Members = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Team = props => {
  return( 
    <Container className="about">
      <Underline>
        <Heading>
          Code Core Alumni
        </Heading>
      </Underline>
      <Members>
        {
          props.team.map((member) => (
            <RosterCard
              key={member.id}
              pic={member.avatar_url}
              fullname={member.name}
              github={member.html_url}
              note={member.bio}
              email={member.email}
            />
          ))
        }
      </Members>
    </Container>
  )
}

export default Team; 