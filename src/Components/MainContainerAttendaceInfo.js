import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
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

const MainContainerAttendaceInfo = ({ match }) => {

    const params = useParams();
    const [name, processName] = useState();
    const [email, processEmail] = useState("");
    const [dob, processDob] = useState("");
    const [gender, processGender] = useState("");
    const [marital, processMarital] = useState("");
    const [mobile, processMobile] = useState("");
    const [sslc, processSslc] = useState("");
    const [puc, processPuc] = useState("");
    const [grad, processGrad] = useState("");
    const [postgrad, processPostGrad] = useState("");
    const [workone, processWorkone] = useState("");
    const [worktwo, processWorktwo] = useState("");
    const [workthree, processWorkthree] = useState("");
    const [achone, processAchone] = useState("");
    const [achtwo, processAchtwo] = useState("");
    const [achthree, processAchthree] = useState("");
    const [address, processAddress] = useState("");
    const [position, processPosition] = useState("");
    const [report, processReport] = useState("");

    useEffect(() => {
      const fetching = async () => {
        const { data } = await axios.get(
          `http://localhost:5000/api/attendace/get/${match.params.id}`
        );
        processName(data.name);

        console.log(data);
      };

      fetching();
    }, [match.params.id]);

  return (
    <Container>
      <Sidebar />
      <MainContentAttendaceInfo />
    </Container>
  );
};

export default MainContainerAttendaceInfo;
