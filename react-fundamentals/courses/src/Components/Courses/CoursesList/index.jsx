/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import CourseCard from './CourseCard';
import { mockedCourseList } from './data';

const CourseCards = () =>
  mockedCourseList.map((course) => (
    <CourseCard courseData={course} key={`${course.title}_course_card`} />
  ));

const CoursesList = () => {
  const history = useHistory();
  return (
    <div>
      <input type="text" />
      <button type="button" onMouseDown={() => history.push('/courses/add')}>
        Add new course
      </button>
      <CourseCards />
    </div>
  );
};

export default CoursesList;
