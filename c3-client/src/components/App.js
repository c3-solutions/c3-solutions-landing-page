import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "../styles/App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import Portfolio from "./Portfolio";
import { Github } from "../requests";
// import Footer from "./Footer";

const Container = styled.div`

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
      <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/" c3Members={members} render={props => <Home c3Members={members} />} />
          </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
