import React, { useEffect, useState } from "react";
import { cardShadow, hoverEffect } from "../utils";
import AvatarImg from "../assets/profile.png";
import styled from "styled-components";
import Badge from "./Badge";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { listAttendaces } from "../actions/attendaceActions";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import Pagination from "./Pagination";

const InvoicesContainer = styled.div`
  position: relative;
  width: 60rem;
  border-radius: 1rem;
  margin-top: 1rem;
  background-color: white;
  height: max-content;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const CardContent = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 2rem 0;
  }
`;
const Invoice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0.4rem;
  padding-top: 0.6rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
`;
const Avatar = styled.div`
  img {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 3.5rem;
  }
`;
const TextContainer = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h4``;
const SubTitle = styled.h5`
  font-weight: 400;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    flex-direction: column;
    gap: 0.6rem;
  }
`;
const Price = styled.div``;

const StyledButton = styled.button`
  display: block;
  background-color: #f7797d;
  text-decoration: none !important;
  color: white;
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

const AttendaceSpinner = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  margin-left: 28rem;
`;


const AttendanceData = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const attendaceList = useSelector((state) => state.attendaceList);
  const { loading, attendaces, error } = attendaceList;

  const attendaceCreate = useSelector((state) => state.attendaceCreate);
  const { success: successCreate } = attendaceCreate;

  const history = useHistory();
  console.log(attendaces);

  useEffect(() => {
    dispatch(listAttendaces());
    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch, successCreate, history, userInfo]);

  const [showPerPage, setShowPerPage] = useState(2);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  return (
    <>
      <InvoicesContainer>
        <CardContent>
          <AttendaceSpinner>{loading && <Spinner />}</AttendaceSpinner>
          {attendaces
            ?.slice(pagination.start, pagination.end)
            .map((attendace) => {
              return (
                <>
                  <Invoice>
                    <Info>
                      <Avatar>
                        <img src={AvatarImg} alt="" />
                      </Avatar>
                      <TextContainer>
                        <Title>{attendace.name}</Title>
                        <SubTitle>{attendace.department}</SubTitle>
                      </TextContainer>
                    </Info>
                    <Container>
                      <Badge content="Present" paid />
                      <p>{attendace.createdAt.substring(0, 10)}</p>
                      <Link
                        to={`/view/${attendace._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <StyledButton>view </StyledButton>
                      </Link>
                    </Container>
                  </Invoice>
                </>
              );
            })}
        </CardContent>
      </InvoicesContainer>
      <Pagination
        showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
      />
    </>
  );
};

export default AttendanceData;
