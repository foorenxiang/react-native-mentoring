import React, { useState, useEffect } from 'react';
import CoursesList from './CoursesList';
import CreateCourse from './CreateCourse';

const Courses = () => {
  const [courseView, setCourseView] = useState('');

  const viewOptions = {
    courseList: <CoursesList setCourseView={setCourseView} />,
    createCourse: <CreateCourse setCourseView={setCourseView} />,
  };
  Object.freeze(viewOptions);

  useEffect(() => {
    setCourseView(viewOptions.createCourse);
  }, []);

  return courseView;
};

export default Courses;
