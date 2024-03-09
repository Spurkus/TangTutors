import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  postcode: string;
  information: string;
  tutoringType: string;
}

export const Email = ({
  firstName,
  lastName,
  phoneNumber,
  postcode,
  information,
  tutoringType,
}: EmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to Tang Tutors!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          Thank you {firstName.charAt(0).toUpperCase() + firstName.slice(1)}{" "}
          {lastName.charAt(0).toUpperCase() + lastName.slice(1)} for your
          child's application to Tang Tutors!
        </Heading>
        <Text style={{ ...text, marginBottom: "14px" }}>
          I'll share my tutoring availability with you soon! To make things
          easy, I will message you using your phone number of{" "}
          <span className="font-bold">{phoneNumber}</span>.<br /> For
          verification, your postcode is{" "}
          <span className="font-bold">{postcode}</span> and preferred tutoring
          type is <span className="font-bold">{tutoringType}</span>. <br />{" "}
          <br />.
          The extra information you gave us is:
          <br />
          {information}
          <br />
          Please reply if there is any incorrect information, other than that,
          thanks for joining! {":)"}
        </Text>
        <Text style={footer}>Welcome to Tang Tutors!</Text>
      </Container>
    </Body>
  </Html>
);

export default Email;

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};

const code = {
  display: "inline-block",
  padding: "16px 4.5%",
  width: "90.5%",
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  border: "1px solid #eee",
  color: "#333",
};
