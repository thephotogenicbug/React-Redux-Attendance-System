import React from 'react'
import styled, { createGlobalStyle, css } from "styled-components";
import AvatarImg from "../assets/profile.png";

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
  height: 15vh;
  width: 120%;
  padding: 0 20px;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 90%;
  }
`;
const StyledForm = styled.form`
  width: 120%;
  max-width: 900px;
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
const StyledError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fa4d41;
`;

const Avatar = styled.div`
 img{
   height:3.9rem;
   width: 3.9rem;
 }
`
const SinglePage = () => {
    return (
      <StyledFormWrapper>
        <StyledForm>
          <Avatar>
             <img src={AvatarImg} />
          </Avatar>
          {/* <h2>Attendace Form</h2>

          <StyledInput
            type="text"
            placeholder="Name"
           
          />
          <StyledInput
            type="number"
            placeholder="Mobile No"
           
          />
          <StyledInput
            type="text"
            placeholder="Unique ID"
          
          />
          <StyledInput
            type="email"
            placeholder="Department"
            
          /> */}
          <StyledError>{/* <p>Error message here</p> */}</StyledError>
          {/* <StyledButton>Submit Attendace</StyledButton> */}
          {/* {loading ? (
            <StyledSpinner viewBox="0 0 50 50">
              <circle
                className="path"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="4"
              />
            </StyledSpinner>
          ) : error ? (
            <StyledError>{error}</StyledError>
          ) : (
            ""
          )} */}
        </StyledForm>
      </StyledFormWrapper>
    );
}

export default SinglePage
