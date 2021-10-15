import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { createGlobalStyle, css } from "styled-components";
import {
  updateAttendaceAction,
  updateAttendaceActionLunchend,
} from "../actions/attendaceActions";

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
  height: 75vh;
  padding: 0 20px;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 12rem;
    width: 90%;
  }
`;
const StyledForm = styled.form`
  width: 100%;
  max-width: 900px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  width: 20%;
  margin-left: 4rem !important;
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
  margin-left: 4rem;
  box-sizing: border-box;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-left: 1rem !important;
    margin-left: 1rem;
  }
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
  img {
    height: 7.9rem;
    width: 7.9rem;
    border-radius: 50%;
  }
`;

const SinglePageAttendaceData = ({ match }) => {
  const [name, processName] = useState("");
  const [mobile, processMobile] = useState("");
  const [unique, processUnique] = useState("");
  const [department, processDepartment] = useState("");
  const [logintime, processLoginTime] = useState("");
  const [lunchstartyes, processLunchStartYes] = useState("");
  const [lunchendyes, processLunchEndYes] = useState("");

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/attendace/get/${match.params.id}`
      );
      processName(data.name);
      processMobile(data.mobile);
      processUnique(data.unique);
      processLoginTime(data.logintime);
      processDepartment(data.department);
      processLunchStartYes(data.lunchstart);
      processLunchEndYes(data.lunchend);

      console.log(data);
    };

    fetching();
  }, [match.params.id, lunchstartyes]);

  const dispatch = useDispatch();

  const attendaceUpdate = useSelector((state) => state.attendaceUpdate);
  const { loading, error } = attendaceUpdate;

  const SubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateAttendaceAction(match.params.id, lunchstart));
  };
  const SubmitHandler2 = (e) => {
    e.preventDefault();
    dispatch(updateAttendaceActionLunchend(match.params.id, lunchend));
  };

  // create two more functions in backend

  const showdate = new Date();
  const displaytodaydate =
    showdate.getDate() +
    "/" +
    (showdate.getMonth() + 1) +
    "/" +
    showdate.getFullYear();
  const dt = showdate.toDateString();
  const lunchstart =
    showdate.getHours() +
    ":" +
    showdate.getMinutes() +
    ":" +
    showdate.getSeconds();

  const lunchend =
    showdate.getHours() +
    ":" +
    showdate.getMinutes() +
    ":" +
    showdate.getSeconds();

  return (
    <StyledFormWrapper>
      <StyledForm>
        <StyledInput type="text" value={name} />
        <StyledInput type="text" value={mobile} />
        <StyledInput type="text" value={unique} />
        <StyledInput type="text" value={logintime} />
        <StyledInput type="text" value={department} />
        <StyledInput
          type="text"
          value={lunchstartyes}
          placeholder="Lunch Start"
        />
        <StyledInput type="text" placeholder="Lunch End " value={lunchendyes} />
        <StyledInput type="text" placeholder="Logout" />
        {lunchstartyes == "blank" ? (
          <StyledButton onClick={SubmitHandler}>Lunch Start</StyledButton>
        ) : lunchendyes == "blank" ? (
          <StyledButton onClick={SubmitHandler2}>Lunch End</StyledButton>
        ) : (
          <StyledButton onClick={SubmitHandler2}>Logout</StyledButton>
        )}
      </StyledForm>
    </StyledFormWrapper>
  );
};

export default SinglePageAttendaceData;

//  {
//    mobile.length == 0 ? (
//      <StyledButton>HI</StyledButton>
//    ) : (
//      <StyledInput type="text" />
//    );
//  }
