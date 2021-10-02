import styled from "styled-components";
import "./App.css";
import MainContent from "./Components/MainContent";
import Sidebar from "./Components/Sidebar";

const Container = styled.div`
  display: flex;
  height: 97vh;
  margin-top: 10px;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
`;

function App() {
  return (
    <Container>
      <Sidebar />
      <MainContent />
    </Container>
  );
}

export default App;
