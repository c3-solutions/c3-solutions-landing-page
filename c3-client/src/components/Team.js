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
  justify-content: center;
  margin: 40px 0 0 0;
`;


const Team = props => {
  if (!props.team) {
    return (
      <div>
      </div>
    )
  }

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
              key={member.node.id}
              pic={member.node.avatarUrl}
              fullname={member.node.name}
              github={member.node.url}
              note={member.node.bio}
              email={member.node.email}
              website={member.node.websiteUrl}
            />
          ))
        }
      </Members>
    </Container>
  )
}

export default Team; 