/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CourseCard from "./CourseCard";
import { backendURL } from "../../../utils";
import { mockedCourseList } from "../../../utils/data";

const CourseCards = () => {
  const [courseListData, setCourseListData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const endpoint = `${backendURL}/courses/all`;
        const response = await fetch(endpoint);
        if (response?.successful) {
          setCourseListData([...response.result]);
        }
      } catch (e) {
        setCourseListData(mockedCourseList);
      }
    })();
  }, []);

  return courseListData.map((course) => (
    <CourseCard courseData={course} key={`${course.title}_course_card`} />
  ));
};

const CoursesList = () => {
  const history = useHistory();
  return (
    <div>
      <input type="text" />
      <button type="button" onMouseDown={() => history.push("/courses/add")}>
        Add new course
      </button>
      <CourseCards />
    </div>
  );
};

export default CoursesList;
