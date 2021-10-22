import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Badge from "./Badge";
import { cardShadow, hoverEffect, themeColor } from "../utils";
import { Link } from "react-router-dom";
import AdmissionModal from "./AdmissionModal";
import { useDispatch } from "react-redux";
import { listAdmissions } from "../actions/admissionActions";
import { useSelector } from "react-redux";
import axios from "axios";
import { Spinner } from "react-bootstrap";

const InfoCard = styled.div`
  height: 60%;
  width: 14rem;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  color: white;
  margin-top: 3rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
`;
const Card = styled.div`
  background-color: #fabbbe;
  border-radius: 1rem;
  margin-bottom: 1rem;
`;
const CardContent = styled.div`
  padding: 0.7rem 1rem 0.3rem 1rem;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
  margin-top: 1rem;
  ${({ justify }) =>
    justify &&
    `
     justify-content:space-around;
     width:90%;

 `}
`;
const Digit = styled.div`
  background-color: ${themeColor};
  padding: 0.8rem 1rem;
  font-size: 1.3rem;
  border-radius: 1rem;
`;
const InfoContainer = styled.div`
  margin-left: 0.7rem;
`;
const Title = styled.h3`
  color: black;
`;
const SubTitle = styled.h5`
  color: #333333;
  font-weight: normal;
`;

const AttendaceSpinner = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  margin-left: 18rem;
`;


const Info = () => {
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  const admissionList = useSelector((state) => state.admissionList);
  const { loading , admissions, error } = admissionList;

  console.log(admissions);

  useEffect(() => {
    dispatch(listAdmissions());
  }, [dispatch]);

  return (
    <>
      <InfoCard>
        <Card>
          <CardContent
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <Row>
              {loading ? <Digit>0</Digit> : <Digit>{admissions?.length}</Digit>}
              <InfoContainer>
                <Title>Admissions</Title>
              </InfoContainer>
            </Row>

            <Row justify></Row>
          </CardContent>
        </Card>
        {openModal && <AdmissionModal closeModal={setOpenModal} />}
      </InfoCard>
    </>
  );
};

export default Info;
