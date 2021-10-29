import React from 'react'
import styled from 'styled-components'
import Sidebar from '../Sidebar';
import AdminContent from './AdminContent';
import AdminSideBar from './AdminSideBar';

const Container = styled.div`
  display: flex;
  height: 97vh;
  margin-top: 10px;
  background: linear-gradient(to bottom right, white 0%, #ffdfd1 70%);
  border-radius: 2rem;
  margin-bottom: 6rem;

`;

const AdminContainer = () => {
    return (
        <Container>
          <AdminSideBar />
          <AdminContent />
        </Container>
    )
}

export default AdminContainer
