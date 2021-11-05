import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 80%;
  max-width: 350px;
  min-width: 250px;
  margin-top: 1rem;
  height: 40px;
  border: none;
  margin: 0.5rem 2;
  border-radius: 8px;
  padding: 0 1rem;
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(-3px);
  }
`;
const Status = styled.div`
  height: 10px;
  width: 10px;
  background: #9d9d9d;
  border-radius: 10px;
  margin-left: 1rem;
  ${StyledInput}:focus + & {
    background: #ffa689;
  }
  ${StyledInput}:invalid + & {
    background: #fe2f75;
  }
  ${StyledInput}:valid + & {
    background: #70edb9;
  }
`;

const InputFile = ({ type, placeholder, value, onChange }) => {
  return (
    <Container>
      <StyledInput
        value={value && value}
        onChange={onChange && onChange}
        placeholder={placeholder && placeholder}
        type={type ? type : "text"}
        autoComplete="off"
      />
      <Status />
    </Container>
  );
};

export default InputFile;
