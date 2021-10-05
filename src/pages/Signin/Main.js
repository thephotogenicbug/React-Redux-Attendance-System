import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100% !important;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 60px;
    font-weight: 900;
    color: #343434;
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

const Main = () => {
  return (
    <Container>
      <h1>
        Join The <br /> Team
      </h1>
    </Container>
  );
};

export default Main;
