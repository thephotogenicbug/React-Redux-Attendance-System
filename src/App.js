import styled from "styled-components";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import MainContent from "./Components/MainContent";
import Sidebar from "./Components/Sidebar";
import Signup from "./pages/Signup/Signup";
import MainContainer from "./Components/MainContainer";
import MainContainerTwo from "./Components/MainContainer2";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Signup} />
      <Route exact path="/dashboard" component={MainContainer} />
      <Route exact path="/attendance" component={MainContainerTwo} />
    </BrowserRouter>
    // <Container>
    //   <Sidebar />
    //   <MainContent />
    // </Container>
  );
}

export default App;
