import React from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar";
import AdminContent from "./AdminContent";
import AdminLeaveContent from "./AdminLeaveContent";
import AdminSideBar from "./AdminSideBar";

const Container = styled.div`
  display: flex;
  height: 97vh;
  margin-top: 10px;
  background: linear-gradient(to bottom right, white 0%, #ffdfd1 70%);
  border-radius: 2rem;
  margin-bottom: 6rem;
`;

const AdminLeaveContainer = () => {
  return (
    <Container>
      <AdminSideBar />
      <AdminLeaveContent />
    </Container>
  );
};

export default AdminLeaveContainer;
