import React, { useState, useEffect } from 'react';
import CoursesList from './CoursesList';

const Courses = () => {
  const [courseView, setCourseView] = useState('');

  const viewOptions = {
    courseList: <CoursesList setCourseView={setCourseView} />,
  };
  Object.freeze(viewOptions);

  useEffect(() => {
    setCourseView(viewOptions.courseList);
  }, []);

  return courseView;
};

export default Courses;
