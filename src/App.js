import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import MainContainer from "./Components/MainContainer";
import MainContainerTwo from "./Components/MainContainer2";
import Signin from "./pages/Signin/Signin";
import SinglePageAttendaceData from "./Components/SinglePageAttendaceData";
import MainContainerApplyForLeave from "./Components/MainContainerApplyForLeave";
import MainContainerAdmission from "./Components/MainContainerAdmission";
import MainContainerWalkin from "./Components/MainContainerWalkin";
import MainContainerPayroll from "./Components/MainContainerPayroll";
import Login from "./Components/Admin/Login/Login";
import AdminContainer from "./Components/Admin/AdminContainer";
import SinglePageAttendaceAdmin from "./Components/Admin/SinglePageAttendaceAdmin";
import SinglePageLeaveAdmin from './Components/Admin/SinglePageLeaveAdmin';
import MTable from "./Components/Admin/MTable";
import Register from "./Components/Admin/Register/Register";
import AdminLeaveContainer from './Components/Admin/AdminLeaveContainer';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/adminlogin/data" component={AdminContainer} />
      <Route exact path="/adminlogin/data/:id" component={SinglePageAttendaceAdmin} />
      <Route exact path="/viewattendace" component={AdminContainer} />
      <Route exact path="/viewleave" component ={AdminLeaveContainer} />
      <Route exact path="/viewleave/:id" component={SinglePageLeaveAdmin} />
      <Route exact path="/register" component={Signup} />
      <Route exact path="/dashboard" component={MainContainer} />
      <Route exact path="/attendance" component={MainContainerTwo} />
      <Route exact path="/dashboard/:id" component={SinglePageAttendaceData} />
      <Route exact path="/applyforleave" component={MainContainerApplyForLeave}/>
      <Route exact path="/admission" component={MainContainerAdmission} />
      <Route exact path="/walkin" component={MainContainerWalkin} />
      <Route exact path="/payroll" component={MainContainerPayroll} />
    </BrowserRouter>
  );
}

export default App;
