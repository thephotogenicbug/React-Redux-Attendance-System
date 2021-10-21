import React from "react";
import { cardShadow, hoverEffect } from "../utils";
import AvatarImg from "../assets/profile.png";
import styled from "styled-components";
import Badge from "./Badge";

const RecommendProject = styled.div`
  border-radius: 1rem;
  height: 145%;
  padding: 1rem;
  background-color: white;
  width: 26.0vw;
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
  font-weight: 500;
`;
const ProjectInfo = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  color: #3b3b3b;
  margin-bottom: 0.5rem;
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
  padding: 0.5rem 2rem;
  border-radius: 1rem;
  background-color: rgba(146, 166, 255, 0.3);
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 0.4rem;
  }
`;
const Price = styled.div``;

const ProjectRecommendation = () => {
  return (
    <RecommendProject>
      <CardContent>
        <InfoName>Employee's on Leave</InfoName>
        {/* <Detail>
          <InfoContainer>
            <Avatar>
              <img src={AvatarImg} alt="" />
            </Avatar>
            <Info>
              <InfoName>Naveen</InfoName>
              <InfoUpdate>Updated 10m ago</InfoUpdate>
            </Info>
          </InfoContainer>
          <Badge content="Design" />
        </Detail>
        <Title>
          Need a designer to form branding essentials for my business
        </Title>
        <ProjectInfo>
          Looking for a talented brand designer to create all the branding
          materials for my new startup
        </ProjectInfo>
        <PriceContainer>
          <Price>$8700/month</Price>
          <Badge content="Full Time" clean />
        </PriceContainer> */}
      </CardContent>
    </RecommendProject>
  );
};

export default ProjectRecommendation;
