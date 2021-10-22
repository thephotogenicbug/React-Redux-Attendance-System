import React, { useState } from "react";
import { cardShadow, hoverEffect } from "../utils";
import styled from "styled-components";
import Badge from "./Badge";
import Pagination from "./Pagination";

const RecommendProject = styled.div`
  border-radius: 1rem;
  height: 160%;
  padding: 1rem;
  background-color: white;
  width: 26vw;
  margin-top: 1rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
    height: max-content;
    margin: 2rem 0;
  }
`;
const CardContent = styled.div`
  margin: 0.4rem;
`;
const Detail = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.2rem;
    margin-bottom: 1rem;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Avatar = styled.div`
  margin-right: 1rem;
  img {
    height: 4rem;
    border-radius: 5rem;
  }
`;
const Info = styled.div``;
const InfoName = styled.h3`
  font-weight: 500;
`;
const InfoUpdate = styled.h5`
  font-weight: 300;
`;
const Title = styled.h4`
margin-top: 1rem;
  font-weight: 500;
`;
const ReasonInfo = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  color: #3b3b3b;
  margin-bottom: 0.5rem;
  margin-top: 0.2rem;
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
  padding: 0.5rem 2rem;
  border-radius: 1rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 0.4rem;
  }
`;
const Price = styled.div``;

const HeadingName = styled.h4`
  font-weight: 500;
  margin-top: -4rem;
`;

const PaginationWrapper = styled.div`
  margin-top: 1rem;
`;

const EmployeeLeave = () => {
  const [showPerPage, setShowPerPage] = useState(1);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  return (
    <>
      <HeadingName>Employee's on Leave</HeadingName>
      <RecommendProject>
        <CardContent>
          <Detail>
            <InfoContainer>
              <Info>
                <InfoName>Naveen</InfoName>
                <InfoUpdate>Requested on 22-10-2021</InfoUpdate>
              </Info>
            </InfoContainer>
            <Badge content="Sick Leave" />
          </Detail>
          <Title>Reason</Title>
          <ReasonInfo>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ReasonInfo>
          <PriceContainer>
            <Price>22-10-2021</Price>
            <Price>To</Price>
            <Price>24-10-2021</Price>
          </PriceContainer>
          <PaginationWrapper>
            <Pagination
              showPerPage={showPerPage}
              onPaginationChange={onPaginationChange}
            />
          </PaginationWrapper>
        </CardContent>
      </RecommendProject>
    </>
  );
};

export default EmployeeLeave;
