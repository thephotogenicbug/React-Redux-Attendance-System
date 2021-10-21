import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { login, register } from "../../actions/userActions";
import LogoImg from "../../assets/logo.png";
import Spinner from "../../Components/Spinner";
import Input from "./Input";

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;
  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }
  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`;
const LogoWrapper = styled.div`
  img {
    height: 0rem;
  }
  h3 {
    text-align: center;
    color: #ff8d8d;
    font-size: 18px;
  }
  span {
    color: #5dc399;
    font-weight: bold;
    font-size: 18px;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }
  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #7ded89;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const Sidebar = () => {
  const [email, pickEmail] = useState("");
  const [password, pickPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const history = useHistory();

  useEffect(() => {
    if (userInfo) {
      history.push("/dashboard");
    }
  }, [history, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

  return (
    <Container>
      <LogoWrapper>
        <img src={LogoImg} />
        <h3>
          Attendace & Payroll <span>System</span>
        </h3>
      </LogoWrapper>
      <Form>
        <h3>Sign In</h3>
        {/* {message} */}
        {loading && <Spinner />}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => pickEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => pickPassword(e.target.value)}
        />
        <Input type="password" placeholder="Confirm Password" />
        <button onClick={submitHandler}>Sign In</button>
      </Form>
      <div>
        {/* <Terms>
          By Signing up, i agree to the Privacy Policy <br /> and Terms of
          Service
        </Terms> */}
        <h4>
          New User ?{" "}
          <Link to="/register" style={{ textDecoration: "none" }}>
            <span>Sign Up</span>
          </Link>
        </h4>
      </div>
    </Container>
  );
};

export default Sidebar;
