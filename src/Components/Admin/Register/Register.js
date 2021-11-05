import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { register } from "../../../actions/adminActions";
import Input from "./Input";
import InputFile from "./InputFile";

const Wrapper = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  /* background-color: orange; */
  background-color: rgba(255, 255, 255, 0.8);
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;
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
    &::hover {
      transform: translateY(-3px);
    }
  }
`;

const Register = () => {
  const [name, pickName] = useState("");
  const [email, pickEmail] = useState("");
  const [password, pickPassword] = useState("");
  const [confirmpassword, pickConfirmPassword] = useState("");
  const [pic, setPic] = useState(
    "https://res.cloudinary.com/dv5jjlsd7/image/upload/v1631444571/user_1_qy7hlx.png"
  );
  const [message, setMessage] = useState("");
  const [setpicmessage, setPicMessage] = useState("");

  const dispatch = useDispatch();

  const adminRegister = useSelector((state) => state.adminRegister);
  const { loading, error, adminInfo } = adminRegister;

  const Register = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setMessage("Password does not match");
    }
    dispatch(register(name, email, password, pic));
  };

  const history = useHistory();

  useEffect(() => {
    if (adminInfo) {
      history.push("/admin/data");
    }
  }, [history, adminInfo]);

  const postDetails = (pics) => {
    if (
      pics ===
      "https://res.cloudinary.com/dv5jjlsd7/image/upload/v1631444571/user_1_qy7hlx.png"
    ) {
      return setPicMessage("Please Select an Image");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "noteszipper");
      data.append("cloud_name", "dv5jjlsd7");
      fetch("https://api.cloudinary.com/v1_1/dv5jjlsd7/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  return (
    <Wrapper>
      <Form>
        <h3>Admin Register</h3>
        <Input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => pickName(e.target.value)}
        />
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
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmpassword}
          onChange={(e) => pickConfirmPassword(e.target.value)}
        />
        <InputFile
          type="file"
          placeholder="Select Profile image"
          onChange={(e) => postDetails(e.target.files[0])}
        />
        <button onClick={Register}>Register</button>
      </Form>
    </Wrapper>
  );
};

export default Register;
