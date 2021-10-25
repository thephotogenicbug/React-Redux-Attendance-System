import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  /* height: 97vh;
  background-color: orange;
  width: 120%; */
`;
const HeadingText = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin: 0 2rem;
`;

const Title = styled.h3`
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #ff5e63;
  }
`;
const SalaryContainer = styled.div`
  display: flex;
  margin-left: 2rem;
`;
const Salaryctc = styled.div`
  justify-content: center;
  align-items: center;
`;
const SalaryText = styled.h4`
  font-weight: 600;
  margin: 0.5rem;
`;
const SalarySubText = styled.h5`
  font-weight: 400;
  margin: 0.5rem;
`;

const SalaryBreakDown = styled.div`
  display: flex;
  margin-left: 2rem;
`;

const SalaryBreakDownTitle = styled.h3`

`
const SalaryInfo = styled.div``
const Payroll = () => {
  return (
    <>
      <Container>
        <HeadingText>
          <Title>Salary Structure</Title>
        </HeadingText>
        <HeadingText>
          <Title>Payslips</Title>
        </HeadingText>
      </Container>
      <SalaryContainer>
        <Salaryctc>
          <SalaryText>Monthly CTC: ₹10,000</SalaryText>
          <SalarySubText>Yearly CTC: ₹1,20,000</SalarySubText>
        </Salaryctc>
      </SalaryContainer>
      <SalaryBreakDown>
        <SalaryBreakDownTitle>Earnings</SalaryBreakDownTitle>
        <SalaryInfo></SalaryInfo>
      </SalaryBreakDown>
    </>
  );
};

export default Payroll;
