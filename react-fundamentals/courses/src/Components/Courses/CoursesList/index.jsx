/* eslint-disable react/prop-types */
import React from 'react';
import { Redirect } from 'react-router-dom';
import CourseCard from './CourseCard';
import { mockedCourseList } from './data';

const CourseCards = () =>
  mockedCourseList.map((course) => (
    <CourseCard courseData={course} key={`${course.title}_course_card`} />
  ));

const CoursesList = ({ history }) => (
  <div>
    <input type="text" />
    <button type="button" onMouseDown={() => history.push('/courses/add')}>
      Add new course
    </button>
    <CourseCards />
  </div>
);

export default CoursesList;
