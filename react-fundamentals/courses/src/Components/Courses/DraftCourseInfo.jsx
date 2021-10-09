import React from "react";
import { useParams } from "react-router-dom";

const SampleCourseInfo = () => {
  const { course: courseID } = useParams();

  return (
    <>
      <div>{courseID}</div>
    </>
  );
};

export default SampleCourseInfo;
