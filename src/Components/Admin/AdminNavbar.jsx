import React, { useEffect } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePoweroff } from "react-icons/ai";
import { useHistory } from "react-router";
import { logout } from "../../actions/adminActions";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;
const Text = styled.h1`
  span {
    font-weight: 500;
    color: #484258;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 1rem;
  }
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const PowerIcon = styled.div`
  height: 3rem;
  width: 3rem;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  cursor: pointer;

  svg {
    color: #f73437;
    font-size: 25px;
  }
`;

const AdminNavbar = () => {
  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.userLogin);
  const { adminInfo } = adminLogin;

  const history = useHistory();

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/adminlogin");
  };

  return (
    <NavbarContainer>
      <Text></Text>
      <InputContainer>
        {/* <Icon>
          <FiSearch />
        </Icon>
        <Input type="text" placeholder="Search..." /> */}
        <PowerIcon>
          <AiOutlinePoweroff onClick={logoutHandler} />
        </PowerIcon>
      </InputContainer>
    </NavbarContainer>
  );
};

export default AdminNavbar;
