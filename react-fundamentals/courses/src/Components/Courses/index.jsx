import React, { useState, useEffect } from 'react';
import CoursesList from './CoursesList';
import CreateCourse from './CreateCourse';

const Courses = ({ history }) => {
  const [courseView, setCourseView] = useState('');

  const viewOptions = {
    courseList: <CoursesList setCourseView={setCourseView} history={history} />,
  };
  Object.freeze(viewOptions);

  useEffect(() => {
    setCourseView(viewOptions.courseList);
  }, []);

  return courseView;
};

export default Courses;
