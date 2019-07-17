import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  flex-grow: 1;
  margin: 20px;
  height: 100px;
`;

const ContactForm = props => {
  return( 
    <Container>
      Contact Us
    </Container>
  )
}

export default ContactForm; 