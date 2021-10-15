import React from "react";
import styled from "styled-components";
import { cardShadow, hoverEffect, themeColor } from "../utils";
import AvatarImg from "../assets/profile.png";

const YourProjects = styled.div`
  height: 70;
  margin-top: 1rem !important;
  width: 180%;
  background-color: white;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    margin-top: 1rem;
    width: 75%;
  }
`;
const Project = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;
const Avatar = styled.div`
  img {
    height: 3rem;
    width: 3rem;
    border-radius: 4rem;
  }
`;
const Detail = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h3`
  font-weight: 500;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
  }
`;
const SubTitle = styled.h5`
  font-weight: 300;
`;
const AllProjects = styled.h5`
  text-align: end;
  color: ${themeColor};
  cursor: pointer;
`;
// {
//   department.length == 0 ? (
//     <StyledButton>HI</StyledButton>
//   ) : (
//     <StyledInput type="text" />
//   );
// }
const Projects = () => {
  return (
    <YourProjects>
      <Project>
        <Avatar>
          <img src={AvatarImg} alt="" />
        </Avatar>
        <Detail>
          <Title>Student Name</Title>
          <SubTitle>Counseling</SubTitle>
        </Detail>
      </Project>
      {/* <Project>
        <Avatar>
          <img src={AvatarImg} alt="" />
        </Avatar>
        <Detail>
          <Title>Student Name</Title>
          <SubTitle>Counseling</SubTitle>
        </Detail>
      </Project> */}
      <AllProjects>See all Visitors</AllProjects>
    </YourProjects>
  );
};

export default Projects;
