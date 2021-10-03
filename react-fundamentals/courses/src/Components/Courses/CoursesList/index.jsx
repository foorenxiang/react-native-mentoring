import React from 'react';
import CourseCard from './CourseCard';
import { mockedCourseList } from './data';

const CourseCards = () =>
  mockedCourseList.map((course) => (
    <CourseCard courseData={course} key={`${course.title}_course_card`} />
  ));

const CoursesList = () => (
  <div>
    <input type="text" />
    <button type="button">Add new course</button>
    <CourseCards />
  </div>
);

export default CoursesList;
