import React from "react";
import styled from "styled-components";
import "../styles/App.css";
import Home from "./Home";
import NavBar from "./NavBar";
// import Footer from "./Footer";

const Container = styled.div``;

function App() {
  return (
    <Container className="App">
      <NavBar />
      <Home />
      {/* <Footer /> */}
    </Container>
  );
}

export default App;
