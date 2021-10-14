import React from "react";
import styled from "styled-components";
import MainContent from "./MainContent";
import MainContentTwo from "./MainContent2";
import MainContentAttendaceInfo from "./MainContentAttendaceInfo";
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

const MainContainerAttendaceInfo = () => {
  return (
    <Container>
      <Sidebar />
      < MainContentAttendaceInfo />
    </Container>
  );
};

export default MainContainerAttendaceInfo;
