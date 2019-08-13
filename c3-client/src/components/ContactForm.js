import React, { useState } from "react";
import styled from "styled-components";
import { withFormik } from "formik";
import * as Yup from "yup";
import config from '../config';

const Container = styled.div`
  display: flex;
  flex-shrink: 0.25;
  margin: 0px 0px 0px 0px;
  height: 100vh;
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
  font-family: "Chakra Petch", sans-serif;
`;

const Underline = styled.div`
  border-bottom: 5px solid rgb(0, 149, 255);
`;

const Text = styled.p`
  margin-top: 32px;
  font-size: 1.25em;
  text-align: ${props => (props.center ? "center" : "left")};
  cursor: ${props => (props.detailsLink ? "pointer" : "default")};
  :hover {
    text-decoration: ${props => (props.detailsLink ? "underline" : "none")};
  }
`;

const Form = styled.form`
  @media (min-width: 600px) {
    width: 600px;
  }
`;

const Input = styled.textarea`
  width: 100%;
  max-height: 700px;
  ${props =>
    props.textarea
      ? `
    min-height: 250px;
    height: 250px;
    resize: vertical;
  `
      : `
    min-height: 45px;
    height: 45px;
    resize: none;
  `}
  box-sizing: border-box;
  margin: 32px 0 1px;
  padding: 10px;
  border-radius: 3px;
  border: 1.5px solid
    ${props => (props.touchedError ? "rgb(255, 0, 0)" : "black")};
  outline: none;
  font-size: 1em;
  :focus {
    border: 1.5px solid rgb(0, 149, 255);
  }
  :disabled {
    opacity: 0.5;
  }
`;

const Submit = styled.button`
  margin-top: 25px;
  justify-self: left;
  text-transform: uppercase;
  padding: 10px 25px;
  margin: 0 0 40px 0;
  border: none;
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
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  margin: 0;
  padding-left: 12px;
  color: rgb(255, 0, 0);
`;

const Details = styled.div`
  width: 100%;
`;

const CheckboxContainer = styled.label`
  display: ${props => (props.radio ? "inline" : "block")};
  vertical-align: top;
  margin-right: 25px;
  font-size: 1.25em;
  user-select: none;
  position: relative;
  ${props =>
    props.selected
      ? `
    & span { background-color: rgb(0, 149, 255); }
  `
      : `
    :hover { opacity: 0.8 }
    cursor: pointer;
  `}
  ${props =>
    props.radio
      ? `
    display: inline;
  `
      : `
    margin: 10px 0;
    :hover { opacity: 0.8 }
    cursor: pointer;
    & input:checked + span { background-color: rgb(0, 149, 255); }
    & input:checked + span:after {
      content: "";
      position: absolute;
      height: 4px;
      width: 9px;
      border-left: 3px solid rgb(255, 0, 0);
      border-bottom: 3px solid rgb(255, 0, 0);
      top: 45%;
      left: 3.3%;
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  `}
`;

const Checkbox = styled.span`
  margin: 3px 12px -1px;
  display: inline-block;
  background-color: white;
  ${props =>
    props.radio
      ? `
    border-radius: 50%;
    width: 1em;
    height: 1em;
  `
      : `
    width: 0.8em;
    height: 0.8em;
  `}
`;

const ContactSection = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  handleSubmit
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => setShowDetails(!showDetails);
  return (
    <Container>
      <Underline>
        <Heading>Contact Us</Heading>
      </Underline>
      <Form onSubmit={handleSubmit}>
        <Text center>
          If you need a web application for your organization but don’t know how
          or where to start, let us guide you through the process with the form
          below. Somebody from the team will reach out to you to get the ball
          rolling.
        </Text>
        <Input
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Name*"
          touchedError={touched.name && errors.name}
        />
        <Error visible={touched.name && errors.name}>{errors.name}</Error>
        <Input
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Email*"
          touchedError={touched.email && errors.email}
        />
        <Error visible={touched.email && errors.email}>{errors.email}</Error>
        <Input
          name="organization"
          value={values.organization}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Organization"
          touchedError={touched.organization && errors.organization}
        />
        <Error visible={touched.organization && errors.organization}>
          {errors.organization}
        </Error>
        <Input
          name="message"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Please tell us about your project*"
          touchedError={touched.message && errors.message}
          textarea
        />
        <Error visible={touched.message && errors.message}>
          {errors.message}
        </Error>
        <Text detailsLink onClick={toggleDetails}>
          Additional Details ({showDetails ? "-" : "+"})
        </Text>
        <Details hidden={!showDetails}>
          <Text>Does your organization currently have a website?</Text>
          <CheckboxContainer selected={values.hasURL === "yes"} radio>
            <input
              type="radio"
              name="hasURL"
              value="yes"
              onChange={handleChange}
              hidden
            />
            <Checkbox radio />
            Yes
          </CheckboxContainer>
          <CheckboxContainer selected={values.hasURL === "no"} radio>
            <input
              type="radio"
              name="hasURL"
              value="no"
              onChange={handleChange}
              hidden
            />
            <Checkbox radio />
            No
          </CheckboxContainer>
          <Input
            name="url"
            value={values.url}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Website URL"
            touchedError={touched.url && errors.url}
            disabled={values.hasURL !== "yes"}
          />
          <Error visible={touched.url && errors.url}>{errors.url}</Error>
          <Text>Is there a deadline for your project?</Text>
          <CheckboxContainer selected={values.hasDeadline === "yes"} radio>
            <input
              type="radio"
              name="hasDeadline"
              value="yes"
              onChange={handleChange}
              hidden
            />
            <Checkbox radio />
            Yes
          </CheckboxContainer>
          <CheckboxContainer selected={values.hasDeadline === "no"} radio>
            <input
              type="radio"
              name="hasDeadline"
              value="no"
              onChange={handleChange}
              hidden
            />
            <Checkbox radio />
            No
          </CheckboxContainer>
          <Input
            name="deadline"
            value={values.deadline}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Project deadline"
            touchedError={touched.deadline && errors.deadline}
            disabled={values.hasDeadline !== "yes"}
          />
          <Error visible={touched.deadline && errors.deadline}>
            {errors.deadline}
          </Error>
        </Details>
        <div style={{ textAlign: "center" }}>
          <Submit type="submit">Send</Submit>
        </div>
      </Form>
    </Container>
  );
};

const ContactForm = withFormik({
  mapPropsToValues({
    name,
    email,
    organization,
    message,
    hasURL,
    url,
    hasDeadline,
    deadline,
    hasOtherFeature,
    otherFeature
  }) {
    return {
      name: name || "",
      email: email || "",
      organization: organization || "",
      message: message || "",
      hasURL: hasURL || "",
      url: url || "",
      hasDeadline: hasDeadline || "",
      deadline: deadline || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Email must be valid")
      .required("Email is required"),
    organization: Yup.string(),
    message: Yup.string().required("Message is required"),
    hasURL: Yup.string(),
    url: Yup.string().when("hasURL", {
      is: "yes",
      then: Yup.string().required("Website is required")
    }),
    hasDeadline: Yup.string(),
    deadline: Yup.string().when("hasDeadline", {
      is: "yes",
      then: Yup.string().required("Deadline is required")
    })
  }),
  handleSubmit(values) {
    return fetch(
      config.webhookURL,
      {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*"
        },
        body: JSON.stringify({
          blocks: [
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text:
                  "Hey c3-Solutions, you've recieved a new inquiry for a project!"
              }
            },
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `*Name:*\n${values.name}`
              }
            },
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `*Email:*\n${values.email}`
              }
            },
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `*Organization:*\n${values.organization || "none"}`
              }
            },
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `*Message:*\n${values.message}`
              }
            },
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `*Website:*\n${values.url || "None"}`
              }
            }
          ]
        })
      }
    );
  }
})(ContactSection);

export default ContactForm;
