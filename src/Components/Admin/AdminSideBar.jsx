import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import Badge from "./Badge";
// import AvatarImg from "../assets/profile.png";
import { darkThemeColor } from "../../utils";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { MdViewWeek } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDashboard, AiOutlineLogin } from "react-icons/ai";
import { Link as LinkTag } from "react-router-dom";
// import { listAttendaces } from "../actions/attendaceActions";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  width: 20%;
  height: 100% !important;
  border-radius: 2rem;
  background-color: #ff5e63;
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 90%;
    margin: auto;
    height: max-content !important;
  }
`;
const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Avatar = styled.img`
  height: 5rem;
  border-radius: 6rem;
  margin-top: 14%;
`;
const Name = styled.h2`
  color: white;
  font: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: ${darkThemeColor};
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;
const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
`;
const Link = styled.li`
  margin-left: 10%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;
const ContactContainer = styled.div`
  width: 60%;
  background-color: #fc3d42;
  color: #c4c4c4;
  height: 15%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  a {
    color: white;
    text-decoration: none;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

const AdminSideBar = () => {
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pic, setPic] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState();
  const [picMessage, setPicMessage] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    if (!adminInfo) {
      history.push("/adminlogin");
    } else {
      setName(adminInfo.name);
      setEmail(adminInfo.email);
      setPic(adminInfo.pic);
    }
  }, [history, adminInfo]);

  const [openModal, setOpenModal] = useState(false);
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={pic} />
        <Name>{`${adminInfo?.name}`}</Name>
        {/* <Badge content="Level" /> */}
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <LinkTag to="/viewattendace" style={{ textDecoration: "none" }}>
            <Link>
              <AiFillDashboard />
              <h3>View Attendance</h3>
            </Link>
          </LinkTag>
          <LinkTag to="/viewleave" style={{ textDecoration: "none" }}>
            <Link>
              <AiOutlineLogin />
              <h3>View Leave</h3>
            </Link>
          </LinkTag>
        </Links>
        <ContactContainer>
          <span>Having trouble ? </span>
          <a href="mailto:naveen@eduprov.com">Report Here</a>
        </ContactContainer>
      </LinksContainer>
    </Container>
  );
};

export default AdminSideBar;
