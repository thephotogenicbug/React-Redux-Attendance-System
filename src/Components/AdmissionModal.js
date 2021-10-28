import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ModalBackground = styled.div`
  width: 89vh;
  height: 40vh;
  background-color: rgba(200, 200, 200);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  border-radius: 12px;
  margin-top: -5rem;
  margin-left: 7rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 49vh;
    height: 40vh;
    background-color: rgba(200, 200, 200);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    border-radius: 12px;
    margin-top: -45rem;
    margin-left: 2.4rem;
  }
`;
const ModalContainer = styled.div`
  width: 500px;
  height: 300px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;
const Title = styled.div`
  display: inline-block;
  text-align: center;
  margin-top: 10px;
 
`;
const Body = styled.div`
  flex: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  text-align: center;
`;
const Footer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CancelButton = styled.button`
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
`;
const FooterButton = styled.button`
  width: 160px;
  height: 45px;
  margin: 10px;
  border: none;
  background-color: #ff5961;
  color: white;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
`;
const FooterButtonView = styled.button`
  width: 160px;
  height: 45px;
  margin: 10px;
  border: none;
  background-color: #5dc399;
  color: white;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
`;
const Text = styled.h3`
  color: #333;
`
const SubText = styled.h5`
 color:#333;
`
const AdmissionModal = ({ closeModal }) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <CancelButton onClick={() => closeModal(false)}>X</CancelButton>
        <Title>
          <Text>Are You Sure You Want To Continue ?</Text>
        </Title>
        <Body></Body>
        <Footer>
          <Link to="/admission">
            <FooterButton>Admission Form</FooterButton>
          </Link>
          <FooterButtonView>View All Details</FooterButtonView>
        </Footer>
      </ModalContainer>
    </ModalBackground>
  );
};

export default AdmissionModal;
