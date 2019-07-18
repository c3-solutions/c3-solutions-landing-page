import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../styles/App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import { Github} from "../requests";
// import Footer from "./Footer";

const Container = styled.div``;

function App() {
  let [members, setMembers] = useState([]);
  console.log('members: ', members);

  const fetchMembers = async () => {
    const response = await Github.getMembers();
    setMembers(response);
  }

  useEffect(() => {
    fetchMembers()
  }, [])

  return (
    <Container className="App">
      <NavBar />
      <Home />
      {/* <Footer /> */}
    </Container>
  );
}

export default App;
