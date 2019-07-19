import React from "react";
import styled from "styled-components";
import { withFormik } from "formik";
import * as Yup from "yup";

const Container = styled.div`
  display: flex;
  margin: 0px;
  height: 100vh;
  background-color: black;
  color: white;
  flex-direction: column;
  align-items: center;
  padding: 4em 0px 0px 0px;
  font-family: 'Chakra Petch', sans-serif;
`;

const Heading = styled.h1`
  color: rgb(255, 255, 255);
  margin: 0px 0px 0px 0px;
  font-size: 50px;
`;

const Underline = styled.div`
  border-bottom: 5px solid rgb(0, 149, 255);
`;

const FormDescription = styled.p`
  margin-top: 32px;
  font-size: 1.25em;
  text-align: center;
`;

const Form = styled.form`
  width: 50%;
`;

const Input = styled.textarea`
  width: 100%;
  max-height: 500px;
  min-height: ${props => props.textarea ? "50px" : "45px"};
  height: ${props => props.textarea ? "250px" : "45px"};
  resize: ${props => props.textarea ? "vertical" : "none"};
  box-sizing: border-box;
  margin: 32px 0 1px;
  padding: 10px;
  border-radius: 3px;
  border: 1.5px solid ${props => props.touchedError ? "rgb(255, 0, 0)" : "black"};
  outline: none;
  font-size: 1em;
`;

const Submit = styled.button`
  margin-top: 25px;
  justify-self: left;
  text-transform: uppercase;
  padding: 10px 25px;
  border-radius: 3px;
  background-color: rgb(0, 149, 255);
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  outline: none;
`;

const Error = styled.p`
  height: 18px;
  visibility: ${props => props.visible ? "visible" : "hidden"};
  margin: 0;
  padding-left: 10px;
  color: rgb(255, 0, 0);
`;

const ContactSection = ({ 
  values, 
  errors,
  touched,
  handleBlur,
  handleChange, 
  handleSubmit, 
}) => ( 
    <Container className="about">
      <Underline>
        <Heading>
          Contact Us
        </Heading>
      </Underline>
      <Form onSubmit={handleSubmit}>
        <FormDescription>
        If need a web application for your organization, but don’t know how or where to start, let us guide you through the process with the form below. Somebody from the team will reach out to you to get the ball rolling.
        </FormDescription>
        <Input 
          type="text" 
          name="name" 
          value={values.name} 
          onChange={handleChange} 
          onBlur={handleBlur} 
          placeholder="Name*"
          touchedError={ touched.name && errors.name }
        />
        <Error visible={ touched.name && errors.name }>{errors.name}</Error>
        <Input 
          type="text" 
          name="email" 
          value={values.email} 
          onChange={handleChange} 
          onBlur={handleBlur} 
          placeholder="Email*"
          touchedError={ touched.email && errors.email }
        />
        <Error visible={ touched.email && errors.email }>{errors.email}</Error>
        <Input 
          type="text" 
          name="organization" 
          value={values.organization} 
          onChange={handleChange} 
          onBlur={handleBlur} 
          placeholder="Organization"
          touchedError={ touched.organization && errors.organization }
        />
        <Error visible={ touched.organization && errors.organization }>{errors.organization}</Error>
        <Input 
          type="text" 
          name="message" 
          value={values.message} 
          onChange={handleChange} 
          onBlur={handleBlur} 
          placeholder="Please tell us about your project*"
          touchedError={ touched.message && errors.message }
          textarea
        />
        <Error visible={ touched.message && errors.message }>{errors.message}</Error>
        <div style={{ textAlign: 'center' }}>
          <Submit>Send</Submit>
        </div>
      </Form>
    </Container>
  )

const ContactForm = withFormik({
  mapPropsToValues({ name, email, organization, message, }) {
    return {
      name: name || '',
      email: email || '',
      organization: organization || '',
      message: message || '',
    }
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Email must be valid').required('Email is required'),
    organization: Yup.string(),
    message: Yup.string().required('Message is required'),
  }),
  handleSubmit(values) {
    console.log(values);
  }
})(ContactSection);

export default ContactForm; 
