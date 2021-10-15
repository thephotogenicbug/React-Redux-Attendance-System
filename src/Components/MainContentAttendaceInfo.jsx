import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SinglePageAttendaceData from "./SinglePageAttendaceData";

const Container = styled.div`
  width: 60%;
  background: linear-gradient(to bottom right, white 0% right, #e6e4ff 70%);
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  margin: 1rem 8rem 1rem 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;
const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;
const TitleText = styled.h3`
  height: 20%;
`;
const SectionOne = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40%;
  gap: 2rem;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;
const SectionTwo = styled.div`
  display: flex;
  gap: 2rem;
  height: 26vh;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    height: max-content;
    width: 100%;
  }
`;
const ColumnOne1 = styled.div`
  display: flex;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
`;
const ColumnOne2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

const InvoiceContainer = styled.div`
  height: 60%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

const ColumnTwo1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 115%;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    justify-content: center;
    align-items: center;
  }
`;
const ColumnTwo2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
  }
`;

const MainContentAttendaceInfo = ( {match }) => {
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
      <SubContainer>
        <SinglePageAttendaceData />
      </SubContainer>
    </Container>
  );
};

export default MainContentAttendaceInfo;
