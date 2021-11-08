import React from "react";
import styled from "styled-components";
import AdminAttendace from "./AdminAttendace";
import AdminLeave from "./AdminLeave";
import AdminNavbar from "./AdminNavbar";

const Container = styled.div`
  width: 60%;
  background: linear-gradient(to bottom right, white 0% right, #e6e4ff 70%);
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  margin: 1rem 8rem 1rem 2rem;
`;
const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  flex-direction: column;
  gap: 4rem;
`;

const AdminLeaveContent = () => {
  return (
    <Container>
      <AdminNavbar />
      <SubContainer>
        <AdminLeave />
      </SubContainer>
    </Container>
  );
};

export default AdminLeaveContent;
