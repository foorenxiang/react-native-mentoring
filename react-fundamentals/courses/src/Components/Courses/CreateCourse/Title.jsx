import React from "react";
import PropTypes from "prop-types";

const Title = ({ title, titleHandler }) => (
  <>
    <div>Title</div>
    <input type="text" onChange={titleHandler} value={title} />
  </>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  titleHandler: PropTypes.func.isRequired,
};

export default Title;
