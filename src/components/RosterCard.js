import React from "react";
import "../styles/App.css";
import styled from "styled-components";
import GHpng from "../assets/images/GitHub_Logo.png";
import c3logo from "../assets/images/c3.png";

const Card = styled.div`
  border: thin black solid;
  border-radius: 4%;
  display: flex;
  flex-direction: row;
  @media (min-width: 700px) {
    width: 45vw;
  }
`;

const Image = styled.img`
  clip-path: circle(40% at center);
  height: 100%;
  margin: 4em 0;
  width: 30%;
`;

const Info = styled.div`
  height: 100%;
  padding: 1em;
  width: 70%;
`;

const Name = styled.h3`
  font-family: sans-serif;
  font-weight: bold;
  margin-bottom: 0.25em;
  text-transform: uppercase;
`;

const Note = styled.p`
  margin: 0;
`;

const Icons = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 1em 0;
  width: 100%;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const GHLogo = styled.img`
  box-sizing: content-box;
  height: 2em;
  :hover {
    border: thin solid black;
  }
`;

const RosterCard = props => {
  // can probably get info/pic from github api
  let { fullname, pic, note, github, website } = props;
  return (
    <Card>
      <Image src={pic ? pic : c3logo} alt={`${fullname}'s profile`} />
      <Info>
        <Name>{fullname}</Name>
        <Note>{note}</Note>
        <Icons>
          <a href={`http://github.com/${github}`}>
            <GHLogo src={GHpng} />
          </a>
          <a href={website}>
            <p>{website}</p>
          </a>
        </Icons>
      </Info>
    </Card>
  );
};
export default RosterCard;
