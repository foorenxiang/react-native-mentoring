import React from "react";
import PropTypes from "prop-types";

const UpdateCourseButton = ({ updateCourse }) => (
  <button type="button" onMouseDown={updateCourse}>
    Update course
  </button>
);

UpdateCourseButton.propTypes = {
  updateCourse: PropTypes.func.isRequired,
};

export default UpdateCourseButton;
