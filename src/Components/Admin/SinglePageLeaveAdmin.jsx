import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled, { createGlobalStyle, css } from "styled-components";

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

const StyledDropDown = styled.input`
  width: 25%;
  margin-left: 4rem !important;
  max-width: 180% !important;
  ${SharedStyles};
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-left: 1rem !important;
    width: 80%;
  }
`;

const SelectDownDownOptions = styled.option`
  margin-left: 1rem !important;
  ${SharedStyles};
`;

const Message = styled.h5`
  text-align: center;
`;

const SinglePageLeaveAdmin = ({ match }) => {
  const [name, processName] = useState("");
  const [to, processTo] = useState("");
  const [from, processFrom] = useState("")
  const [leaveoption, processLeaveOption] = useState("")
  const [reason, processReason] = useState("")
  const [currentstatus, processCurrentStatus] = useState("")

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(
        `https://attendace-system-api.herokuapp.com/api/leave/get/${match.params.id}`
      );
      processName(data?.name);
      processTo(data?.to);
      processFrom(data?.from);
      processLeaveOption(data?.leaveoption);
      processReason(data?.reason)
      processCurrentStatus(data?.currentstatus)

      console.log(data);
    };

    fetching();
  }, [match.params.id]);

  const [message, updateMessage] = useState("");

  const updateInfo = (e) => {
    e.preventDefault();
    const url = `https://attendace-system-api.herokuapp.com/api/leave/${match.params.id}`;
    const jsonData = {
      currentstatus,
    };
    axios.put(url, jsonData).then((response) => {
      console.log(response.data);
    });
    updateMessage("Data updated successfully");
  };

  return (
    <>
      <StyledFormWrapper>
        <StyledForm>
          <Message>{message}</Message>
          <StyledInput
            type="text"
            placeholder="Name"
            value={name}
            disabled={true}
          />
          <StyledInput
            type="text"
            placeholder="From"
            value={from}
            disabled={true}
          />
          <StyledInput
            type="text"
            placeholder="To"
            value={to}
            disabled={true}
          />
          <StyledInput
            type="text"
            placeholder="Leave Options"
            value={leaveoption}
            disabled={true}
          />
          <StyledInput
            type="text"
            placeholder="Reason"
            value={reason}
            disabled={true}
          />
          <StyledInput
            value={currentstatus}
            onChange={(e) => processCurrentStatus(e.target.value)}
          />
          <StyledButton onClick={updateInfo}>Update Data</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};

export default SinglePageLeaveAdmin;
