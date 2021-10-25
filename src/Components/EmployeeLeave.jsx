import React, { useEffect, useState } from "react";
import { cardShadow, hoverEffect } from "../utils";
import styled from "styled-components";
import Badge from "./Badge";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { listLeaves } from "../actions/leaveActions";
import axios from "axios";
import { useHistory } from "react-router";

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

const NoDataFoundMessage = styled.h4`
  display: flex;
  margin-top: 7rem;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 1rem;
  }
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

  const dispatch = useDispatch();

  const leaveList = useSelector((state) => state.leaveList);
  const { loading, leaves, error } = leaveList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const leaveCreate = useSelector((state) => state.leaveCreate);
  const { success: successCreate } = leaveCreate;

  const [leavelist, updateLeaveList] = useState([]);

  const history = useHistory();

  useEffect(() => {
    dispatch(listLeaves());
    updateLeaveList(leaves);
  }, [dispatch, successCreate, history, userInfo]);

  return (
    <>
      <HeadingName>Employee's on Leave</HeadingName>
      <RecommendProject>
        {leaves
          ?.reverse()
          .slice(pagination.start, pagination.end)
          .map((xleave, index) => {
            return (
              <CardContent key={index}>
                <Detail>
                  <InfoContainer>
                    <Info>
                      <InfoName>{xleave.name}</InfoName>
                      <InfoUpdate>
                        Requested on {xleave.createdAt.substring(0, 10)}
                      </InfoUpdate>
                    </Info>
                  </InfoContainer>
                  <Badge content={xleave.leaveoption} />
                </Detail>
                <Title>Reason</Title>
                <ReasonInfo>{xleave.reason}</ReasonInfo>
                <PriceContainer>
                  <Price>{xleave.from}</Price>
                  <Price>To</Price>
                  <Price>{xleave.to}</Price>
                </PriceContainer>
              </CardContent>
            );
          })}
        {(leavelist?.length >= 1 && (
          <Pagination
            showPerPage={showPerPage}
            onPaginationChange={onPaginationChange}
          />
        )) || (
          <NoDataFoundMessage>
            No Employee's on LeaveData Found
          </NoDataFoundMessage>
        )}
      </RecommendProject>
    </>
  );
};

export default EmployeeLeave;
