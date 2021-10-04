import React, { useEffect } from "react";
import { cardShadow, hoverEffect } from "../utils";
import AvatarImg from "../assets/profile.png";
import styled from "styled-components";
import Badge from "./Badge";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { listAttendaces } from "../actions/attendaceActions";
import { Link } from "react-router-dom";

const InvoicesContainer = styled.div`
  width: 37rem;
  border-radius: 1rem;
  margin-top: 2rem;
  background-color: white;
  height: 170%;
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
  width: 30%;
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

const Invoices = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const attendaceList = useSelector((state) => state.attendaceList);
  const { loading, attendaces, error } = attendaceList;

  const history = useHistory();
  console.log(attendaces);

  useEffect(() => {
    dispatch(listAttendaces());
    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch, history, userInfo]);

  return (
    <InvoicesContainer>
      <CardContent>
        {attendaces?.map((attendace) => {
          return (
            <Invoice>
              <Info>
                <Avatar>
                  <img src={AvatarImg} alt="" />
                </Avatar>
                <TextContainer>
                  <Title>{attendace.name}</Title>
                  {/* <SubTitle>{attendace.department}</SubTitle> */}
                  <SubTitle>Job Role</SubTitle>
                </TextContainer>
              </Info>
              <Container>
                <Badge content="Present" paid />
                <Link style={{ textDecoration: "none" }}>
                  <StyledButton>view </StyledButton>
                </Link>
              </Container>
            </Invoice>
          );
        })}
      </CardContent>
    </InvoicesContainer>
  );
};

export default Invoices;
