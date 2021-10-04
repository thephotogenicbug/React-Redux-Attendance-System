import React, { useState } from "react";
import { cardShadow, hoverEffect } from "../utils";
import AvatarImg from "../assets/profile.png";
import styled, { createGlobalStyle, css } from "styled-components";
import Badge from "./Badge";

const GlobalStyle = createGlobalStyle`
 html {
     height:100%;
 }

`;
const SharedStyles = css`
  background-color: #eee;
  height: 2px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: "border-box";
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;
const StyledForm = styled.form`
  width: 110%;
  max-width: 700px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  width: 40%;
  margin-left: 1rem !important;
  max-width: 180% !important;
  ${SharedStyles};
`;
const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 90%;
  min-height: 100px;
  resize: none;
  ${SharedStyles};
`;
const StyledButton = styled.button`
  display: block;
  background-color: #f7797d;
  color: white;
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;
const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;

  legend {
    padding: 0 10px;
  }

  label {
    padding-right: 20px;
  }

  input {
    margin-right: 10px;
  }
`;
const StyledError = styled.div``;

const Attendace = () => {
  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm>
          <h2>Attendace Form</h2>

          <StyledInput type="text" placeholder="Name" />
          <StyledInput type="number" placeholder="Mobile No" />
          <StyledInput type="text" placeholder="Unique ID" />
          <StyledInput type="email" placeholder="Date" />
          <StyledError>
            {/* <p>Error message here</p> */}
          </StyledError>
          <StyledButton type="submit">Send Message</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};

export default Attendace;
