import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../styles/App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import { Github} from "../requests";
// import Footer from "./Footer";

const Container = styled.div`

`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  background-color: rgb(0, 0, 0);
`;

const Heading = styled.h1`
  color: white;
  font-size: 5em;
  margin: 40px 0px 0px 0px;
  font-family: 'Press Start 2P', cursive
`;

function App() {
  let [members, setMembers] = useState([]);
  console.log('members: ', members);

  const fetchMembers = async () => {
    const response = await Github.getMembers();
    setMembers(response);
  }

  useEffect(() => {
    fetchMembers();
  }, [])

  return (
    <Container className="App">
      <div>
        <Logo>
          <img 
            style={{
              maxWidth: '300px'
            }}
            src={require("../assets/images/c3.png")}
            alt="C-Cubed"
          />
        <Heading>
          CUBED
        </Heading>
        </Logo>
      </div>
      <NavBar />
      <Home c3Members={members} />
      {/* <Footer /> */}
    </Container>
  );
}

export default App;
