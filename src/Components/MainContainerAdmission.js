import React from "react";
import styled from "styled-components";
import MainContent from "./MainContent";
import MainContentTwo from "./MainContent2";
import MainContentAdmission from "./MainContentAdmission";
import MainContentApplyForLeave from "./MainContentApplyForLeave";
import Sidebar from "./Sidebar";

const Container = styled.div`
  display: flex;
  height: 97vh;
  margin-top: 10px;
  background: linear-gradient(to bottom right, white 0%, #ffdfd1 70%);
  border-radius: 2rem;
  margin-bottom: 6rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

const MainContainerAdmission = () => {
  return (
    <Container>
      <Sidebar />
      <MainContentAdmission />
    </Container>
  );
};

export default MainContainerAdmission;
