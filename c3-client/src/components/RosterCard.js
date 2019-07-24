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
  height: 250px;
  width: 500px;
  margin: 20px 20px 20px 20px;
  @media (max-width: 700px) {
    width: 300px;
  }
`;

const Image = styled.img`
  clip-path: circle(40% at center);
  height: 200px;
  margin: 20px 0 0 0;
  width: 200px;
  @media (max-width: 700px) {
    height: 100px;
    width: 100px;
  }
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

const RosterCard = (props) => {
  // can probably get info/pic from github api
  let { fullname, pic, note, github, website, email } = props;
  return (
    <Card>
      <Image src={pic ? pic : c3logo} alt={`${fullname}'s profile`} />
      <Info>
        <Name>{fullname}</Name>
        <Note>{note}</Note>
          <a href={website}>
            {website}
          </a>
      </Info>
    </Card>
  );
};
export default RosterCard;
