import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Components/Login';
import Courses from './Components/Courses';
import CreateCourse from './Components/Courses/CreateCourse';

const Routes = () => (
  <BrowserRouter>
    <Route path="/courses/" component={Header} />
    <Switch>
      <Route exact path="/login/" component={Login} />
      <Route exact path="/courses/" component={Courses} />
      <Route exact path="/courses/add" component={CreateCourse} />
      <Route path="/" component={() => <Redirect to="/courses/" />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
