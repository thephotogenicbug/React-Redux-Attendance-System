import React, { useEffect, useState } from "react";
import { cardShadow, hoverEffect } from "../utils";
import styled from "styled-components";
import Badge from "./Badge";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { listLeaves } from "../actions/leaveActions";
import { useHistory } from "react-router";
import {Typography,} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "10px 10px",
    maxWidth: 950,
    marginLeft: "5rem",
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: "#fc3d42",
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light),
  },
  name: {
    fontWeight: "bold",
    color: theme.palette.secondary.dark,
  },
  status: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "red",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
  },
}));

const RecommendProject = styled.div`
  border-radius: 1rem;
  height: 160%;
  padding: 1rem;
  background-color: white;
  width: 26vw;
  margin-top: -2rem;
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
  const classes = useStyles();
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
      <RecommendProject>
        {leaves?.slice(pagination.start, pagination.end)
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
                <Typography
                  className={classes.status}
                  style={{
                    backgroundColor:
                      (xleave.currentstatus === "Confirmed" && "green") ||
                      (xleave.currentstatus === "Pending" && "orange") ||
                      (xleave.currentstatus === "Denied" && "red"),
                  }}
                >
                  {xleave?.currentstatus}
                </Typography>
                <PriceContainer>
                  <Price>{xleave.from}</Price>
                  <Price>To</Price>
                  <Price>{xleave.to}</Price>
                </PriceContainer>
              </CardContent>
            );
          })}
        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
        />
      </RecommendProject>
    </>
  );
};

export default EmployeeLeave;
