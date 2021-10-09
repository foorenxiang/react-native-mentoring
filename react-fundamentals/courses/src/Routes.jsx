import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Courses from "./Components/Courses";
import CreateCourse from "./Components/Courses/CreateCourse";
import SampleCourseInfo from "./Components/Courses/DraftCourseInfo";

const Routes = () => (
  <BrowserRouter>
    <Route path="/courses/" component={Header} />
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
      <Route exact path="/courses" component={Courses} />
      <Route exact path="/courses/:course" component={SampleCourseInfo} />
      <Route exact path="/courses/add" component={CreateCourse} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
