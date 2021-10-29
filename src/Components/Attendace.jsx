import React, { useState } from "react";
import { cardShadow, hoverEffect } from "../utils";
import AvatarImg from "../assets/profile.png";
import styled, { createGlobalStyle, css } from "styled-components";
import Badge from "./Badge";
import { useDispatch, useSelector } from "react-redux";
import { createAttendaceAction } from "../actions/attendaceActions";
import { useHistory } from "react-router";

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
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-left: 1rem !important;
    width: 80%;
  }
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

const Attendace = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [department, setDepartment] = useState("");
  const [lunchstart, setLunchStart] = useState("")
  const [lunchend, setLunchEnd] = useState("")
  const [logout, setLogout] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const attendaceCreate = useSelector((state) => state.attendaceCreate);
  const { loading, error, attendace } = attendaceCreate;

  const SubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createAttendaceAction(name, mobile, department, logintime, lunchstart, lunchend, logout)
    );
    if (!name || !mobile || !department) return setMessage("Please fill all the fields");
    
        history.push("/dashboard");
  }; 

  const showdate = new Date();
  const displaytodaydate =
    showdate.getDate() +
    "/" +
    (showdate.getMonth() + 1) +
    "/" +
    showdate.getFullYear();
  const dt = showdate.toDateString();
  const logintime =
    showdate.getHours() +
    ":" +
    showdate.getMinutes() +
    ":" +
    showdate.getSeconds();

  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm>
          <h2>Attendace Form</h2>

          <StyledInput
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <StyledInput
            type="number"
            placeholder="Mobile No"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <StyledInput
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          {(message && (
            <StyledError>
              <p>{message}</p>
            </StyledError>
          )) ||
            (error && (
              <StyledError>
                <p>{error}</p>
              </StyledError>
            ))}
          <StyledButton onClick={SubmitHandler}>Submit Attendace</StyledButton>
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
    </>
  );
};

// Spinners stock components
const StyledSpinner = styled.svg`
  display: flex;
  justify-content: center;
  margin-left: 10rem !important;
  animation: rotate 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: 40px;
  height: 40px;
  margin-top: -40px;

  & .path {
    stroke: #f7797d;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export default Attendace;
