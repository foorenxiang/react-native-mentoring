import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Header';
import Courses from './Components/Courses';
import CreateCourse from './Components/Courses/CreateCourse';

const DefaultView = () => <>Please go to /courses route</>;

const Routes = () => (
  <BrowserRouter>
    <Route path="/courses/" component={Header} />
    <Route exact path="/courses/" component={Courses} />
    <Route exact path="/courses/add" component={CreateCourse} />
    <Route component={DefaultView} />
  </BrowserRouter>
);

export default Routes;
